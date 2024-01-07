import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: 150,
  backgroundColor: theme.palette.primary.main,
}));

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: 200,
  },
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontFamily: theme.typography.h5.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
  textTransform: "uppercase",
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
  "& a:hover": {
    color: theme.palette.link.hover,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const StyledLink = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.link.main,
  textDecoration: "none",
  lineHeight: 1.5,
}));

export { FooterContainer, LinksContainer, LinkWrapper, StyledLink };
