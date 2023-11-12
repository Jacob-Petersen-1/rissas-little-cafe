import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ContentContainer, StyledAppBar, StyledLink } from "./NavBar.styles";
import {
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ pageLinks }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleIconClick = () => {
    setAnchorEl(!anchorEl);
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
                open={anchorEl}
                onClose={handleIconClick}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginLeft: 1.5 }}
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
                      <StyledLink to={link?.to}>{link?.label}</StyledLink>
                    </MenuItem>
                  ) : null
                )}
              </Menu>
            </>
          ) : (
            <>
              {pageLinks?.map((link) =>
                link?.isImage ? (
                  <Link key={link?.label} to={link?.to} label={link?.label}>
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
                    to={link?.to}
                    label={link?.label}
                  >
                    {link?.label}
                  </StyledLink>
                )
              )}
            </>
          )}
        </ContentContainer>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
