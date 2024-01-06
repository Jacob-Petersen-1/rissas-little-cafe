import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import theme from "../../theme";
import { NavBar } from "../../NavBar";
import { Footer } from "../../Footer";
import { Offset } from "./MainLayout.styles";

//TODO: Add pageLinks & footerLinks to CMS system/GraphQL
const pageLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/services", label: "services" },
  { to: "/", label: "logo", isImage: true },
  { to: "/orders", label: "orders" },
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

const MainLayout = ({ children }) => {
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

MainLayout.defaultProps = {
  children: null,
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
