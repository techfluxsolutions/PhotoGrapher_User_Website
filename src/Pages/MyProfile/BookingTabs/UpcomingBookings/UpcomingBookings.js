import React from "react";
import { LuCake } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UpcomingBookings.css";

const UpcomingBookings = () => {
  const navigate = useNavigate();

  const bookings = [
    {
      id: 1,
      title: "Birthday Event",
      date: "15 Dec, 2025",
      day: "Monday",
      rating: 5,
      status: "Completed",
      amount: "Rs. 7,000/-",
    },
    {
      id: 2,
      title: "Birthday Event",
      date: "15 Dec, 2025",
      day: "Monday",
      rating: 5,
      status: "Completed",
      amount: "Rs. 7,000/-",
    },
    {
      id: 3,
      title: "Birthday Event",
      date: "15 Dec, 2025",
      day: "Monday",
      rating: 4,
      status: "Completed",
      amount: "Rs. 7,000/-",
    },
  ];

  const handleViewDetails = (bookingId) => {
    navigate("/bookingDetails", { state: { bookingId } });
  };

  return (
    <div className="booking-list">
      {bookings.map((booking) => (
        <div className="booking-card" key={booking.id}>
          <div className="booking-left">
            <h3 className="booking-title">
              <LuCake className="cake-icon" />
              {booking.title}
            </h3>

            <p className="booking-date">
              {booking.date} &nbsp; <span>{booking.day}</span>
            </p>

            <div className="booking-rating">
              <span className="rating-label">Ratings</span>
              <div className="stars">
                {[...Array(booking.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>

            <button
              className="view-details"
              onClick={() => handleViewDetails(booking.id)}
            >
              View Details
            </button>
          </div>

          <div className="booking-right">
            <span className="status completed">{booking.status}</span>
            <p className="amount">{booking.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingBookings;
