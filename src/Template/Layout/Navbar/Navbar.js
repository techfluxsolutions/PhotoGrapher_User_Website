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



import { useEffect, useRef, useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
                <div onClick={() => handleServiceClick("/wedding")}>
                  Wedding Photography
                </div>
                <div onClick={() => handleServiceClick("/maternity")}>
                  Maternity & Baby Shoot
                </div>
                <div onClick={() => handleServiceClick("/event")}>
                  Event Photography
                </div>
                <div onClick={() => handleServiceClick("/fashion")}>
                  Fashion Photography
                </div>
                <div onClick={() => handleServiceClick("/corporate")}>
                  Corporate Photography
                </div>
                <div onClick={() => handleServiceClick("/sports")}>
                  Sports Photography
                </div>
                <div onClick={() => handleServiceClick("/automotive")}>
                  Automotive Photography
                </div>
                <div onClick={() => handleServiceClick("/food")}>
                  Food Photography
                </div>
                <div onClick={() => handleServiceClick("/product")}>
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

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>

          {/* Services Dropdown in Mobile */}
          <div className="mobile-services-section">
            <button
              className="mobile-services-btn"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              Services
            </button>
            {showServicesDropdown && (
              <div className="mobile-services-dropdown">
                <div onClick={() => { handleServiceClick("/wedding"); setIsMobileMenuOpen(false); }}>
                  Wedding Photography
                </div>
                <div onClick={() => { handleServiceClick("/maternity"); setIsMobileMenuOpen(false); }}>
                  Maternity & Baby Shoot
                </div>
                <div onClick={() => { handleServiceClick("/event"); setIsMobileMenuOpen(false); }}>
                  Event Photography
                </div>
                <div onClick={() => { handleServiceClick("/fashion"); setIsMobileMenuOpen(false); }}>
                  Fashion Photography
                </div>
                <div onClick={() => { handleServiceClick("/corporate"); setIsMobileMenuOpen(false); }}>
                  Corporate Photography
                </div>
                <div onClick={() => { handleServiceClick("/sports"); setIsMobileMenuOpen(false); }}>
                  Sports Photography
                </div>
                <div onClick={() => { handleServiceClick("/automotive"); setIsMobileMenuOpen(false); }}>
                  Automotive Photography
                </div>
                <div onClick={() => { handleServiceClick("/food"); setIsMobileMenuOpen(false); }}>
                  Food Photography
                </div>
                <div onClick={() => { handleServiceClick("/product"); setIsMobileMenuOpen(false); }}>
                  Product Photography
                </div>
              </div>
            )}
          </div>

          <NavLink to="/join-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Join Us
          </NavLink>

          <NavLink to="/about-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </NavLink>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            {!isLoggedIn ? (
              <NavLink to="/login" className="btn-login" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </NavLink>
            ) : (
              <>
                <NavLink to="/myProfile" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  My Profile
                </NavLink>
                <button className="logout-btn" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                  Logout
                </button>
              </>
            )}
            <NavLink to="/personalizedQuotePage" className="btn-quote" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Quote
            </NavLink>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
