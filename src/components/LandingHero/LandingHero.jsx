import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroHeader } from "../HeroHeader";
import {
  StyledLandingHero,
  StyledLandingHeroImageContainer,
  StyledLandingHeroContent,
  StyledLandingHeroImage,
} from "./LandingHero.styles";

const LandingHero = ({ image, label, heroHeadline, heroBodyText }) => {
  return (
    <StyledLandingHero>
      <StyledLandingHeroImageContainer>
        <StyledLandingHeroImage
          image={getImage(image)}
          alt={label}
          placeholder="blurred"
          layout="fullWidth"
          quality={80}
          objectFit="contain"
          formats={["auto", "webp", "avif"]}
        />
      </StyledLandingHeroImageContainer>
      <StyledLandingHeroContent>
        <HeroHeader heroHeadline={heroHeadline} heroBodyText={heroBodyText} />
      </StyledLandingHeroContent>
    </StyledLandingHero>
  );
};

export default LandingHero;
