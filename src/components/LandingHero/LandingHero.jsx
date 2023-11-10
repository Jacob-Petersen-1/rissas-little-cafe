import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  StyledLandingHero,
  StyledLandingHeroContent,
  StyledLandingHeroImageContainer,
} from "./LandingHero.styles";

const LandingHero = ({ image, label }) => {
  return (
    <StyledLandingHero>
      <StyledLandingHeroImageContainer>
        <GatsbyImage
          src={image}
          alt={label}
          placeholder="blurred"
          layout="fullWidth"
          quality={80}
          formats={["auto", "webp", "avif"]}
        />
      </StyledLandingHeroImageContainer>
      <StyledLandingHeroContent></StyledLandingHeroContent>
    </StyledLandingHero>
  );
};

export default LandingHero;
