import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

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

const ServiceCardWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const ServiceCardTitle = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 5,
  color: theme.palette.text.secondary,
  fontSize: "2.3rem",
  textAlign: "center",
  fontFamily: theme.typography.h3.fontFamily,
}));

export {
  ServicesSectionContainer,
  ServiceCardContainer,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardWrapper,
};
