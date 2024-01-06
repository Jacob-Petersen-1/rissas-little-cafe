import styled from "@mui/material/styles/styled";
import { Container } from "@mui/material";

const PageContainer = styled(Container)(({ topMargin }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginTop: topMargin ? topMargin : 100,
}));

export { PageContainer };
