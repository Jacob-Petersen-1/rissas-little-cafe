import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Box } from "@mui/material";
import theme from "../../theme";
import { NavBar } from "../../NavBar";

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
        <NavBar pageLinks={pageLinks} />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
