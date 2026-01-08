import React, { useState } from "react";
import "./CalenderBookingPage.css";

const CalenderBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(25);

  return (
  <div className="calendar-page">
    <h2 className="text-center mb-4">Review your Booking Details</h2>
    <div className="d-flex align-items-center justify-content-center">
      <div className="container booking-card"> 
        <div className="row g-4">
          {/* Pick a Date */}
          <div className="col-lg-6 col-md-12">
            <h5 className="mb-3">Pick a Date</h5>
            <div className="calendar-box">
              <p className="calendar-month">December</p>

              <div className="calendar-grid">
                {[
                  "SUN",
                  "MON",
                  "TUE",
                  "WED",
                  "THU",
                  "FRI",
                  "SAT",
                ].map((day) => (
                  <span key={day} className="calendar-day">
                    {day}
                  </span>
                ))}

                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <span
                    key={date}
                    className={`calendar-date ${
                      selectedDate === date ? "active" : ""
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-6 col-md-12">
            <h5 className="mb-3">Address</h5>
            <div className="address-box">
              <input type="text" placeholder="House/Flat No." />
              <input type="text" placeholder="Street/Lane Name" />
              <input type="text" placeholder="Landmark" />
              <input type="text" placeholder="City/Town/Village" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        
      </div>
    </div>
    <div className="text-center mt-4">
          <button className="btn book-btn">Book your Service</button>
          <div className="mt-2">
            <span className="back-link">Back</span>
          </div>
        </div>
    </div>
  );
};

export default CalenderBookingPage;
