// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import "./../App.css";
// import ScrollToTop from "./../utils/scrollToTop/ScrollToTop";
// import InternetChecker from "./../utils/InternetChecker/InternetChecker";
// import { useEffect, useState } from "react";

// import Navbar from "../Template/Layout/Navbar/Navbar";

// import SignUp from "../AuthModule/SignUp/SignUp";
// import VerifyOTP from "../AuthModule/VerifyOTP/VerifyOTP";
// import Login from "../AuthModule/Login/Login";
// import LandingPage from "../Pages/LandingPage/LandingPage";
// import PersonalizedQuotePage from "../Pages/PersonalizedQuotePage/PersonalizedQuotePage";
// import PersonalizedBudgetPage from "../Pages/PersonalizedBudgetPage/PersonalizedBudgetPage";
// import MyProfile from "../Pages/MyProfile/MyProfile";
// import AllBookings from "../Pages/MyProfile/BookingTabs/AllBookings/AllBookings";
// import EditProfile from "../Pages/MyProfile/ProfileDetails/EditProfile/EditProfile";
// import RaiseQuery from "../Pages/MyProfile/BookingTabs/AllBookings/RaiseQuery/RaiseQuery";
// import RatingsAndFeedback from "../Pages/MyProfile/BookingTabs/AllBookings/RatingsAndFeedback/RatingsAndFeedback";

// /* ================================
//    Layout Component
// ================================ */
// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Routes where Navbar should be hidden
//   const hideLayoutRoutes = [
//     "/login",
//     "/sign-up",
//     "/verify-otp",
//   ];

//   const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideLayout && <Navbar />}
//       {children}
//     </>
//   );
// };

// /* ================================
//    App Routes
// ================================ */
// const AppRoutes = () => {
//   const [isOffline, setIsOffline] = useState(false);

//   /* Internet checker */
//   useEffect(() => {
//     const handleOffline = () => setIsOffline(true);
//     const handleOnline = () => setIsOffline(false);

//     window.addEventListener("offline", handleOffline);
//     window.addEventListener("online", handleOnline);

//     return () => {
//       window.removeEventListener("offline", handleOffline);
//       window.removeEventListener("online", handleOnline);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <ScrollToTop />

//         {isOffline && <InternetChecker />}

//         <Layout>
//           <Routes>

//             {/* Auth Routes (NO Navbar) */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/sign-up" element={<SignUp />} />
//             <Route path="/verify-otp" element={<VerifyOTP />} />

//             {/* Public / Normal Pages */}
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/personalizedQuotePage" element={<PersonalizedQuotePage />} />
//             <Route path="/personalizedBudgetPage" element={<PersonalizedBudgetPage />} />
//             <Route path="/myProfile" element={<MyProfile />} />
//             <Route path="/bookingDetails" element={<AllBookings />} />
//             <Route path="/editProfile" element={<EditProfile />} />
//             <Route path="/raiseQuery" element={<RaiseQuery />} />
//             <Route path="/ratingsAndFeedback" element={<RatingsAndFeedback />} />


//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default AppRoutes;



import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./../App.css";
import InternetChecker from "./../utils/InternetChecker/InternetChecker";
import ScrollToTop from "./../utils/scrollToTop/ScrollToTop";

import Navbar from "../Template/Layout/Navbar/Navbar";
import ProtectedRoute from "./ProtectedRoute";

/* Auth */
import Login from "../AuthModule/Login/Login";
import SignUp from "../AuthModule/SignUp/SignUp";
import VerifyOTP from "../AuthModule/VerifyOTP/VerifyOTP";

/* Pages */
import LandingPage from "../Pages/LandingPage/LandingPage";
import AllBookings from "../Pages/MyProfile/BookingTabs/AllBookings/AllBookings";
import RaiseQuery from "../Pages/MyProfile/BookingTabs/AllBookings/RaiseQuery/RaiseQuery";
import RatingsAndFeedback from "../Pages/MyProfile/BookingTabs/AllBookings/RatingsAndFeedback/RatingsAndFeedback";
import MyProfile from "../Pages/MyProfile/MyProfile";
import EditProfile from "../Pages/MyProfile/ProfileDetails/EditProfile/EditProfile";
import PersonalizedBudgetPage from "../Pages/PersonalizedBudgetPage/PersonalizedBudgetPage";
import PersonalizedQuotePage from "../Pages/PersonalizedQuotePage/PersonalizedQuotePage";
import BookingSuccess from "../Pages/ServiceBooking/BookingSuccess/BookingSuccess";
import FullPayment from "../Pages/ServiceBooking/FullPayment/FullPayment";
import PartialPayment from "../Pages/ServiceBooking/PartialPayment/PartialPayment";
import PaymentDetails from "../Pages/ServiceBooking/PaymentDetails/PaymentDetails";
import Automotive from "../Pages/ServicesPages/Automotive/Automotive";
import Corporate from "../Pages/ServicesPages/Corporate/Corporate";
import Event from "../Pages/ServicesPages/Event/Event";
import Fashion from "../Pages/ServicesPages/Fashion/Fashion";
import Food from "../Pages/ServicesPages/Food/Food";
import MaternityAndBabyShoot from "../Pages/ServicesPages/MaternityAndBabyShoot/MaternityAndBabyShoot";
import Product from "../Pages/ServicesPages/Product/Product";
import Sports from "../Pages/ServicesPages/Sports/Sports";
import Wedding from "../Pages/ServicesPages/Wedding/Wedding";
import Footer from "../Template/Layout/Footer/Footer";
import CalenderBookingPage from "../Pages/ServiceBooking/CalenderBookingPage/CalenderBookingPage";

/* ================================
   Layout Component
================================ */
const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/sign-up",
    "/verify-otp",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {/* Footer */}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

/* ================================
   App Routes
================================ */
const AppRoutes = () => {
  const [isOffline, setIsOffline] = useState(false);

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

            {/* ================= AUTH ROUTES ================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />

            {/* ================= PUBLIC ROUTES ================= */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/personalizedQuotePage" element={<PersonalizedQuotePage />} />
            <Route path="/personalizedBudgetPage" element={<PersonalizedBudgetPage />} />

            {/* ================= PROTECTED ROUTES ================= */}
            <Route
              path="/myProfile"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/bookingDetails"
              element={
                <ProtectedRoute>
                  <AllBookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/editProfile"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/raiseQuery"
              element={
                <ProtectedRoute>
                  <RaiseQuery />
                </ProtectedRoute>
              }
            />

            <Route
              path="/ratingsAndFeedback"
              element={
                <ProtectedRoute>
                  <RatingsAndFeedback />
                </ProtectedRoute>
              }
            />            
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/partial-payment" element={<PartialPayment />} />
            <Route path="/full-payment" element={<FullPayment />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/calenderBooking" element={<CalenderBookingPage />} />


            <Route path="/automotive" element={<Automotive />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/event" element={<Event />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/food" element={<Food />} />
            <Route path="/maternity" element={<MaternityAndBabyShoot />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/wedding" element={<Wedding />} />
            



          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
