// import React, { useState } from "react";
// import "./AllBookings.css";
// import BookingDetails from "./BookingDetails/BookingDetails";
// import Gallery from "./Gallery/Gallery";
// import Chats from "./Chats/Chats";

// const AllBookings = () => {
//   const [activeTab, setActiveTab] = useState("details");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "details":
//         return <BookingDetails />;
//       case "gallery":
//         return <Gallery />;
//       case "chat":
//         return <Chats />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="all-bookings-wrapper">

//       {/* Tabs */}
//       <div className="booking-tabs">
//         <button
//           className={`tab-item ${activeTab === "details" ? "active" : ""}`}
//           onClick={() => setActiveTab("details")}
//         >
//           Details
//         </button>

//         <button
//           className={`tab-item ${activeTab === "gallery" ? "active" : ""}`}
//           onClick={() => setActiveTab("gallery")}
//         >
//           Gallery
//         </button>

//         <button
//           className={`tab-item ${activeTab === "chat" ? "active" : ""}`}
//           onClick={() => setActiveTab("chat")}
//         >
//           Chat
//         </button>
//       </div>

//       {/* Content */}
//       <div className="booking-tab-content">
//         {renderComponent()}
//       </div>

//     </div>
//   );
// };

// export default AllBookings;




import React, { useState } from "react";
import "./AllBookings.css";
import BookingDetails from "./BookingDetails/BookingDetails";
import Gallery from "./Gallery/Gallery";
import Chats from "./Chats/Chats";
import RaiseQuery from "./RaiseQuery/RaiseQuery";
import RatingsAndFeedback from "./RatingsAndFeedback/RatingsAndFeedback";

const AllBookings = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [detailsView, setDetailsView] = useState("details"); 
  // details | raiseQuery | rating

  const renderDetails = () => {
    switch (detailsView) {
      case "raiseQuery":
        return <RaiseQuery onBack={() => setDetailsView("details")} />;
      case "rating":
        return <RatingsAndFeedback onBack={() => setDetailsView("details")} />;
      default:
        return (
          <BookingDetails
            onRaiseQuery={() => setDetailsView("raiseQuery")}
            onRating={() => setDetailsView("rating")}
          />
        );
    }
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "details":
        return renderDetails();
      case "gallery":
        return <Gallery />;
      case "chat":
        return <Chats />;
      default:
        return null;
    }
  };

  return (
    <div className="all-bookings-wrapper">

      {/* Tabs */}
      <div className="booking-tabs">
        <button
          className={`tab-item ${activeTab === "details" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("details");
            setDetailsView("details");
          }}
        >
          Details
        </button>

        <button
          className={`tab-item ${activeTab === "gallery" ? "active" : ""}`}
          onClick={() => setActiveTab("gallery")}
        >
          Gallery
        </button>

        <button
          className={`tab-item ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          Chat
        </button>
      </div>

      {/* Content */}
      <div className="booking-tab-content">
        {renderComponent()}
      </div>

    </div>
  );
};

export default AllBookings;
