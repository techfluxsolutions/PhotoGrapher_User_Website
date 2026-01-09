// import React from "react";
// import "./EditProfile.css";

// const EditProfile = () => {
//   return (
//     <div className="edit-profile-wrapper">
//       <div className="container">

//         {/* Title */}
//         <h1 className="title profile-title mb-2">My Profile</h1>
//         <p className="profile-subtitle">Edit your personal information</p>

//         {/* Profile Header */}
//         <div className="profile-header d-flex align-items-center gap-4 mb-4">
//           <img
//             src="/asset/Profile-page/Profileimage.png"
//             alt="Profile"
//             className="edit-profile-image"
//           />
//           <div>
//             <h3 className="user-name">Alexa Rawles</h3>
//             <p className="user-email">alexarawles@gmail.com</p>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="row g-4">

//           <div className="col-md-6 text-start">
//             <label className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control custom-input"
//               placeholder="Your First Name"
//             />
//           </div>

//           <div className="col-md-6 text-start">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control custom-input"
//               placeholder="Your Email"
//             />
//           </div>

//           <div className="col-md-6 text-start">
//             <label className="form-label">Mobile No.</label>
//             <select className="form-select custom-select">
//               <option value="">Select</option>
//               <option>+91 9876543210</option>
//               <option>+91 9123456789</option>
//             </select>
//           </div>

//           <div className="col-md-6 text-start">
//             <label className="form-label">Date of Birth</label>
//             <input
//               type="text"
//               className="form-control custom-input"
//               placeholder="MM/DD/YYYY"
//             />
//           </div>

//           <div className="col-md-6 text-start">
//             <label className="form-label">Language</label>
//             <select className="form-select custom-select">
//               <option value="">Select</option>
//               <option>English</option>
//               <option>Hindi</option>
//               <option>Marathi</option>
//             </select>
//           </div>

//           <div className="col-md-6 text-start">
//             <label className="form-label">City</label>
//             <select className="form-select custom-select">
//               <option value="">Select</option>
//               <option>Mumbai</option>
//               <option>Pune</option>
//               <option>Bangalore</option>
//             </select>
//           </div>

//         </div>

//         {/* Save Button */}
//         <div className="text-center mt-5">
//           <button className="btn save-btn buttons">Save Details</button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EditProfile;



import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
import CommonMessageModal from "../../../CommonMessageModal/CommonMessageModal";
import Loader from "../../../../Template/Loader/Loader";
import { editProfile, GetProfile } from "../../../../utils/APIs/myProfileApis";

const EditProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  
  const [profile, setProfile] = useState(null);
/* 🔹 Modal State */
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Message");
  const [modalMessage, setModalMessage] = useState("");
  const [redirectAfterModal, setRedirectAfterModal] = useState(false);

  const openModal = (title, message, redirect = false) => {
    if (!message) return;
    setModalTitle(title);
    setModalMessage(message);
    setRedirectAfterModal(redirect);
   setShowMessageModal(true);
  };
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    state: "",
    city: "",
    avatar: null,
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await GetProfile();

      if (response?.data?.success) {
        const data = response.data.data;
        setProfile(data);

        setFormValues({
          username: data.username || "",
          email: data.email || "",
          mobileNumber: data.mobileNumber || "",
          dateOfBirth: data.dateOfBirth || "",
          state: data.state || "",
          city: data.city || "",
          avatar: null, // only for new upload
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      avatar: e.target.files[0],
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
  const formData = new FormData();

  formData.append("username", formValues.username);
  formData.append("email", formValues.email);
  formData.append("mobileNumber", formValues.mobileNumber);
  formData.append("dateOfBirth", formValues.dateOfBirth);
  formData.append("state", formValues.state);
  formData.append("city", formValues.city);

  if (formValues.avatar) {
    formData.append("avatar", formValues.avatar);
  }

  try {
    setLoading(true);
    const response = await editProfile(formData);

    if (response?.data?.success) {
      openModal(
        "Message",
        response.data.message || "Profile updated successfully",
        true // ✅ redirect after close
      );
    }
  } catch (error) {
    openModal(
      "Error",
      error?.response?.data?.message || "Failed to update profile",
      false
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      {loading && <Loader />}

       <CommonMessageModal
        show={showMessageModal}
        title={modalTitle}
        message={modalMessage}
        onClose={() => {
          setShowMessageModal(false);
          if (redirectAfterModal) {
            setRedirectAfterModal(false);
            navigate("/myProfile");
          }
        }}
      />
      <div className="edit-profile-wrapper">
        <div className="container">
          <h1 className="title profile-title mb-2">My Profile</h1>
          <p className="profile-subtitle">Edit your personal information</p>

          {/* ===== PROFILE HEADER ===== */}
          <div className="profile-header d-flex align-items-center gap-4 mb-4">
            <img
              src={
                profile?.avatar ||
                profile?.avtar ||
                "/asset/Profile-page/Profileimage.png"
              }
              alt="Profile"
              className="edit-profile-image"
            />

            <div>
              <h3 className="user-name">{profile?.username || "Hey There !"}</h3>
            </div>
          </div>

          {/* ===== FORM ===== */}
          <div className="row g-4">
            <div className="col-md-6 text-start">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="username"
                className="form-control custom-input"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control custom-input"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">Mobile No.</label>
              <input
                type="text"
                name="mobileNumber"
                className="form-control custom-input"
                value={formValues.mobileNumber}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                className="form-control custom-input"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                className="form-control custom-input"
                value={formValues.state}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control custom-input"
                value={formValues.city}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 text-start">
              <label className="form-label">Avatar</label>
              <input
                type="file"
                accept="image/*"
                className="form-control custom-input"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* ===== SAVE ===== */}
          <div className="text-center mt-5">
            <button className="btn save-btn buttons" onClick={handleSubmit}>
              Save Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
