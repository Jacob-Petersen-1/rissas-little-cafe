import React from "react";
import { graphql } from "gatsby";
import {
  Navigation,
  PageLayout,
  SectionHeadline,
  Seo,
  CardLayout,
  MenuItemCard,
} from "../components";

const MenuPage = ({ data }) => {
  const { site, menuData } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};
  const menu = menuData.edges.map((item) => item.node) || [];

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
          <CardLayout>
            {menu?.map((item, index) => (
              <MenuItemCard
                key={`${item?.category}-${index}`}
                title={item?.frontmatter?.title}
                category={item?.frontmatter?.category}
                description={item?.frontmatter?.description}
                image={item?.image?.childImageSharp?.gatsbyImageData}
                prices={item?.frontmatter?.prices}
              />
            ))}
          </CardLayout>
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
    menuData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/menu/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            category
            prices {
              size
              price
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                formats: [AUTO, WEBP]
                quality: 80
                placeholder: BLURRED
                aspectRatio: 1
                width: 340
                height: 350
              )
            }
          }
        }
      }
    }
  }
`;
