import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
  ServiceSectionContainer,
  ServiceSectionImage,
  ServiceImageWrapper,
  ServiceSectionDescription,
  ServiceTitle,
} from "./ServiceSection.styles";

const ServiceSection = ({ serviceTitle, serviceImage, serviceDescription }) => {
  return (
    <>
      <ServiceSectionContainer id={serviceTitle?.toLowerCase() || null}>
        <ServiceImageWrapper>
          <ServiceSectionImage
            image={getImage(serviceImage)}
            alt={serviceTitle}
          />
          <ServiceTitle>{serviceTitle}</ServiceTitle>
        </ServiceImageWrapper>
        <ServiceSectionDescription>
          <Markdown rehypePlugins={[rehypeRaw]}>{serviceDescription}</Markdown>
        </ServiceSectionDescription>
      </ServiceSectionContainer>
    </>
  );
};

ServiceSection.defaultProps = {
  serviceTitle: "",
  serviceImage: {},
  serviceDescription: "",
};

ServiceSection.propTypes = {
  serviceTitle: PropTypes.string,
  serviceImage: PropTypes.object,
  serviceDescription: PropTypes.string,
};

export default ServiceSection;
