import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent } from "@mui/material";
import {
  StyledLandingHeroImage,
  HeroHeaderText,
  HeroBodyText,
  HeroSlide,
} from "./LandingHero.styles";

const LandingHero = ({ landingContent }) => {
  return (
    <Carousel animation="fade" interval={8000}>
      {landingContent?.reverse().map(({ frontmatter, html }, index) => (
        <HeroSlide variant="outlined" key={frontmatter?.position || index}>
          <StyledLandingHeroImage
            src={frontmatter?.image}
            alt={frontmatter?.headline}
          />
          <CardContent>
            {frontmatter?.headline && (
              <HeroHeaderText>{frontmatter.headline}</HeroHeaderText>
            )}
            {html && (
              <HeroBodyText dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </CardContent>
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
