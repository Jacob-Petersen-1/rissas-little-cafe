import styled from "@mui/material/styles/styled";
import { Box, CardContent } from "@mui/material";

const HeroSlide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    height: "50%",
  },
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

const SlideContent = styled(CardContent)(({ theme }) => ({
  height: 400,
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    height: 300,
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}));

export { HeroSlide, HeroHeaderText, HeroBodyText, SlideContent };
