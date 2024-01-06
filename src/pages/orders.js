import React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import { ContactForm, MainLayout, PageLayout, Seo } from "../components";

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
      <MainLayout>
        <PageLayout maxWidth="lg" topMargin={150}>
          <ContactForm
            title="An integrated ordering sytem will be here soon! In The meantime, please contact us via this form."
            showImage
          />
        </PageLayout>
      </MainLayout>
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
