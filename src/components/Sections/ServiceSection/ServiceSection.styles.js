import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const ServiceSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 0, 5, 0),
  },
}));

const ServiceSectionImage = styled(GatsbyImage)(({ theme }) => ({
  height: 500,
  width: "100%",
  borderRadius: theme.spacing(1),
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: 250,
  },

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

const ServiceImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const ServiceSectionDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "left",
  flexDirection: "column",
  maxWidth: "100%",
  "& p": {
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.body1.fontFamily,
    lineHeight: "1.5",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },

  "& img": {
    maxWidth: "100%",
    height: 500,
    width: 1280,
    border: `2px solid ${theme.palette.gold.main}`,
    objectFit: "cover",
  },
  [theme.breakpoints.down("md")]: {
    "& img": {
      height: 300,
      width: 400,
      marginLeft: 0,
      borderRadius: "50%",
    },
  },
  "& iframe": {
    maxWidth: "100%",
    margin: "auto",
  },
}));

const ServiceTitle = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 5,
  color: theme.palette.text.secondary,
  fontSize: "3rem",
  textAlign: "center",
  fontFamily: theme.typography.h2.fontFamily,
}));

export {
  ServiceSectionContainer,
  ServiceSectionImage,
  ServiceImageWrapper,
  ServiceSectionDescription,
  ServiceTitle,
};
