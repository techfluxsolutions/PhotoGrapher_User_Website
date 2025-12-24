import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./../App.css";
import ScrollToTop from "./../utils/scrollToTop/ScrollToTop";
import InternetChecker from "./../utils/InternetChecker/InternetChecker";
import { useEffect, useState } from "react";
import Navbar from "../Template/Layout/Navbar/Navbar";
import AuthModule from "../AuthModule/AuthModule";
import SignIn from "../AuthModule/SignIn/SignIn";
import SignUp from "../AuthModule/SignUp/SignUp";
import VerifyOTP from "../AuthModule/VerifyOTP/VerifyOTP";

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
const AppRoutes = () => {
   const [loggedIn, setLoggedIn] = useState(false);
 
   useEffect(() => {
     const isLoggedIn = localStorage.getItem("isLoggedIn");
     const encryptedToken = localStorage.getItem("token");
 
     if (isLoggedIn === "true" && encryptedToken) {
       setLoggedIn(true);
     }
   }, []);
 
   const handleLogin = () => {
     setLoggedIn(true);
   };
 
   const handleLogout = () => {
     setLoggedIn(false);
   };
 
 
 
 
 
   const [isOffline, setIsOffline] = useState(false);
 
   useEffect(() => {
     const handleOffline = () => setIsOffline(true);
     const handleOnline = () => setIsOffline(false);
 
     window.addEventListener('offline', handleOffline);
     window.addEventListener('online', handleOnline);
 
     // Cleanup event listeners on component unmount
     return () => {
       window.removeEventListener('offline', handleOffline);
       window.removeEventListener('online', handleOnline);
     };
   }, []);
 
 
 
   return (
     <>
 
       <div className="App">
         <BrowserRouter>
         
         <ScrollToTop />
 
         {isOffline && <InternetChecker />}
{/*  
            <AuthModule/> */}
           {/* <Header /> */}
            <Navbar/>
 
           <Routes>
 
 
             {/* Redirect logged-in users from these routes */}
             {loggedIn && (
               <>
                 <Route path="/" element={<Navigate to="/user/dashboard" />} />
                 <Route path="/user/forgot_password" element={<Navigate to="/user/dashboard" />} />
                 <Route path="/user/create_new_account" element={<Navigate to="/user/dashboard" />} />
                 <Route path="/user/complete_profile" element={<Navigate to="/user/dashboard" />} />
                 <Route path="/user/reset_password" element={<Navigate to="/user/dashboard" />} />
 
 
               </>
             )}
 
 
 
 
             {/* Catch-all route */}
             <Route path="/" element={<SignIn/>} />
             <Route path="/sign-up" element={<SignUp/>} />
             <Route path="/sign-in" element={<SignIn/>} />
             <Route path="/verify-otp" element={<VerifyOTP/>} />

 
 
           </Routes>
 
           {/* <Footer /> */}
 
 
         </BrowserRouter>
       </div>
     </>
   );
}

export default AppRoutes