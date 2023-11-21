import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const HeroSlide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 900,
  [theme.breakpoints.down("md")]: {
    height: 500,
  },
  [theme.breakpoints.down("sm")]: {
    height: 400,
  },
}));

const StyledLandingHeroImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxHeight: "60%",
}));

const HeroHeaderText = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  fontFamily: theme.typography.h3.fontFamily,
  textTransform: "uppercase",
  fontWeight: theme.typography.h1.fontWeight,
  textDecoration: "underline",
  textDecorationColor: theme.palette.link.hover,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
  },
}));

const HeroBodyText = styled(Box)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

export { HeroSlide, StyledLandingHeroImage, HeroHeaderText, HeroBodyText };
