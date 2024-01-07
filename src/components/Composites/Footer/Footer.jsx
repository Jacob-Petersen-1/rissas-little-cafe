import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  FooterContainer,
  LinksContainer,
  LinkWrapper,
  StyledLink,
} from "./Footer.styles";
import { StaticImage } from "gatsby-plugin-image";

const FooterLink = ({ link, label, title, logo, internal }) => {
  if (internal) {
    return (
      <LinkWrapper>
        <Link to={link} label={label}>
          {logo ? <span>{logo}</span> : null}
          {title ? title : label}
        </Link>
      </LinkWrapper>
    );
  }
  return (
    <LinkWrapper>
      <StyledLink
        href={link}
        label={label}
        target="_blank"
        rel="noopener noreferrer"
        styles={{ display: "flex", alignItems: "center" }}
      >
        {logo ? logo : null}
        {title ? title : label}
      </StyledLink>
    </LinkWrapper>
  );
};

const Footer = ({ footerLinks }) => {
  return (
    <>
      <FooterContainer>
        <StaticImage
          src="../../../../static/images/logowhite.svg"
          alt="logo"
          placeholder="blurred"
          layout="fixed"
          width={150}
          height={150}
        />
        <LinksContainer>
          {footerLinks?.map(({ to, label, title, internal, logo }) => (
            <FooterLink
              key={to}
              link={to}
              label={label}
              title={title}
              internal={internal}
              logo={logo}
            />
          ))}
        </LinksContainer>
      </FooterContainer>
    </>
  );
};

Footer.propTypes = {
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
      internal: PropTypes.bool,
      logo: PropTypes.node,
    }).isRequired
  ),
};

export default Footer;
