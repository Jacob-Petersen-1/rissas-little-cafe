import React from "react";
import PropTypes from "prop-types";
import {
  MenuItemCardContainer,
  MenuItemCardImage,
  MenuItemCardContent,
  MenuItemCardTitle,
  MenuItemCardDescription,
  MenuItemCardPrice,
} from "./MenuItemCard.styles";

const MenuItemCard = ({ title, image, description, price }) => {
  return (
    <>
      <MenuItemCardContainer>
        <MenuItemCardImage image={image} alt={title} />
        <MenuItemCardContent>
          <MenuItemCardTitle>{title}</MenuItemCardTitle>
          <MenuItemCardDescription>{description}</MenuItemCardDescription>
          <MenuItemCardPrice>{price}</MenuItemCardPrice>
        </MenuItemCardContent>
      </MenuItemCardContainer>
    </>
  );
};

MenuItemCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MenuItemCard;
