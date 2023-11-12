import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Paper } from "@mui/material";

const HeroSlide = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 1000,
  [theme.breakpoints.down("md")]: {
    height: 500,
  },
  [theme.breakpoints.down("sm")]: {
    height: 400,
  },
}));

const StyledLandingHeroImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const StyledLandingHeroImage = styled(GatsbyImage)(({ theme }) => ({}));

const StyledLandingHeroContent = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  [theme.breakpoints.up("sm")]: {
    margin: " 0 auto",
    textAlign: "center",
    alignItems: "center",
  },
}));

const HeroBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(3, 0, 5, 0),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1, 1, 1, 0),
  },
}));

const HeroHeaderText = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  textTransform: "uppercase",
  fontWeight: theme.typography.h1.fontWeight,
  textDecoration: "underline",
  textDecorationColor: theme.palette.link.hover,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(1, 0, 0, 2),
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1, 0, 0, 2),
    fontSize: "1rem",
  },
}));

const HeroBodyText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(1, 0, 1, 2),
    fontSize: theme.typography.body2.fontSize,
  },
}));

export {
  HeroSlide,
  StyledLandingHeroContent,
  StyledLandingHeroImageContainer,
  StyledLandingHeroImage,
  HeroBlock,
  HeroHeaderText,
  HeroBodyText,
};
