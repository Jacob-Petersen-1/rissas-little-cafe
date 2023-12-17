import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";
import { ServicesSectionContainer } from "./ServicesSection.styles";

const ServicesSection = ({ services }) => {
  return (
    <>
      <ServicesSectionContainer>
        {/* Your component content goes here */}
      </ServicesSectionContainer>
    </>
  );
};

ServicesSection.propTypes = {
  services: PropTypes.array,
};

export default ServicesSection;
