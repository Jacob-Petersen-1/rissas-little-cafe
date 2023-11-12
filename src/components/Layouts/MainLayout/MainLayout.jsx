import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "../../theme";
import { NavBar } from "../../NavBar";
import { ContentContainer } from "./MainLayout.styles";

//TODO: Add pageLinks to CMS system
const pageLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/services", label: "services" },
  { to: "/", label: "logo", isImage: true },
  { to: "/orders", label: "orders" },
  { to: "/events", label: "events" },
  { t0: "/contact", label: "contact" },
];

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <NavBar pageLinks={pageLinks} />
          <ContentContainer>{children}</ContentContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
