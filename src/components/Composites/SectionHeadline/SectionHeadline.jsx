import React from "react";
import PropTypes from "prop-types";
import {
  SectionDividerContainer,
  SectionHeadlineText,
  StyledDivider,
} from "./SectionHeadline.styles";

const SectionHeadline = ({ headline, showLines }) => {
  return (
    <>
      <SectionDividerContainer id={headline?.toLowerCase() || null}>
        {showLines ? <StyledDivider /> : null}
        <SectionHeadlineText>{headline}</SectionHeadlineText>
        {showLines ? <StyledDivider /> : null}
      </SectionDividerContainer>
    </>
  );
};

SectionHeadline.defaultProps = {
  showLines: true,
};

SectionHeadline.propTypes = {
  headline: PropTypes.string.isRequired,
  showLines: PropTypes.bool,
};

export default SectionHeadline;
