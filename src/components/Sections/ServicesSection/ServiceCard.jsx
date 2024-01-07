import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { CardActionArea } from "@mui/material";
import {
  ServiceCardContainer,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardWrapper,
} from "./ServicesSection.styles";

const ServiceCard = ({ image, title }) => {
  return (
    <>
      <ServiceCardContainer>
        <CardActionArea
          component={Link}
          to={`/services#${title?.toLowerCase()}`}
        >
          <ServiceCardWrapper>
            <ServiceCardImage image={getImage(image)} alt={title} />
            <ServiceCardTitle>{title}</ServiceCardTitle>
          </ServiceCardWrapper>
        </CardActionArea>
      </ServiceCardContainer>
    </>
  );
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
