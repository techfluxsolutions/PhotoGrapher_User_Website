import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BookingTabs.css'
import UpcomingBookings from "./UpcomingBookings/UpcomingBookings";
import PreviousBookings from "./PreviousBookings/PreviousBookings";

const BookingTabs = () => {
  return (
    <div className="container nav-container">
      <Tabs
        defaultActiveKey="upcoming"
        transition={false}
        id="custom-tabs"
        className="custom-tabs"
      >
        <Tab eventKey="upcoming" title="Upcoming Bookings">
          <UpcomingBookings/>
        </Tab>
        <Tab eventKey="previous" title="Previous Bookings">
          <PreviousBookings/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BookingTabs;
