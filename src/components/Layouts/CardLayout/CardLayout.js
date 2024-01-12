import React from "react";
import PropTypes from "prop-types";
import { CardLayoutContainer } from "./CardLayout.styles";

const CardLayout = ({ children }) => {
  return (
    <>
      <CardLayoutContainer container spacing={3}>
        {React.Children.map(children, (child) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            {child}
          </Grid>
        ))}
      </CardLayoutContainer>
    </>
  );
};

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLayout;
