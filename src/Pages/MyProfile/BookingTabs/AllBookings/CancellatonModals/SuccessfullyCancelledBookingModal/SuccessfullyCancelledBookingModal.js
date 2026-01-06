import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SuccessfullyCancelledBookingModal.css";

const SuccessfullyCancelledBookingModal = ({ show, onClose }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    onClose();        // close modal
    navigate("/");    // navigate to home
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      className="success-booking-modal"
    >
      <div className="success-modal-wrapper">
        {/* Success Image */}
        <img
          src="/asset/CancelBooking/Cancellation_succesful_checkmark.png"
          alt="Success"
          className="success-icon-img"
        />

        {/* Title */}
        <h2 className="success-title">Booking Cancelled</h2>

        {/* Description */}
        <p className="success-desc">
          The Booking has been successfully cancelled
        </p>

        {/* Action */}
        <button className="go-back-btn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </Modal>
  );
};

export default SuccessfullyCancelledBookingModal;
