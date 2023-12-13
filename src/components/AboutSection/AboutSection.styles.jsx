import styled from "@mui/material/styles/styled";
import { Box, Typography } from "@mui/material";

const AboutSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AboutSectionImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: 500,
  width: 500,
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    height: 300,
    width: "100%",
    marginRight: 0,
  },
}));

const AboutSectionText = styled(Box)(({ theme }) => ({
  flexGrow: 1,
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

export { AboutSectionContainer, AboutSectionImage, AboutSectionText };
