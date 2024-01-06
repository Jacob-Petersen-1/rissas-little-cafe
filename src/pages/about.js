import React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import { AboutSection, MainLayout, Seo, PageLayout } from "../components";

const AboutPage = ({ data }) => {
  const { aboutData, site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};
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
        title="About Us"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <PageLayout maxWidth="lg">
          <AboutSection
            headline={aboutTitle}
            aboutImage={aboutImage}
            aboutText={about}
            instagramHandle={instagram}
            instagramLink={instagramLink}
            facebookHandle={facebook}
            facebookLink={facebookLink}
          />
        </PageLayout>
      </MainLayout>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        image
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
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`;
