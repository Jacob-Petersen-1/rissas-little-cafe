import React from "react";
import { graphql } from "gatsby";
import {
  AboutSection,
  SocialMediaGrid,
  Navigation,
  SectionHeadline,
  Seo,
  PageLayout,
} from "../components";

const AboutPage = ({ data }) => {
  const { aboutData, socialMediaImages, site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};
  const socialMediaImagesContent =
    socialMediaImages?.edges?.map((edge) => edge.node) || [];
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
      <Navigation>
        <PageLayout maxWidth="xl" topMargin={100}>
          <SectionHeadline headline="About Us" showLines={false} />
          <AboutSection
            headline={aboutTitle}
            aboutImage={aboutImage}
            aboutText={about}
            instagramHandle={instagram}
            instagramLink={instagramLink}
            facebookHandle={facebook}
            facebookLink={facebookLink}
          />
          <SocialMediaGrid images={socialMediaImagesContent} />
        </PageLayout>
      </Navigation>
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
    socialMediaImages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/media/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
                quality: 80
                placeholder: BLURRED
                aspectRatio: 1.33
              )
            }
          }
        }
      }
    }
  }
`;
