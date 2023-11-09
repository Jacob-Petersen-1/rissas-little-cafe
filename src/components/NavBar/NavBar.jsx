import React from "react"
import { Link } from "gatsby"
import { StyledAppBar, StyledLink, StyledLogo } from "./NavBar.styles"
import { Toolbar, Box, Typography } from "@mui/material"
import logo from "../../../static/images/logo.jpg"

const NavBar = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <StyledLink to="/" aria-label="home">
              Home
            </StyledLink>
            <StyledLink to="/services" aria-label="services">
              Services
            </StyledLink>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <StyledLogo src={logo} alt="logo" />
            </Box>
            <StyledLink to="/events" aria-label="events">
              Upcoming Events
            </StyledLink>
            <StyledLink to="/contact" aria-label="contact">
              Contact
            </StyledLink>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default NavBar
