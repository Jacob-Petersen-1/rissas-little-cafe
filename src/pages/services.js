import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";
import { Container, Box, Typography } from "@mui/material";
import { SectionDivider, ContactForm, MainLayout, Seo } from "../components";

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
        <Container style={{ marginTop: 100 }} maxWidth="lg">
          {servicesContent?.map((service) => (
            <Box>
              <SectionDivider
                key={service?.frontmatter?.title}
                headline={service?.frontmatter?.title}
              />
              <GatsbyImage
                image={getImage(service?.image)}
                alt={service?.frontmatter?.title}
              />
              <Typography
                variant="body1"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <Markdown>{service?.frontmatter?.description}</Markdown>
              </Typography>
            </Box>
          ))}
          <SectionDivider headline="CONTACT US" />
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
