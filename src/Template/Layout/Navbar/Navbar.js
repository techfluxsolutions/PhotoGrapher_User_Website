// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
        
//         {/* Navigation Links - Centered */}
//         <ul className="navbar-menu">
//           <li className="nav-item">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/services" className="nav-link">
//               Services
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/join-us" className="nav-link">
//               Join Us
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink to="/about-us" className="nav-link">
//               About Us
//             </NavLink>
//           </li>
//         </ul>

//         {/* Right Section - Buttons */}
//         <div className="navbar-actions">
//           <NavLink to="/login" className="btn-login">
//             Login
//           </NavLink>

//           <NavLink to="/personalizedQuotePage" className="btn-quote">
//             Get a Quote
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const profileRef = useRef(null);
  const servicesRef = useRef(null);

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    sessionStorage.clear();
    setShowProfileDropdown(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
      }

      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
    setShowServicesDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* CENTER MENU */}
        <ul className="navbar-menu">

          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="nav-item services-wrapper" ref={servicesRef}>
            <button
              className="nav-link services-btn"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              Services
            </button>

            {showServicesDropdown && (
              <div className="services-dropdown">
                <div onClick={() => handleServiceClick("/services/wedding")}>
                  Wedding Photography
                </div>
                <div onClick={() => handleServiceClick("/services/maternity")}>
                  Maternity & Baby Shoot
                </div>
                <div onClick={() => handleServiceClick("/services/event")}>
                  Event Photography
                </div>
                <div onClick={() => handleServiceClick("/services/fashion")}>
                  Fashion Photography
                </div>
                <div onClick={() => handleServiceClick("/services/corporate")}>
                  Corporate Photography
                </div>
                <div onClick={() => handleServiceClick("/services/sports")}>
                  Sports Photography
                </div>
                <div onClick={() => handleServiceClick("/services/automotive")}>
                  Automotive Photography
                </div>
                <div onClick={() => handleServiceClick("/services/food")}>
                  Food Photography
                </div>
                <div onClick={() => handleServiceClick("/services/product")}>
                  Product Photography
                </div>
              </div>
            )}
          </li>

          <li className="nav-item">
            <NavLink to="/join-us" className="nav-link">
              Join Us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">
              About Us
            </NavLink>
          </li>
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          {!isLoggedIn ? (
            <NavLink to="/login" className="btn-login">
              Login
            </NavLink>
          ) : (
            <div className="profile-dropdown-wrapper" ref={profileRef}>
              <button
                className="profile-btn"
                onClick={() =>
                  setShowProfileDropdown(!showProfileDropdown)
                }
              >
                <FaUserCircle className="profile-icon" />
              </button>

              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      navigate("/myProfile");
                    }}
                  >
                    My Profile
                  </div>

                  <div
                    className="dropdown-item logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}

          <NavLink to="/personalizedQuotePage" className="btn-quote">
            Get a Quote
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
