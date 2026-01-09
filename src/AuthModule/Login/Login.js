// import React, { useState, useRef } from "react";
// import "./Login.css";
// import { LoginAPI, VerifyOTP } from "../../utils/APIs/credentialsApis";
// import { useNavigate } from "react-router-dom";
// import CommonMessageModal from "../../Pages/LandingPage/CommonMessageModal/CommonMessageModal";

// const Login = () => {
//   const [showOtp, setShowOtp] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const otpRefs = useRef([]);
//   const navigate = useNavigate();

//   /* 🔹 Modal State */
//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("Message");
//   const [modalMessage, setModalMessage] = useState("");
//   const [redirectAfterModal, setRedirectAfterModal] = useState(false);

//   const openModal = (title, message, redirect = false) => {
//     if (!message) return; // do not show empty messages
//     setModalTitle(title);
//     setModalMessage(message);
//     setRedirectAfterModal(redirect);
//     setShowMessageModal(true);
//   };

//   /* 🔹 SEND OTP */
//   const handleVerify = async () => {
//     try {
//       const payload = {
//         mobileNumber: phone,
//         role: "user",
//       };

//       const response = await LoginAPI(payload);

//       // ✅ SHOW BACKEND MESSAGE ONLY
//       openModal(
//         response.data?.success ? "Success" : "Error",
//         response.data?.message
//       );

//       if (response.data?.success) {
//         setShowOtp(true);
//         setTimeout(() => otpRefs.current[0]?.focus(), 100);
//       }

//     } catch (error) {
//       openModal(
//         "Error",
//         error.response?.data?.message
//       );
//     }
//   };

//   /* 🔹 VERIFY OTP */
//   const handleLogin = async () => {
//     try {
//       const payload = {
//         mobileNumber: phone,
//         role: "user",
//         otp: otp.join(""),
//       };

//       const response = await VerifyOTP(payload);

//       // ✅ SHOW BACKEND MESSAGE
//       openModal(
//         response.data?.success ? "Success" : "Error",
//         response.data?.message,
//         response.data?.success
//       );

//       if (response.data?.success) {
//         sessionStorage.setItem("isLoggedIn", "true");
//         sessionStorage.setItem("mobileNumber", phone);
//         sessionStorage.setItem(
//           "user",
//           JSON.stringify({ mobileNumber: phone, role: "user" })
//         );
//       }

//     } catch (error) {
//       openModal(
//         "Error",
//         error.response?.data?.message
//       );
//     }
//   };

//   /* 🔹 OTP INPUT HANDLERS */
//   const handleOtpChange = (value, index) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       otpRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleOtpKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       otpRefs.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <>
//       <div className="login-wrapper">
//         <div className="login-card text-center">

//           <h1 className="title">Login to your Account</h1>

//           {/* Phone */}
//           <div className="form-group phone-verify-group text-start">
//             <div className="phone-input-wrapper">
//               <label className="form-label">Phone</label>
//               <input
//                 type="text"
//                 className="form-control login-input"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 maxLength={10}
//               />
//             </div>

//             {!showOtp && (
//               <button
//                 className="btn buttons verify-btn"
//                 onClick={handleVerify}
//               >
//                 Verify
//               </button>
//             )}
//           </div>

//           {/* OTP */}
//           {showOtp && (
//             <>
//               <div className="form-group text-start">
//                 <label className="form-label">OTP</label>
//                 <div className="otp-group">
//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       ref={(el) => (otpRefs.current[index] = el)}
//                       type="text"
//                       maxLength="1"
//                       className="otp-input"
//                       value={digit}
//                       onChange={(e) =>
//                         handleOtpChange(e.target.value, index)
//                       }
//                       onKeyDown={(e) =>
//                         handleOtpKeyDown(e, index)
//                       }
//                     />
//                   ))}
//                 </div>
//               </div>

//               <button className="btn buttons" onClick={handleLogin}>
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* 🔹 Common Message Modal */}
//       <CommonMessageModal
//         show={showMessageModal}
//         title={modalTitle}
//         message={modalMessage}
//         onClose={() => {
//           setShowMessageModal(false);

//           if (redirectAfterModal) {
//             setRedirectAfterModal(false);
//             navigate("/myProfile");
//           }
//         }}
//       />
//     </>
//   );
// };

// export default Login;


import React, { useState, useRef } from "react";
import "./Login.css";
import { LoginAPI, VerifyOTP } from "../../utils/APIs/credentialsApis";
import { useNavigate } from "react-router-dom";
import Loader from "../../Template/Loader/Loader"; // ✅ Loader import
import { encryptData } from "../../utils/CRYPTO/cryptoFunction";
import CommonMessageModal from "../../Pages/CommonMessageModal/CommonMessageModal";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  /* 🔹 Loader State */
  const [loading, setLoading] = useState(false);

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

  /* 🔹 SEND OTP */
  const handleVerify = async () => {
    try {
      setLoading(true); // ✅ start loader

      const payload = {
        mobileNumber: phone,
        role: "user",
      };

      const response = await LoginAPI(payload);

      openModal(
        response.data?.success ? "Success" : "Error",
        response.data?.message
      );

      if (response.data?.success) {
        setShowOtp(true);
        setTimeout(() => otpRefs.current[0]?.focus(), 100);
      }
    } catch (error) {
      openModal("Error", error.response?.data?.message);
    } finally {
      setLoading(false); // ✅ stop loader
    }
  };

  /* 🔹 VERIFY OTP */
  const handleLogin = async () => {
    try {
      setLoading(true); // ✅ start loader

      const payload = {
        mobileNumber: phone,
        role: "user",
        otp: otp.join(""),
      };

      const response = await VerifyOTP(payload);

      openModal(
        response.data?.success ? "Success" : "Error",
        response.data?.message,
        response.data?.success
      );

      if (response.data?.success) {
        // ✅ SAVE TOKEN
        sessionStorage.setItem("PhotographerUserToken",encryptData(response.data?.token)
        );

        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("mobileNumber", phone);
        sessionStorage.setItem(
          "user",
          JSON.stringify({ mobileNumber: phone, role: "user" })
        );
      }
    } catch (error) {
      openModal("Error", error.response?.data?.message);
    } finally {
      setLoading(false); // ✅ stop loader
    }
  };

  /* 🔹 OTP INPUT HANDLERS */
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {/* ✅ GLOBAL LOADER */}
      {loading && <Loader />}

      <div className="login-wrapper">
        <div className="login-card text-center">
          <h1 className="title">Login to your Account</h1>

          {/* Phone */}
          <div className="form-group phone-verify-group text-start">
            <div className="phone-input-wrapper">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control login-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
            </div>

            {!showOtp && (
              <button
                className="btn buttons verify-btn"
                onClick={handleVerify}
              >
                Verify
              </button>
            )}
          </div>

          {/* OTP */}
          {showOtp && (
            <>
              <div className="form-group text-start">
                <label className="form-label">OTP</label>
                <div className="otp-group">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      className="otp-input"
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(e.target.value, index)
                      }
                      onKeyDown={(e) =>
                        handleOtpKeyDown(e, index)
                      }
                    />
                  ))}
                </div>
              </div>

              <button className="btn buttons" onClick={handleLogin}>
                Login
              </button>
            </>
          )}
        </div>
      </div>

      {/* 🔹 Common Message Modal */}
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
    </>
  );
};

export default Login;
