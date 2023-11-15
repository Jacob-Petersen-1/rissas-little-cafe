import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import combineContent from "../../utils/combineContent";
import { MainLayout, LandingHero, SocialMediaSection } from "../components";

const HomePage = ({ data }) => {
  const { allMarkdownRemark, allCloudinaryMedia, socialMediaPhotos } =
    data || {};
  const { edges: landingContentArray } = allMarkdownRemark || [];
  const { edges: cloudinaryMediaArray } = allCloudinaryMedia || [];
  const landingText = landingContentArray?.map((edge) => edge.node) || [];
  const imageCarosel = cloudinaryMediaArray?.map((edge) => edge.node) || [];
  const socialMedia = socialMediaPhotos?.edges.map((edge) => edge.node) || [];
  const combinedLandingContent =
    combineContent(landingText, imageCarosel) || [];

  return (
    <MainLayout>
      <LandingHero landingContent={combinedLandingContent} />
      <Container maxWidth="xl">
        <SocialMediaSection
          instagramHandle={"@rissaslittlecafe"}
          facebookHandle={"Risa's Little Cafe"}
          instagramLink={
            "https://instagram.com/rissaslittlecafe?igshid=MWx5bzd5NW1ndHJpZQ=="
          }
          facebookLink="https://www.facebook.com/rissaslittlecafe/photos"
          socialImages={socialMedia}
        />
      </Container>
    </MainLayout>
  );
};
export const Head = () => <head title="Home" />;

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/landing/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            headline
            position
            imageUrl
            body
          }
        }
      }
    }
    allCloudinaryMedia(filter: { folder: { regex: "/cafe/landing/" } }) {
      edges {
        node {
          id
          gatsbyImageData(
            layout: FULL_WIDTH
            aspectRatio: 2.5
            placeholder: BLURRED
          )
          cloudinaryData {
            url
          }
        }
      }
    }
    socialMediaPhotos: allCloudinaryMedia(
      filter: { folder: { regex: "/cafe/instagram/" } }
    ) {
      edges {
        node {
          id
          gatsbyImageData(
            layout: FIXED
            aspectRatio: 1
            placeholder: BLURRED
            width: 150
            height: 150
          )
        }
      }
    }
  }
`;
