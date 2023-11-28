import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { CardContent, Box } from "@mui/material";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { HeroHeaderText, HeroBodyText, HeroSlide } from "./LandingHero.styles";

const LandingHero = ({ landingContent }) => {
  console.log(landingContent);
  return (
    <Carousel
      animation="fade"
      interval={8000}
      indicators={false}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
          borderRadius: 0,
        },
      }}
    >
      {landingContent
        ?.reverse()
        .map(({ frontmatter, html, cloudinaryData }, index) => (
          <HeroSlide variant="outlined" key={frontmatter?.position || index}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box sx={{ maxHeight: "30%", position: "relative", flex: 1 }}>
                <GatsbyImage
                  image={getImage(cloudinaryData?.gatsbyImageData)}
                  alt="Landing Hero Image"
                  objectFit="contain"
                />
              </Box>
              <CardContent>
                {frontmatter?.headline && (
                  <HeroHeaderText>{frontmatter.headline}</HeroHeaderText>
                )}
                {html && (
                  <HeroBodyText dangerouslySetInnerHTML={{ __html: html }} />
                )}
              </CardContent>
            </Box>
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
      cloudinaryData: {
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
      cloudinaryData: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }),
    })
  ),
};
