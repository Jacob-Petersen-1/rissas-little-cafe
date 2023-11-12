import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const StyledLandingHero = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f2f2f2",
}));

const StyledLandingHeroContent = styled(Box)(() => ({
  maxWidth: 900,
}));

const StyledLandingHeroImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  margin: theme.spacing(1),
}));

const StyledLandingHeroImage = styled(GatsbyImage)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: 500,
  objectFit: "cover",
  transition: "all 0.3s ease-in-out",
}));

const HeroBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2),
  },
}));

const HeroHeaderText = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  textTransform: "uppercase",
  textAlign: "center",
  fontWeight: theme.typography.h1.fontWeight,
  textDecoration: "underline",
  textDecorationColor: theme.palette.link.hover,
  margin: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 0,
  },
}));

const HeroBodyText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

export {
  StyledLandingHero,
  StyledLandingHeroContent,
  StyledLandingHeroImageContainer,
  StyledLandingHeroImage,
  HeroBlock,
  HeroHeaderText,
  HeroBodyText,
};
