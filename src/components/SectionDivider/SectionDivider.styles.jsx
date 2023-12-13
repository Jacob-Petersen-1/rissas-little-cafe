import styled from "@mui/material/styles/styled";
import { Box, Divider } from "@mui/material";

const SectionDividerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(3, 0, 3, 0),
}));

const SectionHeadline = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  textAlign: "center",
  transition: "all 0.2s ease-in-out",
  fontFamily: theme.typography.h3.fontFamily,
  textTransform: "uppercase",
  fontWeight: theme.typography.h1.fontWeight,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  height: 3,
  backgroundColor: theme.palette.link.hover,
}));

export { SectionDividerContainer, SectionHeadline, StyledDivider };
