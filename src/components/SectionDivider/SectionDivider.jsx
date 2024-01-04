import React from "react";
import PropTypes from "prop-types";
import {
  SectionDividerContainer,
  SectionHeadline,
  StyledDivider,
} from "./SectionDivider.styles";

const SectionDivider = ({ headline }) => {
  return (
    <>
      <SectionDividerContainer id={headline?.toLowerCase() || null}>
        <StyledDivider />
        <SectionHeadline>{headline}</SectionHeadline>
        <StyledDivider />
      </SectionDividerContainer>
    </>
  );
};

SectionDivider.propTypes = {
  headline: PropTypes.string,
};

export default SectionDivider;
