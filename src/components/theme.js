import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600, // Small devices (mobile)
      md: 980, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra-large devices (large desktops)
    },
  },
  palette: {
    primary: {
      main: "#000", // Black as the primary color
    },
    secondary: {
      main: "#fff", // White as the secondary color
    },
    text: {
      primary: "#333", // Black text
      secondary: "#fff", // White text
    },
    link: {
      hover: "#b6d4cf", // Light blue on hover
    },
    divider: {
      main: "#b6d4cf", // Light blue divider
    },
    gold: {
      main: "#f5d061", // Gold
    },
  },
  typography: {
    fontFamily: [
      "Playfair Display", // Default font for headings
      "Raleway", // Default font for body text
      "sans-serif",
      "Agbalumo",
    ].join(","),
    h1: {
      fontFamily: "Playfair Display",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Agbalumo",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Agbalumo",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Raleway",
      fontSize: ".889rem",
    },
    body2: {
      fontFamily: "Raleway",
      fontSize: "0.755rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
