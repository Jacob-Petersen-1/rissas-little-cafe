import React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import { EventCalendar, SectionDivider, MainLayout, Seo } from "../components";

const EventPage = ({ data }) => {
  const { eventData, site } = data || {};
  const { siteMetadata } = site || {};
  const { description, siteUrl, image } = siteMetadata || {};
  const eventContent =
    eventData?.edges?.map((edge) => edge.node.frontmatter) || [];
  return (
    <>
      <Seo
        title="Events"
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <Container sx={{ paddingTop: 2 }} maxWidth="xl">
          <SectionDivider headline="UPCOMING EVENTS" />
          <EventCalendar events={eventContent} />
        </Container>
      </MainLayout>
    </>
  );
};

export default EventPage;

export const query = graphql`
  query EventPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        image
      }
    }
    eventData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/events/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            location
            start
            end
            description
            allDay
          }
        }
      }
    }
  }
`;
