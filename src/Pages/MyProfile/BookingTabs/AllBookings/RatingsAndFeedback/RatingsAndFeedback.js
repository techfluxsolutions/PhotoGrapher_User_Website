import React, { useState } from "react";
import "./RatingsAndFeedback.css";

const RatingsAndFeedback = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  return (
    <div className="rating-page-wrapper">
      <div className="rating-card">
        <h2 className="rating-title">Rate Us!</h2>
        <p className="rating-subtitle">Tell us your experience</p>

        {/* Rating Scale */}
        <div className="rating-scale">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`rating-circle ${rating === num ? "active" : ""}`}
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="rating-labels">
          <span>Worst</span>
          <span>Best</span>
        </div>

        {/* Comment Box */}
        <div className="comment-section">
          <label>Can you tell us more ?</label>
          <textarea
            placeholder="Add Comment.."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default RatingsAndFeedback;
