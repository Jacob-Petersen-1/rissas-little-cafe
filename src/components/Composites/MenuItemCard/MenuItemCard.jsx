import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Box } from "@mui/material";
import {
  MenuItemCardContainer,
  MenuItemCardImage,
  MenuItemCardContent,
  MenuItemCardText,
  MenuItemCardDescription,
  MenuItemCardSelect,
  MenuItemCardHeadline,
} from "./MenuItemCard.styles";

const MenuItemCard = ({ title, image, description, category, prices }) => {
  const [selectedPrice, setSelectedPrice] = useState(
    prices[0]?.price || "Contact Us"
  );
  const [selectedSize, setSelectedSize] = useState(prices[0]?.size || "");

  const handleSelectChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);

    const newSelectedPrice = prices.find((price) => price.size === newSize);
    setSelectedPrice(newSelectedPrice?.price || "Contact Us");
  };

  return (
    <>
      <MenuItemCardContainer>
        <MenuItemCardImage image={image} alt={title} />
        <MenuItemCardContent>
          <MenuItemCardHeadline>
            <MenuItemCardText>{title}</MenuItemCardText>
            {prices?.length > 1 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <MenuItemCardSelect
                  onChange={handleSelectChange}
                  value={selectedSize}
                >
                  {prices?.map((item, index) => (
                    <MenuItem key={index} value={item.size}>
                      {item?.size}
                    </MenuItem>
                  ))}
                </MenuItemCardSelect>
                <MenuItemCardText>${selectedPrice}</MenuItemCardText>
              </Box>
            ) : (
              <>
                <MenuItemCardText>${prices[0]?.price}</MenuItemCardText>
              </>
            )}
          </MenuItemCardHeadline>
          <MenuItemCardDescription>{description}</MenuItemCardDescription>
        </MenuItemCardContent>
      </MenuItemCardContainer>
    </>
  );
};

MenuItemCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  category: PropTypes.string,
  prices: PropTypes.array,
};

export default MenuItemCard;
