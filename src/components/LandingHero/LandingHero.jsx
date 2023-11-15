import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import Carousel from "react-material-ui-carousel";
import {
  StyledLandingHeroImageContainer,
  StyledLandingHeroContent,
  StyledLandingHeroImage,
  HeroBlock,
  HeroHeaderText,
  HeroBodyText,
  HeroSlide,
} from "./LandingHero.styles";

const LandingHero = ({ landingContent }) => {
  return (
    <Carousel
      animation="slide"
      interval={8000}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: 5,
          zIndex: 10,
        },
      }}
    >
      {landingContent?.reverse().map((content, index) => (
        <HeroSlide variant="outlined" key={content?.position || index}>
          <StyledLandingHeroImageContainer>
            <StyledLandingHeroImage
              image={getImage(content?.cloudinaryData?.gatsbyImageData)}
              alt={content?.title || "Landing Hero Image"}
              placeholder="blurred"
              quality={90}
              objectFit="cover"
              formats={["auto", "webp", "avif"]}
            />
          </StyledLandingHeroImageContainer>
          <StyledLandingHeroContent>
            <HeroBlock>
              {content?.headline ? (
                <HeroHeaderText>{content.headline}</HeroHeaderText>
              ) : null}
              {content.body ? (
                <HeroBodyText>{content.body}</HeroBodyText>
              ) : null}
            </HeroBlock>
          </StyledLandingHeroContent>
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
