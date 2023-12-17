import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ image, title, description }) => {
  return <></>;
};

ServiceCard.defaultProps = {
  image: {},
  title: "",
  description: "",
};

ServiceCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
