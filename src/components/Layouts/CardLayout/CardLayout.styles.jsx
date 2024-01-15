import styled from "@mui/material/styles/styled";
import { Grid } from "@mui/material";

const CardLayoutContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export { CardLayoutContainer };
