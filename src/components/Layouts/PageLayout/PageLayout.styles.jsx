import styled from "@mui/material/styles/styled";
import { Container } from "@mui/material";

const PageContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "topMargin",
})(({ theme, topMargin }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginTop: topMargin ? topMargin : 0,
  // TODO: Add media query for topMargin
  [theme.breakpoints.down("md")]: {
    marginTop: topMargin ? topMargin / 2 : 0,
  },
}));

export { PageContainer };
