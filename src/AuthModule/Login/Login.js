// import React, { useState, useRef } from "react";
// import "./Login.css";

// const Login = () => {
//   const [showOtp, setShowOtp] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", "", ""]);
//   const otpRefs = useRef([]);

//   const handleVerify = () => {
//     setShowOtp(true);
//     setTimeout(() => {
//       otpRefs.current[0]?.focus();
//     }, 100);
//   };

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
//     <div className="login-wrapper">
//       <div className="login-card text-center">

//         <h1 className="title">Login to your Account</h1>

//         {/* Phone + Verify */}
//         <div className="form-group phone-verify-group text-start">
//           <div className="phone-input-wrapper">
//             <label className="form-label">Phone</label>
//             <input type="text" className="form-control login-input" />
//           </div>

//           {!showOtp && (
//             <button
//               className="btn buttons verify-btn"
//               onClick={handleVerify}
//             >
//               Verify
//             </button>
//           )}
//         </div>

//         {/* OTP */}
//         {showOtp && (
//           <>
//             <div className="form-group text-start">
//               <label className="form-label">OTP</label>
//               <div className="otp-group">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (otpRefs.current[index] = el)}
//                     type="text"
//                     maxLength="1"
//                     className="otp-input"
//                     value={digit}
//                     onChange={(e) =>
//                       handleOtpChange(e.target.value, index)
//                     }
//                     onKeyDown={(e) =>
//                       handleOtpKeyDown(e, index)
//                     }
//                   />
//                 ))}
//               </div>
//             </div>

//             <button className="btn buttons">Login</button>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useRef } from "react";
// import "./Login.css";
// import { LoginAPI } from "../../utils/APIs/credentialsApis";

// const Login = () => {
//   const [showOtp, setShowOtp] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const otpRefs = useRef([]);

//   const handleVerify = async () => {
//     if (!phone) {
//       alert("Please enter phone number");
//       return;
//     }

//     try {
//       const payload = {
//         mobileNumber: phone,
//         role: "user",
//       };

//       const response = await LoginAPI(payload);

//       console.log("Login API Response:", response.data);
//       // response example:
//       // { mobileNumber: "7020471065", role: "user" }

//       setShowOtp(true);

//       setTimeout(() => {
//         otpRefs.current[0]?.focus();
//       }, 100);

//     } catch (error) {
//       console.error("Login API Error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

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
//     <div className="login-wrapper">
//       <div className="login-card text-center">

//         <h1 className="title">Login to your Account</h1>

//         {/* Phone + Verify */}
//         <div className="form-group phone-verify-group text-start">
//           <div className="phone-input-wrapper">
//             <label className="form-label">Phone</label>
//             <input
//               type="text"
//               className="form-control login-input"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               maxLength={10}
//             />
//           </div>

//           {!showOtp && (
//             <button
//               className="btn buttons verify-btn"
//               onClick={handleVerify}
//             >
//               Verify
//             </button>
//           )}
//         </div>

//         {/* OTP */}
//         {showOtp && (
//           <>
//             <div className="form-group text-start">
//               <label className="form-label">OTP</label>
//               <div className="otp-group">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (otpRefs.current[index] = el)}
//                     type="text"
//                     maxLength="1"
//                     className="otp-input"
//                     value={digit}
//                     onChange={(e) =>
//                       handleOtpChange(e.target.value, index)
//                     }
//                     onKeyDown={(e) =>
//                       handleOtpKeyDown(e, index)
//                     }
//                   />
//                 ))}
//               </div>
//             </div>

//             <button className="btn buttons">Login</button>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useRef } from "react";
import "./Login.css";
import { LoginAPI, VerifyOTP } from "../../utils/APIs/credentialsApis";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  // 🔹 SEND OTP
  const handleVerify = async () => {
    if (!phone || phone.length !== 10) {
      alert("Please enter valid phone number");
      return;
    }

    try {
      const payload = {
        mobileNumber: phone,
        role: "user",
      };

      const response = await LoginAPI(payload);
      console.log("Login API Response:", response.data);

      setShowOtp(true);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);

    } catch (error) {
      console.error("Login API Error:", error);
      alert("Failed to send OTP");
    }
  };

  // 🔹 VERIFY OTP
  const handleLogin = async () => {
  const enteredOtp = otp.join("");

  if (enteredOtp.length !== 4) {
    alert("Please enter valid OTP");
    return;
  }

  try {
    const payload = {
      mobileNumber: phone,
      role: "user",
      otp: enteredOtp,
    };

    const response = await VerifyOTP(payload);

    if (response.data?.success) {
      // ✅ STORE CLEAN AUTH DATA
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("mobileNumber", phone);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          mobileNumber: phone,
          role: "user",
        })
      );

      navigate("/myProfile");
    } else {
      alert("OTP verification failed");
    }

  } catch (error) {
    alert("Invalid OTP");
  }
};



  // 🔹 OTP INPUT HANDLERS
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
    <div className="login-wrapper">
      <div className="login-card text-center">

        <h1 className="title">Login to your Account</h1>

        {/* Phone + Verify */}
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
  );
};

export default Login;
