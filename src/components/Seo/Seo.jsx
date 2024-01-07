import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image, siteUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={withPrefix(image)} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={withPrefix(image)} />
    <meta name="twitter:site" content="@JacobPetersen" />
    <meta name="twitter:creator" content="@JacobPetersen" />
    <link rel="canonical" href={siteUrl} />
  </Helmet>
);

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
};

Seo.defaultProps = {
  description: "Rissa's Little Cafe",
};

export default Seo;
