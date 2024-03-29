import * as React from "react";
import { graphql } from "gatsby";
import Slide from "react-reveal/Slide";
import {
  AboutSection,
  ContactForm,
  EventCalendar,
  LandingHero,
  Navigation,
  PageLayout,
  SectionHeadline,
  ServicesCards,
  SocialMediaGrid,
  YouTubeVideo,
  Seo,
} from "../components";

// TODO: Get social headline and description from CMS

const HomePage = ({ data }) => {
  const {
    aboutData,
    carouselData,
    eventData,
    serviceData,
    socialMediaImages,
    site,
    videoData,
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
  const videoContent = videoData?.edges?.[0]?.node?.frontmatter || {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />
      <Navigation>
        <LandingHero landingContent={carouselContent} />
        <PageLayout maxWidth="xl" topMargin={0}>
          <SectionHeadline headline="SERVICES WE OFFER" />
          <ServicesCards services={serviceContent} />
          <Slide left>
            <SectionHeadline headline="UPCOMING EVENTS" />
            <EventCalendar events={eventContent} />
          </Slide>
          <Slide right>
            <SectionHeadline headline="ABOUT US" />
            <AboutSection
              headline={aboutTitle}
              aboutImage={aboutImage}
              aboutText={about}
            />
          </Slide>
          <Slide left>
            <SectionHeadline headline="FOLLOW US" />
          </Slide>
          <SocialMediaGrid
            images={socialMediaImagesContent}
            facebookLink={facebookLink}
            instagramLink={instagramLink}
            children={
              <YouTubeVideo
                videoUrl={videoContent?.src}
                title={videoContent?.title}
              />
            }
          />
          <SectionHeadline headline="CONTACT US" />
          <ContactForm
            instagramHandle={instagram}
            instagramLink={instagramLink}
            facebookHandle={facebook}
            facebookLink={facebookLink}
            title="Get in touch today!"
            showImage
          />
        </PageLayout>
      </Navigation>
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
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
                quality: 80
                placeholder: BLURRED
                aspectRatio: 1.33
              )
            }
          }
        }
      }
    }
    videoData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/video/" } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
            src
          }
        }
      }
    }
  }
`;
