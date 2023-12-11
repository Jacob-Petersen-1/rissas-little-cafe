import React from "react";
import PropTypes from "prop-types";
import { AboutSectionContainer } from "./AboutSection.styles";

const AboutSection = ({ headline, aboutImage, aboutText }) => {
  return (
    <>
      <AboutSectionContainer>
        {/* Your component content goes here */}
      </AboutSectionContainer>
    </>
  );
};

AboutSection.propTypes = {
  headline: PropTypes.string,
  aboutImage: PropTypes.object,
  aboutText: PropTypes.string,
};

export default AboutSection;
