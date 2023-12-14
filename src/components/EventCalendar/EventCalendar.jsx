import React from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  EventCalendarContainer,
  EventCalendarWrapper,
} from "./EventCalendar.styles";

const EventCalendar = ({ events }) => {
  return (
    <>
      <EventCalendarContainer>
        <EventCalendarWrapper>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </EventCalendarWrapper>
      </EventCalendarContainer>
    </>
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

EventCalendar.defaultProps = {
  events: [
    {
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    },
  ],
};

export default EventCalendar;
