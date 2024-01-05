import styled from "@mui/material/styles/styled";
import { Box, Divider } from "@mui/material";

const SectionDividerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(3, 0, 3, 0),
  width: "100%",
}));

const SectionHeadline = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(0, 3, 0, 3),
  fontSize: "2.5rem",
  transition: "all 0.2s ease-in-out",
  fontFamily: theme.typography.h3.fontFamily,
  textTransform: "uppercase",
  fontWeight: theme.typography.h1.fontWeight,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  flex: 1,
  width: "100%",
  height: 3,
  backgroundColor: theme.palette.divider.main,
  borderStyle: "none",
}));

export { SectionDividerContainer, SectionHeadline, StyledDivider };
