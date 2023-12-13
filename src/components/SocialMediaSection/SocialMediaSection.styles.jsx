import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const SocialMediaSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SocialMediaSectionContent = styled(Box)(({ theme }) => ({
  margin: "0 auto",
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
    fontSize: "1.5rem",
  },
}));

const SocialMediaThumnail = styled(GatsbyImage)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  height: "100%",
}));

const SocialMediaWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const Link = styled("a")(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, 4),
  display: "flex",
  alignItems: "center",
  color: theme.palette.link.main,
  textDecoration: "none",
}));

const ImageLink = styled("a")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",

  "& img": {
    transition: "transform 2s ease-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const Handle = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  color: theme.palette.primary.main,
  fontSize: theme.typography.h3.fontSize,
  fontFamily: theme.typography.h3.fontFamily,
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.link.hover,
  },
}));

export {
  SocialMediaSectionContainer,
  SocialMediaSectionContent,
  SocialMediaSectionText,
  SocialMediaThumnail,
  SocialMediaWrapper,
  Link,
  ImageLink,
  Handle,
};
