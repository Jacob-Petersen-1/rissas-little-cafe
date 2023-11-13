import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const SocialMediaSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(5, 0, 5, 0),
}));

const SocialMediaSectionContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(5, 0, 5, 0),
}));

const SocialMediaSectionText = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  fontFamily: theme.typography.h3.fontFamily,
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

const SocialMediaThumnail = styled(GatsbyImage)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));

export {
  SocialMediaSectionContainer,
  SocialMediaSectionContent,
  SocialMediaSectionText,
  SocialMediaThumnail,
};
