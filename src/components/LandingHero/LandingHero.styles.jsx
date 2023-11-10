import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";
import BackgroundImage from "gatsby-background-image";

const StyledLandingHero = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem",
}));

const StyledLandingHeroContent = styled(Box)(() => ({
  maxWidth: 800,
  margin: "0 auto",
  textAlign: "center",
}));

const StyledLandingHeroImageContainer = styled(Box)(() => ({
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
}));

const HeroText = styled(Box)(() => ({
  color: "#fff",
  zIndex: 1,
}));

const StyledBackgroundImage = styled(BackgroundImage)(({ theme }) => ({
  width: "100%",
  height: "100%",
  opacity: "1 !important",
  backgroundSize: "cover",
  background: `linear-gradient(
    90.26deg,
    rgba(3, 113, 227, 0.9) 17.75%,
    rgba(238, 169, 64, 0.61) 99.89%
  )`,
}));

export {
  StyledLandingHero,
  StyledLandingHeroContent,
  StyledLandingHeroImageContainer,
  HeroText,
  StyledBackgroundImage,
};
