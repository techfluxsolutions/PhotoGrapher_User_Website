import React from "react";
import "./BookingDetails.css";

const BookingDetails = () => {
  return (
    <div className="booking-details-wrapper">

      {/* Page Title */}
      <h2 className="page-title">Wedding Photoshoot</h2>

      <p className="section-heading">Booking Details</p>

      {/* Booking Info Card */}
      <div className="details-card">
        <div className="row-between">
          <p className="label">Booking For</p>
          <p className="value">Riya Mehta</p>
        </div>

        <div className="divider" />

        <p className="sub-heading">Event Information</p>
        <ul className="info-list">
          <li>Event Type: Wedding Photography</li>
          <li>Event Date: 16 Dec, 2025</li>
          <li>Event Time: 04:00 PM – 10:00 PM</li>
          <li>Event Location: Mumbai, Maharashtra</li>
        </ul>

        <p className="sub-heading mt-3">Photography Package</p>
        <p className="package-name">Selected Package: Premium Wedding Coverage</p>

        <ul className="info-list">
          <li>• Full-day coverage</li>
          <li>• Candid + Traditional photography</li>
          <li>• Lead Photographer + Assistant</li>
          <li>• High-resolution edited images</li>
        </ul>
      </div>

      {/* Billing Details */}
      <p className="section-heading">Billing Details</p>

      <div className="details-card">
        <div className="row-between">
          <p className="label">Package Price</p>
          <p className="value">₹45,000</p>
        </div>

        <div className="row-between">
          <p className="label">Taxes & Charges</p>
          <p className="value">₹2,500</p>
        </div>

        <div className="divider" />

        <div className="row-between total">
          <p className="label">Total Amount Paid</p>
          <p className="value">₹47,500</p>
        </div>

        <div className="row-between mt-2">
          <p className="label">Status Badge</p>
          <p className="status completed">Payment Completed</p>
        </div>
      </div>

      {/* Actions */}
      <div className="BookingDetails-btn">
      <button className="action-btn w-50">Raise a Query</button>
      <button className="action-btn w-50 outline">Give Rating & Feedback</button>
     </div>
    </div>
  );
};

export default BookingDetails;
