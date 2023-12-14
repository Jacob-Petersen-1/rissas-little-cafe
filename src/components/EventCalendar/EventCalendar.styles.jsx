import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";

const EventCalendarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(3, 0, 3, 0),
}));

const EventCalendarWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  ".fc": {
    width: "100%",
    maxWidth: 500,
    maxHeight: 500,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    ".fc-header-toolbar": {},
    ".fc-day": {
      borderColor: theme.palette.divider,
    },
    ".fc-event": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}));

export { EventCalendarContainer, EventCalendarWrapper };
