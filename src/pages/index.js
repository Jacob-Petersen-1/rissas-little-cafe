import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import combineContent from "../../utils/combineContent";
import {
  MainLayout,
  LandingHero,
  SocialMediaSection,
  Seo,
} from "../components";

const HomePage = ({ data }) => {
  const { carouselData, carouselImages, socialMediaPhotos, site } = data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const carouselImageContent =
    carouselImages?.edges?.map((edge) => edge.node) || [];
  const socialMedia = socialMediaPhotos?.edges?.map((edge) => edge.node) || [];
  const combinedCarouselContent = combineContent({
    content: carouselContent,
    media: carouselImageContent,
  });

  return (
    <>
      <Seo
        title={title}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <LandingHero landingContent={combinedCarouselContent} />
        <Container maxWidth="xl"></Container>
      </MainLayout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
    carouselData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/carousel/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            headline
            position
            image
          }
          html
        }
      }
    }
    carouselImages: allCloudinaryMedia(
      filter: { folder: { regex: "/cafe/carousel/" } }
    ) {
      edges {
        node {
          cloudinaryData {
            secure_url
          }
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            aspectRatio: 1.65
          )
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
