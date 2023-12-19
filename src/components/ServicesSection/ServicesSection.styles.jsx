import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, CardContent } from "@mui/material";

const ServicesSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

// Card Styles
const ServiceCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  margin: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

const ServiceCardImage = styled(GatsbyImage)(() => ({
  height: "100%",
  width: "100%",
  maxHeight: 400,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
  },
}));

const ServiceCardFront = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const ServiceCardBack = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(128, 128, 128, 0.05)",
}));

const ServiceCardTitle = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 5,
  color: theme.palette.text.secondary,
  fontSize: "2.3rem",
  textAlign: "center",
  fontFamily: theme.typography.h3.fontFamily,
}));

const ServiceContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  width: "100%",
  fontSize: theme.typography.body1.fontSize,
  textAlign: "center",
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
}));

const ServiceContentTitle = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  textAlign: "center",
  textDecoration: "underline",
  fontFamily: theme.typography.h3.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    fontSize: "1.5rem",
  },
}));

export {
  ServicesSectionContainer,
  ServiceCardContainer,
  ServiceCardImage,
  ServiceCardFront,
  ServiceCardBack,
  ServiceCardTitle,
  ServiceContentTitle,
  ServiceContent,
};
