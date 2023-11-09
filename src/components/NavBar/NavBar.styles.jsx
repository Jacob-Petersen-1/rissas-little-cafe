import styled from "@mui/material/styles/styled"
import { Link } from "gatsby"
import { AppBar } from "@mui/material"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}))

const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textDecoration: "none",
  marginRight: theme.spacing(2),
  "&:hover": {
    color: theme.palette.link.main,
  },
}))

const StyledLogo = styled("img")(() => ({
  height: 150,
  width: 150,
}))

export { StyledAppBar, StyledLink, StyledLogo }
