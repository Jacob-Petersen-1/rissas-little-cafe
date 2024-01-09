import React from "react";
import { graphql } from "gatsby";
import {
  SectionHeadline,
  ContactForm,
  Navigation,
  Seo,
  PageLayout,
  ServiceSection,
} from "../components";

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
      <Navigation>
        <PageLayout maxWidth="lg" topMargin={100}>
          <SectionHeadline headline="SERVICES WE OFFER" showLines={false} />
          {servicesContent?.map((service, index) => (
            <ServiceSection
              key={service?.frontmatter?.title || index}
              serviceTitle={service?.frontmatter?.title}
              serviceImage={service?.image?.childImageSharp?.gatsbyImageData}
              serviceDescription={service?.frontmatter?.description}
            />
          ))}
          <SectionHeadline headline="CONTACT US" />
          <ContactForm
            title="For more in depth information about services offered, please contact us via this form."
            showImage
          />
        </PageLayout>
      </Navigation>
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
                aspectRatio: 2
              )
            }
          }
        }
      }
    }
  }
`;
