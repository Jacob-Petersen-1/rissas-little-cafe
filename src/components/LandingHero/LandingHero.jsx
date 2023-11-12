import React from "react";
import { getImage } from "gatsby-plugin-image";
import Carousel from "react-material-ui-carousel";
import {
  StyledLandingHero,
  StyledLandingHeroImageContainer,
  StyledLandingHeroContent,
  StyledLandingHeroImage,
  HeroBlock,
  HeroHeaderText,
  HeroBodyText,
} from "./LandingHero.styles";

const LandingHero = ({ landingContent }) => {
  return (
    <Carousel>
      {landingContent.map((content, index) => (
        <StyledLandingHero key={index}>
          <StyledLandingHeroImageContainer>
            <StyledLandingHeroImage
              image={getImage(content?.cloudinaryData?.gatsbyImageData)}
              alt={content.label}
              placeholder="blurred"
              quality={80}
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
        </StyledLandingHero>
      ))}
    </Carousel>
  );
};

export default LandingHero;
