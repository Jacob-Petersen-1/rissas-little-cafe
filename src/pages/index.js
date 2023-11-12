import * as React from "react";
import { graphql } from "gatsby";
import { MainLayout, LandingHero } from "../components";

const HomePage = ({ data }) => {
  const { allMarkdownRemark, allCloudinaryMedia } = data || {};
  const { edges: landingContentArray } = allMarkdownRemark || [];
  const { edges: cloudinaryMediaArray } = allCloudinaryMedia || [];
  const landingText = landingContentArray?.map((edge) => edge.node) || [];
  const landingMedia = cloudinaryMediaArray?.map((edge) => edge.node) || [];
  const combinedData = landingText.map((content, index) => ({
    ...content.frontmatter,
    cloudinaryData: landingMedia[index],
  }));

  console.log("combinedData", combinedData);

  return (
    <MainLayout>
      <LandingHero landingContent={combinedData} />
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
        }
      }
    }
  }
`;
