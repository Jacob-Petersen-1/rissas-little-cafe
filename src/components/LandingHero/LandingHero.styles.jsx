import styled from "@mui/material/styles/styled";
import { Box, CardContent } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/material";

const danceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeroSlide = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    height: "50%",
  },
}));

const HeroImage = styled(GatsbyImage)(({ theme }) => ({
  height: 700,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.down("sm")]: {
    height: 300,
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
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body2.fontSize,
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
}));

const ExpandMore = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "5rem",
  position: "absolute",
  margin: "0 auto",
  animation: `${danceAnimation} 1.5s infinite`,
  bottom: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export {
  HeroSlide,
  HeroImage,
  HeroHeaderText,
  HeroBodyText,
  SlideContent,
  ExpandMore,
};
