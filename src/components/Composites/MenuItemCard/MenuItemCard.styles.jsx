import styled from "@mui/material/styles/styled";
import { Box, Card, Select } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

const MenuItemCardContainer = styled(Card)(() => ({
  maxWidth: 340,
  height: 500,
}));

const MenuItemCardImage = styled(GatsbyImage)(() => ({}));

const MenuItemCardHeadline = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: theme.spacing(1, 0, 2, 0),
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

const MenuItemCardText = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.h5.fontFamily,
  fontSize: theme.typography.h5.fontSize,
  color: theme.palette.primary.main,
}));

const MenuItemCardDescription = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const MenuItemCardSelect = styled(Select)(({ theme }) => ({
  height: 25,
  fontFamily: theme.typography.h5.fontFamily,
  fontSize: theme.typography.h5.fontSize,
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
}));

export {
  MenuItemCardContainer,
  MenuItemCardImage,
  MenuItemCardText,
  MenuItemCardDescription,
  MenuItemCardSelect,
  MenuItemCardHeadline,
};
