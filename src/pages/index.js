import * as React from "react";
import { graphql } from "gatsby";
import { Container, Box } from "@mui/material";
import combineContent from "../../utils/combineContent";
import {
  MainLayout,
  LandingHero,
  SectionDivider,
  AboutSection,
  Seo,
} from "../components";

const HomePage = ({ data }) => {
  const { carouselData, aboutData, carouselImages, site } = data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const aboutContent = aboutData?.edges?.[0]?.node?.frontmatter || {};
  const {
    title: aboutTitle,
    instagram,
    instagramLink,
    facebook,
    facebookLink,
    about,
    image: aboutImage,
  } = aboutContent || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const carouselImageContent =
    carouselImages?.edges?.map((edge) => edge.node) || [];
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
        <Container maxWidth="xl">
          <SectionDivider headline="about us" />
          <AboutSection
            headline={aboutTitle}
            aboutImage={aboutImage}
            aboutText={about}
            instagramHandle={instagram}
            instagramLink={instagramLink}
            facebookHandle={facebook}
            facebookLink={facebookLink}
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
            facebook
            facebookLink
            instagram
            instagramLink
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
            layout: CONSTRAINED
            placeholder: BLURRED
            breakpoints: [300, 500, 700, 900, 1200, 1600]
            sizes: "(max-width: 300px) 280px, (max-width: 500px) 480px, (max-width: 700px) 680px, (max-width: 900px) 880px, (max-width: 1200px) 1180px, 1600px"
            aspectRatio: 2
          )
        }
      }
    }
  }
`;
