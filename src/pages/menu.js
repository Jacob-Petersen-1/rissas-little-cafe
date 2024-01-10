import React from "react";
import { graphql } from "gatsby";
import { Navigation, PageLayout, SectionHeadline, Seo } from "../components";

const MenuPage = ({ data }) => {
  const { site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};

  return (
    <>
      <Seo
        title="Menu"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <Navigation>
        <PageLayout topMargin={100} maxWidth="xl">
          <SectionHeadline headline="Our Menu" />
        </PageLayout>
      </Navigation>
    </>
  );
};

export default MenuPage;

export const query = graphql`
  query MenuPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        image
      }
    }
  }
`;
