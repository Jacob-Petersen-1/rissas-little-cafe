import React, { useState } from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import EventCalendarCard from "./EventCalendarCard";
import { Dialog } from "@mui/material";
import { Clear } from "@mui/icons-material";
import {
  EventCalendarContainer,
  EventCalendarWrapper,
  EventCalendarList,
  EventListTitle,
  EventListContainer,
} from "./EventCalendar.styles";

const EventCalendar = ({ events }) => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const matchingMonthEvents = events
    ?.filter((event) => {
      const eventDate = new Date(event?.start);
      return (
        eventDate.toLocaleString("en-US", { month: "long" }) === currentMonth
      );
    })
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  const handleEventClick = (info) => {
    setOpen(true);
    setSelectedEvent({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      location: info.event.extendedProps.location,
      description: info.event.extendedProps.description,
    });
  };
  return (
    <>
      <EventCalendarContainer>
        <EventCalendarWrapper>
          <FullCalendar
            events={events}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventClick={handleEventClick}
          />
        </EventCalendarWrapper>
        <EventListContainer>
          <EventListTitle>Events in {currentMonth}</EventListTitle>
          <EventCalendarList>
            {matchingMonthEvents?.map((event) => (
              <EventCalendarCard key={event?.title} {...event} />
            ))}
          </EventCalendarList>
        </EventListContainer>
      </EventCalendarContainer>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="event-dialog"
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            overflow: "hidden",
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Clear
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 1,
            cursor: "pointer",
            zIndex: 1,
            color: "black",
          }}
        />
        <EventCalendarCard {...selectedEvent} />
      </Dialog>
    </>
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      start: PropTypes.string,
      end: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

EventCalendar.defaultProps = {
  events: [
    {
      title: "",
      start: "",
      end: "",
      location: "",
      description: "",
    },
  ],
};

export default EventCalendar;
