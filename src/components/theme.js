import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600, // Small devices (mobile)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra large devices (large desktops)
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
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#000", // Black heading text
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#000", // Black heading text
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
      color: "#000", // Black heading text
    },
    body1: {
      fontSize: "1rem",
      color: "#000", // Black body text
    },
    body2: {
      fontSize: "0.9rem",
      color: "#000", // Black body text
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
