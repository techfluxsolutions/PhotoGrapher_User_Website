import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  return (
    <div className="profile-wrapper">
      <div className="container">
        {/* Title */}
        <h1 className="title profile-title">My Profile</h1>
        <p className="profile-subtitle">Edit your personal information</p>

        {/* Profile Card */}
        <div className="profile-card d-flex align-items-center justify-content-between flex-wrap">
          
          {/* Left section */}
          <div className="d-flex align-items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Profile"
              className="profile-image"
            />

            <h2 className="profile-greeting">
              Hello Ana,
            </h2>
          </div>

          {/* Right section */}
          <button className="btn buttons edit-profile-btn">
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
