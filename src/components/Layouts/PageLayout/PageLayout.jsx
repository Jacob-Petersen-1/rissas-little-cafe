import React from "react";
import PropTypes from "prop-types";
import { PageContainer } from "./PageLayout.styles";

const PageLayout = ({ children, maxWidth, topMargin, ...props }) => {
  return (
    <>
      <PageContainer maxWidth={maxWidth} topMargin={topMargin} {...props}>
        {children}
      </PageContainer>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  topMargin: PropTypes.number,
};

export default PageLayout;
