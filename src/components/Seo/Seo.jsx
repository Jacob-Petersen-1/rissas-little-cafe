import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image, siteUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description || "Rissa's Little Cafe"} />
    <meta name="keywords" content={description || "Rissa's Little Cafe"} />
    <meta property="og:title" content={title || "Rissa's Little Cafe"} />
    <meta
      property="og:description"
      content={description || "Rissa's Little Cafe"}
    />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || "Rissa's Little Cafe"} />
    <meta
      name="twitter:description"
      content={description || "Rissa's Little Cafe"}
    />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  siteUrl: PropTypes.string.isRequired,
};

export default Seo;
