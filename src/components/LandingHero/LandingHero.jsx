import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  HeroHeaderText,
  HeroBodyText,
  HeroSlide,
  SlideContent,
  ExpandMore,
  HeroImage,
} from "./LandingHero.styles";

// TODO: Make Component More Reusable

const LandingHero = ({ landingContent }) => {
  return (
    <Carousel animation="fade" interval={8000} indicators={false}>
      {landingContent?.reverse().map(({ frontmatter, html, image }, index) => (
        <HeroSlide variant="outlined" key={frontmatter?.position || index}>
          <HeroImage
            image={getImage(image?.childImageSharp?.gatsbyImageData)}
            alt="Landing Hero Image"
          />

          <SlideContent>
            {frontmatter?.headline && (
              <HeroHeaderText>{frontmatter.headline}</HeroHeaderText>
            )}
            {html && (
              <HeroBodyText dangerouslySetInnerHTML={{ __html: html }} />
            )}
            <ExpandMore />
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
      image: {
        gatsbyImageData: {
          layout: "fullWidth",
          placeholder: "blurred",
          formats: ["auto", "webp", "avif"],
        },
      },
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
      cloudinaryData: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }),
    })
  ),
};
