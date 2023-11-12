import * as React from "react";
import { graphql } from "gatsby";
import { MainLayout, LandingHero } from "../components";

const HomePage = ({ data }) => {
  const { allMarkdownRemark, allCloudinaryMedia } = data || {};
  const { edges: landingContentArray } = allMarkdownRemark || [];
  const { edges: cloudinaryMediaArray } = allCloudinaryMedia || [];
  const landingContent = landingContentArray?.map((edge) => edge.node) || [];
  const cloudinaryMedia = cloudinaryMediaArray?.map((edge) => edge.node) || [];
  const landingHero = {
    title: landingContent[0]?.frontmatter?.title,
    headline: landingContent[0]?.frontmatter?.headline,
    body: landingContent[0]?.frontmatter?.body,
    image: cloudinaryMedia[3]?.gatsbyImageData,
  };

  return (
    <MainLayout>
      <LandingHero
        label={landingHero?.title}
        image={landingHero?.image}
        heroHeadline={landingHero?.headline}
        heroBodyText={landingHero?.body}
      />
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
            body
          }
        }
      }
    }
    allCloudinaryMedia(filter: { folder: { regex: "/cafe/landing/" } }) {
      edges {
        node {
          id
          gatsbyImageData
        }
      }
    }
  }
`;
