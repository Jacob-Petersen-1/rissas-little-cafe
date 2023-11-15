import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
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
        <NavBar pageLinks={pageLinks} />
        <ContentContainer>{children}</ContentContainer>
      </ThemeProvider>
    </>
  );
};

MainLayout.defaultProps = {
  children: null,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
