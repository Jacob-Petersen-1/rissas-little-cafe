import styled from "@mui/material/styles/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

const SocialMediaGridContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridGap: "1rem",
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  },
}));

const SocialText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  fontFamily: theme.typography.h4.fontFamily,
}));

const Image = styled(GatsbyImage)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export { SocialMediaGridContainer, Image, SocialText };
