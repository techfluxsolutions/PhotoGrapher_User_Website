import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingDetails.css";
import CancelBookingDetailModal from "../CancellatonModals/CancelBookingDetailModal/CancelBookingDetailModal";
import CancellationChargeModal from "../CancellatonModals/CancellationChargeModal/CancellationChargeModal";
import SuccessfullyCancelledBookingModal from "../CancellatonModals/SuccessfullyCancelledBookingModal/SuccessfullyCancelledBookingModal";


const BookingDetails = ({ onRaiseQuery, onRating }) => {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showChargeModal, setShowChargeModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

        <p className="sub-heading">Event Information</p>
        <ul className="info-list">
          <li>• Event Type: Wedding Photography</li>
          <li>• Event Date: 24 March 2026</li>
          <li>• Event Time: 10:00 AM – 10:00 PM</li>
          <li>• Event Location: Mumbai, Maharashtra</li>
        </ul>

        <p className="sub-heading mt-3">Photography Package</p>
        <p className="package-name">
          Selected Package: Premium Wedding Coverage
        </p>

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

        <div className="row-between total">
          <p className="label">Total Amount Paid</p>
          <p className="value">₹47,500</p>
        </div>

        <div className="row-between mt-2">
          <p className="label">Status Badge</p>
          <p className="status completed">✔ Payment Completed</p>
        </div>
      </div>

      {/* Actions */}
      <div className="booking-actions">
        <button className="action-btn" onClick={onRaiseQuery}>
          Raise a Query
        </button>

        <button className="action-btn outline" onClick={onRating}>
          Give Rating & Feedback
        </button>

        <p className="cancel-btn-main" onClick={() => setShowCancelModal(true)}>Cancel Booking</p>
      </div>
      
      {/* First Modal */}
      <CancelBookingDetailModal
          show={showCancelModal}
          onClose={() => setShowCancelModal(false)}
          onProceed={() => {
          setShowCancelModal(false);
          setShowChargeModal(true);
        }}
      />

      {/* Second Modal */}
      <CancellationChargeModal
        show={showChargeModal}
        onClose={() => setShowChargeModal(false)}
        onConfirm={() => {
          setShowChargeModal(false);
          setShowSuccessModal(true);
        }}
      />
       {/* 3️⃣ Success Modal */}
      <SuccessfullyCancelledBookingModal
        show={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
    
  );
};

export default BookingDetails;
