import styled from "@mui/material/styles/styled";
import { Box, CardContent } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroSlide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 800,
  [theme.breakpoints.down("md")]: {
    height: 500,
  },
  [theme.breakpoints.down("sm")]: {
    height: 300,
  },
}));

const HeroImage = styled(GatsbyImage)(({ theme }) => ({
  height: "100%",
  width: "100%",
  maxHeight: 800,

  [theme.breakpoints.down("md")]: {
    maxHeight: 500,
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: 300,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
}));

const HeroHeaderText = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "2.5rem",
  textAlign: "center",
  fontFamily: theme.typography.h3.fontFamily,
  textTransform: "uppercase",
  fontWeight: theme.typography.h1.fontWeight,
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
  color: theme.palette.text.secondary,
  display: "block",
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  [theme.breakpoints.down("sm")]: {
    maxHeight: 100,
    fontSize: theme.typography.body2.fontSize,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const SlideContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "absolute",
  overflow: "hidden",
  padding: theme.spacing(0, 10, 0, 10),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 5, 0, 5),
  },
}));

export { HeroSlide, HeroImage, HeroHeaderText, HeroBodyText, SlideContent };
