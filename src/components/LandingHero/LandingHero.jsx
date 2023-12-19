import React from "react";
import { getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  HeroHeaderText,
  HeroBodyText,
  HeroSlide,
  SlideContent,
  HeroImage,
} from "./LandingHero.styles";

// TODO: Make Component More Reusable

const LandingHero = ({ landingContent }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Carousel
      animation="fade"
      interval={8000}
      navButtonsAlwaysVisible={true}
      NextIcon={<ArrowForwardIosIcon sx={{ fontSize: "1.5rem" }} />}
      PrevIcon={<ArrowBackIosIcon sx={{ fontSize: "1.5rem" }} />}
      navButtonsProps={{
        style: {
          color: "white",
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: -30,
          zIndex: 10,
          position: "absolute",
        },
      }}
    >
      {landingContent
        ?.reverse()
        .map(({ frontmatter, html, image: carouselImage }, index) => (
          <HeroSlide key={frontmatter?.position || index}>
            <HeroImage
              image={getImage(
                carouselImage?.childImageSharp[isMobile ? "mobile" : "desktop"]
              )}
              alt={frontmatter?.headline}
              loading="eager"
            />

            <SlideContent>
              {frontmatter?.headline && (
                <HeroHeaderText>{frontmatter.headline}</HeroHeaderText>
              )}
              {html && (
                <HeroBodyText dangerouslySetInnerHTML={{ __html: html }} />
              )}
            </SlideContent>
          </HeroSlide>
        ))}
    </Carousel>
  );
};

export default LandingHero;

LandingHero.defaultProps = {
  landingContent: [
    {
      headline: "Default Headline",
      body: "Default Body",
      position: 1,
      html: "<p>Default HTML</p>",
      image: {
        gatsbyImageData: {
          layout: "fullWidth",
          placeholder: "blurred",
          formats: ["auto", "webp", "avif"],
        },
      },
    },
  ],
};

LandingHero.propTypes = {
  landingContent: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      body: PropTypes.string,
      position: PropTypes.number,
      html: PropTypes.string,
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({
          layout: PropTypes.string,
          placeholder: PropTypes.string,
          formats: PropTypes.arrayOf(PropTypes.string),
        }),
      }),
    })
  ),
};
