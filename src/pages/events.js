import React from "react";
import { graphql } from "gatsby";
import {
  EventCalendar,
  SectionHeadline,
  Navigation,
  Seo,
  PageLayout,
} from "../components";

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
      <Navigation>
        <PageLayout topMargin={100} maxWidth="xl">
          <SectionHeadline headline="UPCOMING EVENTS" showLines={false} />
          <EventCalendar events={eventContent} />
        </PageLayout>
      </Navigation>
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
