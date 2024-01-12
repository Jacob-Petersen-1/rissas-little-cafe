import styled from "@mui/material/styles/styled";
import { Box, Card, CardContent } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

const MenuItemCardContainer = styled(Card)(({ theme }) => ({}));

const MenuItemCardImage = styled(GatsbyImage)(({ theme }) => ({}));

const MenuItemCardContent = styled(CardContent)(({ theme }) => ({}));

const MenuItemCardTitle = styled(Box)(({ theme }) => ({}));

const MenuItemCardDescription = styled(Box)(({ theme }) => ({}));

const MenuItemCardPrice = styled(Box)(({ theme }) => ({}));

export {
  MenuItemCardContainer,
  MenuItemCardImage,
  MenuItemCardContent,
  MenuItemCardTitle,
  MenuItemCardDescription,
  MenuItemCardPrice,
};
