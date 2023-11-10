import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ContentContainer, StyledAppBar, StyledLink } from "./NavBar.styles";
import {
  useMediaQuery,
  useTheme,
  Hidden,
  Menu,
  MenuItem,
  Toolbar,
  Icon,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ pageLinks }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = () => {
    setAnchorEl(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <StyledAppBar position="static">
        <ContentContainer>
          {isMobile ? (
            <>
              <Link to="/" label="home">
                <StaticImage
                  src="../../../static/images/logo.svg"
                  alt="logo"
                  layout="fixed"
                  loading="eager"
                  width={125}
                  height={110}
                  quality={80}
                />
              </Link>
              <IconButton onClick={handleMenuOpen}>
                <MenuIcon
                  aria-controls="mobile-menu-open"
                  aria-haspopup="true"
                  style={{
                    color: theme.palette.text.primary,
                    height: 30,
                    width: 30,
                    marginRight: 10,
                  }}
                />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={anchorEl}
                onClose={handleMenuClose}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginTop: 12, marginLeft: 1 }}
              >
                {pageLinks?.map((link) => (
                  <MenuItem
                    key={link.name}
                    onClick={handleMenuClose}
                    sx={{ color: theme.palette.text.primary }}
                  >
                    <StyledLink to={link.link}>{link.name}</StyledLink>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Hidden smDown>
                <StyledLink to="/" label="home">
                  Home
                </StyledLink>
                <StyledLink to="/about" label="home">
                  About
                </StyledLink>
                <Link to="/" label="home">
                  <StaticImage
                    src="../../../static/images/logo.svg"
                    alt="logo"
                    layout="fixed"
                    loading="eager"
                    width={150}
                    height={150}
                    quality={80}
                  />
                </Link>
                <StyledLink to="/events" label="events">
                  Events
                </StyledLink>
                <StyledLink to="/contact" label="contact">
                  Services
                </StyledLink>
              </Hidden>
            </>
          )}
        </ContentContainer>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
