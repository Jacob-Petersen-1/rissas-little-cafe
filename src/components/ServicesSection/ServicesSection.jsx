import React from "react";
import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";
import { ServicesSectionContainer } from "./ServicesSection.styles";

const ServicesSection = ({ services }) => {
  return (
    <>
      <ServicesSectionContainer>
        {services?.map((service) => {
          const {
            frontmatter: { title, description },
            image: { childImageSharp: gatsbyImageData },
          } = service || {};
          return (
            <ServiceCard
              key={title}
              image={gatsbyImageData}
              title={title}
              description={description}
            />
          );
        })}
      </ServicesSectionContainer>
    </>
  );
};

ServicesSection.propTypes = {
  services: PropTypes.array,
};

export default ServicesSection;
