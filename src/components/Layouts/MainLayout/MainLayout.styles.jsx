import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(18),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(17),
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(13),
  },
}));

export { ContentContainer };
