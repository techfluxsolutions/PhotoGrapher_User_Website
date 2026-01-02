import React from "react";
import "./PersonalizedBudgetPage.css";

const PersonalizedBudgetPage = () => {
  return (
    <div className="budget-wrapper d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="title text-center mb-5">
          Get your Personalized Quote
        </h1>

        <div className="budget-card mx-auto">
          <form>

            {/* Budget */}
            <div className="budget-row">
              <label className="budget-label">Budget</label>
              <input
                type="text"
                className="form-control budget-input"
                placeholder="₹ Enter Budget"
              />
            </div>

            {/* Event Dates */}
            <div className="budget-row">
              <label className="budget-label">Event Dates</label>

              <div className="date-group">
                <span className="date-text">From</span>
                <input
                  type="date"
                  className="form-control budget-input date-input"
                />

                <span className="date-text">To</span>
                <input
                  type="date"
                  className="form-control budget-input date-input"
                />
              </div>
            </div>

            {/* Event City */}
            <div className="budget-row">
              <label className="budget-label">Event City</label>
              <div className="select-wrapper">
                <select className="form-control budget-input custom-select">
                  <option>Select City</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center mt-5">
              <button className="btn buttons w-50">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedBudgetPage;
