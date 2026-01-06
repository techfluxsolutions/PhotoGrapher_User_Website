import React from "react";
import "./RaiseQuery.css";

const RaiseQuery = ({ onBack }) => {
  return (
    <div className="raise-query-wrapper">

      {/* Header */}
      <div className="raise-query-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h3>Raise a Ticket Related to Booking</h3>
      </div>

      {/* Ticket Form */}
      <div className="ticket-card">
        <p className="service-name">Service Name - One Time Visit</p>

        <label className="form-label">Tell Us About your Issue !</label>
        <textarea
          className="form-textarea"
          placeholder="Describe your issue here..."
        />

        <label className="form-label mt-3">Attach a File (Optional):</label>
        <input type="file" className="form-file" />

        <button className="submit-btn">Submit Ticket</button>
      </div>

      {/* Previous Tickets */}
      <h3 className="previous-title">Previous Tickets</h3>

      <div className="previous-tickets">

        <div className="ticket-item">
          <p className="ticket-date">Created Date: Dec 18</p>
          <p className="ticket-status new">NEW</p>
          <p className="ticket-desc">Issue description here...</p>
          <button className="view-btn">Attachment & View</button>
        </div>

        <div className="ticket-item">
          <p className="ticket-date">Created Date: March 20</p>
          <p className="ticket-status new">NEW</p>
          <p className="ticket-desc">Issue description here...</p>
          <button className="view-btn">Attachment & View</button>
        </div>

      </div>

    </div>
  );
};

export default RaiseQuery;
