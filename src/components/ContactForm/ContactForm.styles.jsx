import styled from "@mui/material/styles/styled";
import { Box, TextField, Radio } from "@mui/material";

const ContactFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: theme.spacing(0, 0, 5, 0),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ContactFormBody = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "100%",
  maxWidth: 600,
}));

const ContactFormHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  fontFamily: theme.typography.h2.fontFamily,
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
  width: "100%",
  color: theme.palette.text.primary,
  "& label": {
    color: theme.palette.text.primary,
  },
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&.Mui-checked": {
    color: theme.palette.divider.main,
  },
}));
const Link = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.link.main,
  textDecoration: "none",
  lineHeight: 1.5,
}));

const Handle = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.h3.fontFamily,
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.link.hover,
  },
}));

export {
  ContactFormContainer,
  ContactFormHeader,
  ContactFormBody,
  StyledInput,
  StyledRadio,
  Link,
  Handle,
};
