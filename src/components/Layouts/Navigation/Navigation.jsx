import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import theme from "../../theme";
import { NavBar } from "../../Composites/NavBar";
import { Footer } from "../../Composites/Footer";
import { Offset } from "./Navigation.styles";

//TODO: Add pageLinks & footerLinks to CMS system/GraphQL
const pageLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/services", label: "services" },
  { to: "/", label: "logo", isImage: true },
  { to: "/menu", label: "menu" },
  { to: "/events", label: "events" },
  { to: "/contact", label: "contact" },
];

const footerLinks = [
  {
    to: "https://www.instagram.com/rissaslittlecafe/",
    label: "instagram",
    title: "@rissaslittlecafe",
    internal: false,
    logo: <InstagramIcon sx={{ color: "#FFFFF" }} />,
  },
  {
    to: "https://www.facebook.com/rissaslittlecafe/",
    label: "facebook",
    title: "@Rissa's Little Cafe",
    internal: false,
    logo: <FacebookIcon sx={{ color: "#FFFFF" }} />,
  },
  {
    to: "/contact",
    label: "contact",
    title: "Contact Us",
    internal: true,
    logo: null,
  },
];

const Navigation = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar pageLinks={pageLinks} />
        <Offset />
        {children}
        <Footer footerLinks={footerLinks} />
      </ThemeProvider>
    </>
  );
};

Navigation.defaultProps = {
  children: null,
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
