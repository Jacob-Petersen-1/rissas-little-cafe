import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import {
  MainLayout,
  LandingHero,
  SectionDivider,
  AboutSection,
  Seo,
} from "../components";

const HomePage = ({ data }) => {
  const { carouselData, aboutData, site } = data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const aboutContent = aboutData?.edges?.[0]?.node || {};
  const { frontmatter: aboutFrontmatter, image: aboutImage } =
    aboutContent || {};
  const {
    title: aboutTitle,
    instagram,
    instagramLink,
    facebook,
    facebookLink,
    about,
  } = aboutFrontmatter || {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <LandingHero landingContent={carouselContent} />
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
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 80
                aspectRatio: 1.5
              )
            }
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
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 80
              )
            }
          }
        }
      }
    }
  }
`;
