import React, { useState } from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import ReactCardFlip from "react-card-flip";
import { CardActionArea } from "@mui/material";
import {
  ServiceCardContainer,
  ServiceCardImage,
  ServiceContentTitle,
  ServiceContent,
  ServiceCardTitle,
  ServiceCardFront,
  ServiceCardBack,
} from "./ServicesSection.styles";

const ServiceCard = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <ServiceCardContainer>
        <CardActionArea onClick={handleClick}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <ServiceCardFront>
              <ServiceCardImage image={getImage(image)} alt={title} />
              <ServiceCardTitle>{title}</ServiceCardTitle>
            </ServiceCardFront>
            <ServiceCardBack>
              <ServiceContentTitle>{title}</ServiceContentTitle>
              <ServiceContent>{description}</ServiceContent>
            </ServiceCardBack>
          </ReactCardFlip>
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
