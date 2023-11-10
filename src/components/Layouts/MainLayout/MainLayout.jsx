import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import theme from "../../theme";
import { NavBar } from "../../NavBar";

//TODO: Add pageLinks to CMS system
const pageLinks = [
  { link: "/", name: "home" },
  { link: "/services", name: "services" },
  { link: "/events", name: "events" },
  { link: "/contact", name: "contact" },
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
