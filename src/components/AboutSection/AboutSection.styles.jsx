import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const AboutSectionSocials = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
  },
}));

const AboutSectionImage = styled(GatsbyImage)(({ theme }) => ({
  borderRadius: "50%",
  marginRight: theme.spacing(2),
  height: 500,
  width: 500,
  [theme.breakpoints.down("sm")]: {
    height: 300,
    width: 300,
    marginRight: 0,
  },
}));

const AboutSectionText = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  alignSelf: "flex-start",
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body1.fontSize,
  },
  "& a": {
    fontWeight: "bold",
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.link.hover,
    },
  },
}));

const Link = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.link.main,
  textDecoration: "none",
}));

const Handle = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.h3.fontFamily,
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.link.hover,
  },
}));

export {
  AboutSectionContainer,
  AboutSectionImage,
  AboutSectionSocials,
  AboutSectionText,
  Link,
  Handle,
};
