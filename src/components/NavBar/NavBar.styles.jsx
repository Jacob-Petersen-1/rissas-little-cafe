import styled from "@mui/material/styles/styled";
import { Link } from "gatsby";
import { AppBar, Box } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  maxWidth: "100%",
  boxShadow: "none",
  marginBottom: theme.spacing(3),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily: theme.typography.h3.fontFamily,
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  color: theme.palette.text.primary,
  textDecoration: "none",
  paddingBottom: 5,
  alignSelf: "center",
  margin: theme.spacing(5),
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.link.hover}`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    margin: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    margin: theme.spacing(2),
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
}));

export { StyledAppBar, StyledLink, ContentContainer };
