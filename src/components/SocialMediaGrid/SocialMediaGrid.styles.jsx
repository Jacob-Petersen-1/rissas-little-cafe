import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Grid } from "@mui/material";

const SocialMediaGridContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0),
  },
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: 750,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ImageItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

const Image = styled(GatsbyImage)(() => ({
  width: "100%",
  height: "100%",
  "&:hover": {
    border: "1px solid #000",
  },
}));

const SocialContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: 600,
  textAlign: "center",
}));

const SocialText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  fontFamily: theme.typography.h3.fontFamily,
  marginBottom: theme.spacing(2),
}));

const SocialDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  fontFamily: theme.typography.body1.fontFamily,
  marginBottom: theme.spacing(4),
}));

export {
  SocialMediaGridContainer,
  Image,
  ImageGrid,
  ImageItem,
  SocialText,
  SocialDescription,
  SocialContainer,
};
