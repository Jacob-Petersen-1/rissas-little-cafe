import styled from "@mui/material/styles/styled";
import { Grid } from "@mui/material";

const CardLayoutContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
}));

export { CardLayoutContainer };
