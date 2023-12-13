import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import combineContent from "../../utils/combineContent";
import {
  MainLayout,
  LandingHero,
  SectionDivider,
  SocialMediaSection,
  AboutSection,
  Seo,
} from "../components";

const HomePage = ({ data }) => {
  const { carouselData, aboutData, carouselImages, socialMediaPhotos, site } =
    data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const aboutContent = aboutData?.edges?.[0]?.node?.frontmatter || {};
  const carouselImageContent =
    carouselImages?.edges?.map((edge) => edge.node) || [];
  const combinedCarouselContent = combineContent({
    content: carouselContent,
    media: carouselImageContent,
  });
  const socialMedia = socialMediaPhotos?.edges?.map((edge) => edge.node) || [];

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
        <Container maxWidth="xl">
          <SectionDivider headline="about us" />
          <AboutSection
            headline={aboutContent?.title}
            aboutImage={aboutContent?.image}
            aboutText={aboutContent?.about}
          />
          <SectionDivider headline="Follow Us On Social" />
          <SocialMediaSection
            socialImages={socialMedia}
            facebookHandle="@Rissa's Little Cafe"
            instagramHandle="@rissaslittlecafe"
            facebookLink="https://www.facebook.com/rissaslittlecafe"
            instagramLink="https://www.instagram.com/rissaslittlecafe/"
          />
        </Container>
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
    aboutData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
            about
            image
          }
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
            aspectRatio: 2
          )
        }
      }
    }
    socialMediaPhotos: allCloudinaryMedia(
      filter: { folder: { regex: "/cafe/instagram/" } }
      limit: 4
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
