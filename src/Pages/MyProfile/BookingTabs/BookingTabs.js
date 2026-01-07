import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./BookingTabs.css";
import UpcomingBookings from "./UpcomingBookings/UpcomingBookings";
import PreviousBookings from "./PreviousBookings/PreviousBookings";

const BookingTabs = () => {
  return (
    <div className="container booking-wrapper mb-5">
      <h2 className="booking-title">Your Orders</h2>

      <Tabs
        defaultActiveKey="upcoming"
        transition={false}
        id="booking-tabs"
        className="custom-tabs"
      >
        <Tab eventKey="upcoming" title="Upcoming Bookings">
          <UpcomingBookings />
        </Tab>
        <Tab eventKey="previous" title="Previous Bookings">
          <PreviousBookings />
        </Tab>
      </Tabs>
    </div>
  );
};

export default BookingTabs;
