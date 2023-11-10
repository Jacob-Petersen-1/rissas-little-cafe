import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ContentContainer, StyledAppBar, StyledLink } from "./NavBar.styles";
import {
  useMediaQuery,
  useTheme,
  Hidden,
  Toolbar,
  Icon,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar position="static">
        <ContentContainer>
          {isMobile ? (
            <>
              <StaticImage
                src="../../../static/images/logo.svg"
                alt="logo"
                layout="fixed"
                width={110}
                height={100}
                quality={80}
              />
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon
                  aria-controls="mobile-menu"
                  aria-haspopup="true"
                  style={{
                    color: theme.palette.text.primary,
                    height: 30,
                    width: 30,
                  }}
                />
              </IconButton>
            </>
          ) : (
            <>
              <StyledLink to="/" label="home">
                Home
              </StyledLink>
              <StyledLink to="/about" label="home">
                About
              </StyledLink>
              <Link to="/" label="home">
                <Hidden smDown>
                  <StaticImage
                    src="../../../static/images/logo.svg"
                    alt="logo"
                    layout="fixed"
                    width={150}
                    height={150}
                    quality={80}
                  />
                </Hidden>
              </Link>
              <StyledLink to="/events" label="events">
                Events
              </StyledLink>
              <StyledLink to="/contact" label="contact">
                Services
              </StyledLink>
            </>
          )}
        </ContentContainer>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
