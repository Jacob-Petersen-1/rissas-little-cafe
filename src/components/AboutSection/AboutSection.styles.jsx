import styled from "@mui/material/styles/styled";
import { Box, Typography } from "@mui/material";

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AboutSectionSocials = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AboutSectionImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: 400,
  width: 400,
  borderRadius: "50%",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    height: 300,
    width: "100%",
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
  marginLeft: theme.spacing(0.5),
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
