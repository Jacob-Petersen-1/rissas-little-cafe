import React from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import {
  AboutSectionContainer,
  AboutSectionImage,
  AboutSectionText,
} from "./AboutSection.styles";

const AboutSection = ({ headline, aboutImage, aboutText }) => {
  return (
    <>
      <AboutSectionContainer>
        <AboutSectionImage src={aboutImage} alt={headline} />
        <AboutSectionText>
          <Markdown>{aboutText}</Markdown>
        </AboutSectionText>
      </AboutSectionContainer>
    </>
  );
};

AboutSection.propTypes = {
  aboutImage: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default AboutSection;
