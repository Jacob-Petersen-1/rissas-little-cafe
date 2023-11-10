import styled from "@mui/material/styles/styled";
import { Link } from "gatsby";
import { AppBar, Box } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  maxWidth: "100%",
  boxShadow: "none",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "1.3rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
  paddingBottom: 5,
  alignSelf: "center",
  margin: theme.spacing(3),
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.link.hover}`,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
  },
}));

export { StyledAppBar, StyledLink, ContentContainer };
