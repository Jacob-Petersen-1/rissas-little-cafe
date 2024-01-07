import React from "react";
import { graphql } from "gatsby";
import { ContactForm, Navigation, PageLayout, Seo } from "../components";

const ContactPage = ({ data }) => {
  const { site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};

  return (
    <>
      <Seo
        title="Contact Us"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <Navigation>
        <PageLayout maxWidth="lg" topMargin={150}>
          <ContactForm
            title="We will message you within 2 to 5 business days!"
            showImage
          />
        </PageLayout>
      </Navigation>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        image
      }
    }
  }
`;
