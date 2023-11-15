import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ContentContainer, StyledAppBar, StyledLink } from "./NavBar.styles";
import {
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ pageLinks }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleIconClick = (event) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <StyledAppBar position="fixed">
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
              <IconButton onClick={handleIconClick}>
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
                keepMounted
                open={open}
                anchorEl={anchorEl}
                onClose={handleIconClick}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {pageLinks?.map((link) =>
                  !link?.isImage ? (
                    <MenuItem
                      key={link?.label}
                      onClick={handleIconClick}
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      <StyledLink to={link?.to || "/"}>
                        {link?.label}
                      </StyledLink>
                    </MenuItem>
                  ) : null
                )}
              </Menu>
            </>
          ) : (
            <>
              <Hidden mdDown>
                {pageLinks?.map((link) =>
                  link?.isImage ? (
                    <Link
                      key={link?.label}
                      to={link?.to || "/"}
                      label={link?.label}
                    >
                      <StaticImage
                        src="../../../static/images/logo.svg"
                        alt="logo"
                        layout="fixed"
                        loading="eager"
                        width={175}
                        height={150}
                        quality={80}
                      />
                    </Link>
                  ) : (
                    <StyledLink
                      key={link?.label}
                      to={link?.to || "/"}
                      label={link?.label}
                    >
                      {link?.label}
                    </StyledLink>
                  )
                )}
              </Hidden>
            </>
          )}
        </ContentContainer>
      </StyledAppBar>
    </>
  );
};

NavBar.defaultProps = {
  pageLinks: [
    { to: "/", label: "home" },
    { to: "/about", label: "about" },
    { to: "/services", label: "services" },
    { to: "/", label: "logo", isImage: true },
    { to: "/orders", label: "orders" },
    { to: "/events", label: "events" },
    { t0: "/contact", label: "contact" },
  ],
};

NavBar.propTypes = {
  pageLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      isImage: PropTypes.bool,
    })
  ),
};

export default NavBar;
