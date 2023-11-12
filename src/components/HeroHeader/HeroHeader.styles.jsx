import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const HeroBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(5),
}));

const HeroHeaderText = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: theme.typography.h1.fontWeight,
  textDecoration: "underline",
  textDecorationColor: theme.palette.link.hover,
  textAlign: "center",
  margin: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

const HeroBodyText = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  alignSelf: "center",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

export { HeroBlock, HeroHeaderText, HeroBodyText };
