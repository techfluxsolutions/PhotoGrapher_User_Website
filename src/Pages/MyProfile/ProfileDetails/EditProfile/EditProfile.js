import React from "react";
import "./EditProfile.css";

const EditProfile = () => {
  return (
    <div className="edit-profile-wrapper">
      <div className="container">

        {/* Title */}
        <h1 className="title profile-title mb-2">My Profile</h1>
        <p className="profile-subtitle">Edit your personal information</p>

        {/* Profile Header */}
        <div className="profile-header d-flex align-items-center gap-4 mb-4">
          <img
            src="/asset/Profile-page/Profileimage.png"
            alt="Profile"
            className="edit-profile-image"
          />
          <div>
            <h3 className="user-name">Alexa Rawles</h3>
            <p className="user-email">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <div className="row g-4">

          <div className="col-md-6 text-start">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Your First Name"
            />
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Your Email"
            />
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label">Mobile No.</label>
            <select className="form-select custom-select">
              <option value="">Select</option>
              <option>+91 9876543210</option>
              <option>+91 9123456789</option>
            </select>
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label">Date of Birth</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="MM/DD/YYYY"
            />
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label">Language</label>
            <select className="form-select custom-select">
              <option value="">Select</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>

          <div className="col-md-6 text-start">
            <label className="form-label">City</label>
            <select className="form-select custom-select">
              <option value="">Select</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Bangalore</option>
            </select>
          </div>

        </div>

        {/* Save Button */}
        <div className="text-center mt-5">
          <button className="btn save-btn buttons">Save Details</button>
        </div>

      </div>
    </div>
  );
};

export default EditProfile;
