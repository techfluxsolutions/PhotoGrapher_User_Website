// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import "./../App.css";
// import ScrollToTop from "./../utils/scrollToTop/ScrollToTop";
// import InternetChecker from "./../utils/InternetChecker/InternetChecker";
// import { useEffect, useState } from "react";
// import Navbar from "../Template/Layout/Navbar/Navbar";
// import AuthModule from "../AuthModule/AuthModule";
// import SignIn from "../AuthModule/SignIn/SignIn";
// import SignUp from "../AuthModule/SignUp/SignUp";
// import VerifyOTP from "../AuthModule/VerifyOTP/VerifyOTP";
// import Footer from "../Template/Layout/Footer/Footer";
// import Login from "../AuthModule/Login/Login";
// import LandingPage from "../Pages/LandingPage/LandingPage";

// // import Header from "./components/Header/Header";
// // import Footer from "./components/Footer/Footer";
// const AppRoutes = () => {
//    const [loggedIn, setLoggedIn] = useState(false);
 
//    useEffect(() => {
//      const isLoggedIn = localStorage.getItem("isLoggedIn");
//      const encryptedToken = localStorage.getItem("token");
 
//      if (isLoggedIn === "true" && encryptedToken) {
//        setLoggedIn(true);
//      }
//    }, []);
 
//    const handleLogin = () => {
//      setLoggedIn(true);
//    };
 
//    const handleLogout = () => {
//      setLoggedIn(false);
//    };
 
 
 
 
 
//    const [isOffline, setIsOffline] = useState(false);
 
//    useEffect(() => {
//      const handleOffline = () => setIsOffline(true);
//      const handleOnline = () => setIsOffline(false);
 
//      window.addEventListener('offline', handleOffline);
//      window.addEventListener('online', handleOnline);
 
//      // Cleanup event listeners on component unmount
//      return () => {
//        window.removeEventListener('offline', handleOffline);
//        window.removeEventListener('online', handleOnline);
//      };
//    }, []);
 
 
 
//    return (
//      <>
 
//        <div className="App">
//          <BrowserRouter>
         
//          <ScrollToTop />
 
//          {isOffline && <InternetChecker />}
// {/*  
//             <AuthModule/> */}
//            {/* <Header /> */}
//             <Navbar/>
 
//            <Routes>
 
 
//              {/* Redirect logged-in users from these routes */}
//              {loggedIn && (
//                <>
//                  <Route path="/" element={<Navigate to="/user/dashboard" />} />
//                  <Route path="/user/forgot_password" element={<Navigate to="/user/dashboard" />} />
//                  <Route path="/user/create_new_account" element={<Navigate to="/user/dashboard" />} />
//                  <Route path="/user/complete_profile" element={<Navigate to="/user/dashboard" />} />
//                  <Route path="/user/reset_password" element={<Navigate to="/user/dashboard" />} />
 
 
//                </>
//              )}
 
 
 
 
//              {/* Catch-all route */}
//              <Route path="/" element={<SignIn/>} />
//              <Route path="/sign-up" element={<SignUp/>} />
//              <Route path="/login" element={<Login/>} />
//              <Route path="/verify-otp" element={<VerifyOTP/>} />
//             <Route path="/landingPage" element={<LandingPage/>} />


 
 
//            </Routes>
 
//            <Footer />
 
 
//          </BrowserRouter>
//        </div>
//      </>
//    );
// }

// export default AppRoutes



import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./../App.css";
import ScrollToTop from "./../utils/scrollToTop/ScrollToTop";
import InternetChecker from "./../utils/InternetChecker/InternetChecker";
import { useEffect, useState } from "react";

import Navbar from "../Template/Layout/Navbar/Navbar";
import Footer from "../Template/Layout/Footer/Footer";

import SignIn from "../AuthModule/SignIn/SignIn";
import SignUp from "../AuthModule/SignUp/SignUp";
import VerifyOTP from "../AuthModule/VerifyOTP/VerifyOTP";
import Login from "../AuthModule/Login/Login";
import LandingPage from "../Pages/LandingPage/LandingPage";
import PersonalizedQuotePage from "../Pages/PersonalizedQuotePage/PersonalizedQuotePage";
import PersonalizedBudgetPage from "../Pages/PersonalizedBudgetPage/PersonalizedBudgetPage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import BookingDetails from "../Pages/MyProfile/BookingTabs/AllBookings/BookingDetails/BookingDetails";
import AllBookings from "../Pages/MyProfile/BookingTabs/AllBookings/AllBookings";

/* ================================
   Layout Component
================================ */
const Layout = ({ children }) => {
  const location = useLocation();

  // Routes where Navbar & Footer should be hidden
  const hideLayoutRoutes = [
    "/",
    "/login",
    "/sign-up",
    "/verify-otp",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

/* ================================
   App Routes
================================ */
const AppRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  /* Check login status */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const encryptedToken = localStorage.getItem("token");

    if (isLoggedIn === "true" && encryptedToken) {
      setLoggedIn(true);
    }
  }, []);

  /* Internet checker */
  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        {isOffline && <InternetChecker />}

        <Layout>
          <Routes>
            {/* Redirect logged-in users */}
            {loggedIn && (
              <>
                <Route path="/" element={<Navigate to="/user/dashboard" />} />
                <Route path="/user/forgot_password" element={<Navigate to="/user/dashboard" />} />
                <Route path="/user/create_new_account" element={<Navigate to="/user/dashboard" />} />
                <Route path="/user/complete_profile" element={<Navigate to="/user/dashboard" />} />
                <Route path="/user/reset_password" element={<Navigate to="/user/dashboard" />} />
              </>
            )}

            {/* Auth Routes (NO Navbar & Footer) */}
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />

            {/* Normal Pages (WITH Navbar & Footer) */}
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/personalizedQuotePage" element={<PersonalizedQuotePage />} />
            <Route path="/personalizedBudgetPage" element={<PersonalizedBudgetPage />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/bookingDetails" element={<AllBookings/>} />


          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
