import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardContent, IconButton, Snackbar } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import {
  EventCard,
  EventTitle,
  EventDescription,
  EventLabel,
} from "./EventCalendar.styles";

const EventCalendarCard = ({
  title,
  start,
  end,
  description,
  location,
  allDay,
}) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const startDate = !allDay ? new Date(start).toLocaleString() : "All Day";
  const endDate = !allDay ? new Date(end).toLocaleString() : "All Day";
  const handleCopyLocation = () => {
    setOpenSnackBar(true);
    navigator.clipboard.writeText(location);
  };
  return (
    <>
      <EventCard>
        <CardContent>
          <EventTitle>{title}</EventTitle>
          <EventDescription>
            <EventLabel>Start:</EventLabel> {startDate}
          </EventDescription>
          <EventDescription>
            <EventLabel>End:</EventLabel> {endDate}
          </EventDescription>
          <EventDescription>
            <EventLabel>Location:</EventLabel> {location}
            <span>
              <IconButton onClick={handleCopyLocation}>
                <ContentCopy />
              </IconButton>
            </span>
          </EventDescription>
          <EventDescription>
            <EventLabel>Description:</EventLabel> {description}
          </EventDescription>
        </CardContent>
      </EventCard>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackBar(false)}
        message="Location Copied!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

EventCalendarCard.defaultProps = {
  title: "",
  start: "",
  end: "",
  location: "",
  description: "",
  allDay: false,
};

EventCalendarCard.propTypes = {
  title: PropTypes.string,
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  location: PropTypes.string,
  description: PropTypes.string,
  allDay: PropTypes.bool,
};
export default EventCalendarCard;
