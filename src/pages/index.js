import * as React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import {
  AboutSection,
  ContactForm,
  EventCalendar,
  LandingHero,
  MainLayout,
  SectionDivider,
  ServicesSection,
  SocialMediaGrid,
  Seo,
} from "../components";

const HomePage = ({ data }) => {
  const {
    aboutData,
    carouselData,
    eventData,
    serviceData,
    socialMediaImages,
    site,
  } = data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const serviceContent = serviceData?.edges?.map((edge) => edge.node) || [];
  const eventContent =
    eventData?.edges?.map((edge) => edge.node.frontmatter) || [];
  const socialMediaImagesContent =
    socialMediaImages?.edges?.map((edge) => edge.node) || [];
  const aboutContent = aboutData?.edges?.[0]?.node || {};
  const { frontmatter: aboutFrontmatter, image: aboutImage } =
    aboutContent || {};
  const {
    title: aboutTitle,
    instagram,
    instagramLink,
    facebook,
    facebookLink,
    about,
  } = aboutFrontmatter || {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <MainLayout>
        <LandingHero landingContent={carouselContent} />
        <Container maxWidth="xl">
          <SectionDivider headline="SERVICES WE OFFER" />
          <ServicesSection services={serviceContent} />
          <SectionDivider headline="UPCOMING EVENTS" />
          <EventCalendar events={eventContent} />
          <SectionDivider headline="ABOUT US" />
          <AboutSection
            headline={aboutTitle}
            aboutImage={aboutImage}
            aboutText={about}
          />
          <SectionDivider headline="FOLLOW US" />
          {
            // TODO: Get social headline and description from CMS
          }
          <SocialMediaGrid
            images={socialMediaImagesContent}
            socialHeadline="Stay up to date with the latest from Rissa's Little Cafe!"
            socialDescription="We share daily updates on our social media accounts. Whether you're interested in discovering a new menu item or simply want to stay informed about what we're up to, we invite you to follow us on social media for the latest updates and insights!"
            facebookLink={facebookLink}
            instagramLink={instagramLink}
          />
          <SectionDivider headline="CONTACT US" />
          <ContactForm
            instagramHandle={instagram}
            instagramLink={instagramLink}
            facebookHandle={facebook}
            facebookLink={facebookLink}
            title="Get in touch today!"
            showImage
          />
        </Container>
      </MainLayout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
    carouselData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/carousel/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            headline
            position
          }
          image {
            childImageSharp {
              mobile: gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 80
                formats: [AUTO, WEBP]
                aspectRatio: 2
                height: 300
              )
              tablet: gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 80
                aspectRatio: 1.75
                formats: [AUTO, WEBP]
                height: 500
              )
              desktop: gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 80
                aspectRatio: 2
                formats: [AUTO, WEBP]
                height: 700
              )
            }
          }
          html
        }
      }
    }
    aboutData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
            facebook
            facebookLink
            instagram
            instagramLink
            about
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 80
                formats: [AUTO, WEBP]
              )
            }
          }
        }
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
    serviceData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
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
    socialMediaImages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/media/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                formats: [AUTO, WEBP]
                quality: 80
                placeholder: BLURRED
                width: 250
                height: 250
              )
            }
          }
        }
      }
    }
  }
`;
