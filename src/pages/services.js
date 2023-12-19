import React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import { ServicesSection, ContactForm, MainLayout, Seo } from "../components";

const ServicesPage = ({ data }) => {
  const { serviceData, site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};
  const servicesContent = serviceData?.edges?.map((edge) => edge.node) || [];

  return (
    <>
      <Seo
        title="Services"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <Container style={{ paddingTop: 20 }} maxWidth="lg">
          <ServicesSection services={servicesContent} />
          <ContactForm
            title="For more in depth information about services offered, please contact us via this form."
            showImage
          />
        </Container>
      </MainLayout>
    </>
  );
};

export default ServicesPage;

export const query = graphql`
  query ServicesPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        image
      }
    }
    serviceData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
                quality: 50
                placeholder: BLURRED
                aspectRatio: 1.5
              )
            }
          }
        }
      }
    }
  }
`;
