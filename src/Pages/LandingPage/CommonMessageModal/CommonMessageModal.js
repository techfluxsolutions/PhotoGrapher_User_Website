import React from "react";
import { Modal } from "react-bootstrap";
import "./CommonMessageModal.css";

const CommonMessageModal = ({
  show,
  onClose,
  title = "Message",
  message = "",
  buttonText = "Okay",
}) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
    >
      <div className="common-message-modal">
        <h3 className="modal-title">{title}</h3>

        <p className="modal-message">{message}</p>

        <button className="modal-btn" onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </Modal>
  );
};

export default CommonMessageModal;
