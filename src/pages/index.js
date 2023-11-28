import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import combineContent from "../../utils/combineContent";
import { MainLayout, LandingHero, SocialMediaSection } from "../components";

const HomePage = ({ data }) => {
  const { carouselData, carouselImages, socialMediaPhotos, site } = data || {};
  const { siteMetadata } = site || {};
  const { title, description, siteUrl, image } = siteMetadata || {};
  const carouselContent = carouselData?.edges?.map((edge) => edge.node) || [];
  const carouselImageContent =
    carouselImages?.edges?.map((edge) => edge.node) || [];
  const socialMedia = socialMediaPhotos?.edges?.map((edge) => edge.node) || [];
  const combinedCarouselContent = combineContent({
    content: carouselContent,
    media: carouselImageContent,
  });

  console.log("combinedCarouselContent", combinedCarouselContent);
  console.log("caroselContent", carouselContent);
  console.log("carouselImages", carouselImages);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description || "Rissa's Little Cafe"}
        />
        <meta name="keywords" content={description || "Rissa's Little Cafe"} />
        <meta property="og:title" content={title || "Rissa's Little Cafe"} />
        <meta
          property="og:description"
          content={description || "Rissa's Little Cafe"}
        />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || "Rissa's Little Cafe"} />
        <meta
          name="twitter:description"
          content={description || "Rissa's Little Cafe"}
        />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <MainLayout>
        <LandingHero landingContent={combinedCarouselContent} />
        <Container maxWidth="xl">
          <SocialMediaSection
            instagramHandle={"@rissaslittlecafe"}
            facebookHandle={"Risa's Little Cafe"}
            instagramLink={
              "https://instagram.com/rissaslittlecafe?igshid=MWx5bzd5NW1ndHJpZQ=="
            }
            facebookLink="https://www.facebook.com/rissaslittlecafe/photos"
            socialImages={socialMedia}
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
            image
          }
          html
        }
      }
    }
    carouselImages: allCloudinaryMedia(
      filter: { folder: { regex: "/cafe/carousel/" } }
    ) {
      edges {
        node {
          cloudinaryData {
            secure_url
          }
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            aspectRatio: 1.5
          )
        }
      }
    }
    socialMediaPhotos: allCloudinaryMedia(
      filter: { folder: { regex: "/cafe/instagram/" } }
    ) {
      edges {
        node {
          id
          gatsbyImageData(
            layout: FIXED
            aspectRatio: 1
            placeholder: BLURRED
            width: 150
            height: 150
          )
        }
      }
    }
  }
`;
