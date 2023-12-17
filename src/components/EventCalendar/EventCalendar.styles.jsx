import styled from "@mui/material/styles/styled";
import { Box, Card } from "@mui/material";

const EventCalendarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  padding: theme.spacing(3, 0, 3, 0),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxHeight: "none",
  },
}));

const EventCalendarWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
  },
  ".fc": {
    flex: 1,
    maxHeight: 775,
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius,
    ".fc-header-toolbar": {
      fontSize: theme.typography.body1.fontSize,
      padding: theme.spacing(1, 1, 1, 1),
      fontFamily: theme.typography.h3.fontFamily,
      ".fc-toolbar-chunk": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1, 0, 1, 0),
        "& button": {
          backgroundColor: "transparent",
          border: "none",
          color: theme.palette.primary.main,
          fontSize: theme.typography.body1.fontSize,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
      },
    },
  },
}));

const EventListContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  padding: theme.spacing(3, 3, 0, 3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 0, 3, 0),
  },
}));

const EventCalendarList = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(1, 0, 1, 0),
  maxHeight: 600,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    overflowY: "visible",
    maxHeight: "none",
  },
  "&::-webkit-scrollbar": {
    width: 4,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#CCCCCC",
  },
}));

const EventListTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  textDecoration: "underline",
}));

// Card Styles

const EventCard = styled(Card)(({ theme }) => ({
  flex: 1,
  minHeight: 200,
  width: "100%",
  margin: theme.spacing(1, 0, 1, 0),
  boxShadow: `1px 2px 4px ${theme.palette.grey[500]}`,
  transition: "box-shadow 0.2s ease",
  "&:hover": {
    boxShadow: `0 4px 8px ${theme.palette.grey[600]}`,
  },
}));

const EventTitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  fontSize: "1rem",
  fontWeight: theme.typography.h3.fontWeight,
  textDecoration: "underline",
}));

const EventLabel = styled(Box)(() => ({
  fontWeight: "bold",
}));

const EventDescription = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  "& span": {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    "& svg": {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

export {
  EventCalendarContainer,
  EventCalendarWrapper,
  EventListContainer,
  EventCalendarList,
  EventListTitle,
  EventCard,
  EventTitle,
  EventLabel,
  EventDescription,
};
