import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-wrapper">
      <div className="container">
        {/* Title */}
        <h1 className="title profile-title mb-3">My Profile</h1>
        <p className="profile-subtitle">Edit your personal information</p>

        {/* Profile Card */}
        <div className="profile-card d-flex align-items-center justify-content-between flex-wrap">
          
          {/* Left section */}
          <div className="d-flex align-items-center gap-4">
            <img
              src="./asset/Profile-page/Profileimage.png"
              alt="Profile"
              className="profile-image"
            />

            <h2 className="profile-greeting">
              Hello Ana,
            </h2>
          </div>

          {/* Right section */}
          <button
            className="btn buttons edit-profile-btn"
            onClick={() => navigate("/editProfile")}
          >
            Edit Profile
            <img
              src="/editIcon.png"
              alt="Edit"
              className="edit-icon"
            />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
