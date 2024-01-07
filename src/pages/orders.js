import React from "react";
import { graphql } from "gatsby";
import { ContactForm, Navigation, PageLayout, Seo } from "../components";

const OrdersPage = ({ data }) => {
  const { site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};

  return (
    <>
      <Seo
        title="Online Orders"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <Navigation>
        <PageLayout maxWidth="lg" topMargin={150}>
          <ContactForm
            title="An integrated ordering sytem will be here soon! In The meantime, please contact us via this form."
            showImage
          />
        </PageLayout>
      </Navigation>
    </>
  );
};

export default OrdersPage;

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
