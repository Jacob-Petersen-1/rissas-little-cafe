import React from "react";
import { getImage } from "gatsby-plugin-image";
import {
  StyledLandingHero,
  StyledLandingHeroImageContainer,
  StyledLandingHeroContent,
  StyledLandingHeroImage,
  HeroBlock,
  HeroHeaderText,
  HeroBodyText,
} from "./LandingHero.styles";

const LandingHero = ({ image, label, heroHeadline, heroBodyText }) => {
  return (
    <StyledLandingHero>
      <StyledLandingHeroImageContainer>
        <StyledLandingHeroImage
          image={getImage(image)}
          alt={label}
          placeholder="blurred"
          quality={80}
          objectFit="cover"
          formats={["auto", "webp", "avif"]}
        />
      </StyledLandingHeroImageContainer>
      <StyledLandingHeroContent>
        <HeroBlock>
          {heroHeadline ? (
            <HeroHeaderText>{heroHeadline}</HeroHeaderText>
          ) : null}
          {heroBodyText ? <HeroBodyText>{heroBodyText}</HeroBodyText> : null}
        </HeroBlock>
      </StyledLandingHeroContent>
    </StyledLandingHero>
  );
};

export default LandingHero;
