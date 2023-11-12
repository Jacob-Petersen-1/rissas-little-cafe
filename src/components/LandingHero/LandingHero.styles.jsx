import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const StyledLandingHero = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f2f2f2",
}));

const StyledLandingHeroContent = styled(Box)(() => ({
  maxWidth: 800,
}));

const StyledLandingHeroImageContainer = styled(Box)(({ theme }) => ({
  minHeight: 100,
  height: "100%",
  width: "100%",
  margin: theme.spacing(1),
}));

const StyledLandingHeroImage = styled(GatsbyImage)(({ theme }) => ({
  height: 300,
  width: "100%",
  objectFit: "contain",
}));

export {
  StyledLandingHero,
  StyledLandingHeroContent,
  StyledLandingHeroImageContainer,
  StyledLandingHeroImage,
};
