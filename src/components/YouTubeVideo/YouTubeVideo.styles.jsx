import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const YouTubeVideoContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1, 0, 3, 0),
  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(1),
  },
}));

export { YouTubeVideoContainer };
