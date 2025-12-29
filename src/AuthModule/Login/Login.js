// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div className="login-wrapper">
//       <div className="login-card text-center">

//         <h2 className="login-title">LOGIN TO YOUR ACCOUNT</h2>

//         {/* Phone */}
//         <div className="form-group text-start">
//           <label className="form-label">Phone</label>
//           <input type="text" className="form-control login-input" />
//         </div>

//         {/* OTP */}
//         <div className="form-group text-start">
//           <label className="form-label">OTP</label>
//           <div className="otp-group">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <input
//                 key={i}
//                 type="text"
//                 maxLength="1"
//                 className="otp-input"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Button */}
//         <button className="btn login-btn">Login</button>

//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useRef } from "react";
import "./Login.css";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpRefs = useRef([]);

  const handleVerify = () => {
    setShowOtp(true);
    setTimeout(() => {
      otpRefs.current[0]?.focus();
    }, 100);
  };

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

        <h2 className="login-title">LOGIN TO YOUR ACCOUNT</h2>

        {/* Phone + Verify */}
        <div className="form-group phone-verify-group text-start">
          <div className="phone-input-wrapper">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control login-input" />
          </div>

          {!showOtp && (
            <button
              className="btn login-btn verify-btn"
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

            <button className="btn login-btn">Login</button>
          </>
        )}

      </div>
    </div>
  );
};

export default Login;
