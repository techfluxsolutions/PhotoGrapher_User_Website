// import React from "react";
// import "./PersonalizedQuotePage.css";

// const PersonalizedQuotePage = () => {
//   return (
//     <div className="quote-wrapper d-flex justify-content-center">
//       <div className="container text-center">
//         <h1 className="title">
//           Get your Personalized Quote
//         </h1>

//         <div className="quote-card mx-auto">
//           <form>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Event Type</label>
//               <select className="form-control quote-input">
//                 <option>Select</option>
//                 <option>Wedding</option>
//                 <option>Birthday</option>
//                 <option>Corporate</option>
//               </select>
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Event Date</label>
//               <input
//                 type="date"
//                 className="form-control quote-input"
//                 placeholder="dd-mm-yyyy"
//               />
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Event Location</label>
//               <input type="text" className="form-control quote-input" />
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Event Duration</label>
//               <input type="text" className="form-control quote-input" />
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">
//                 Photography Requirements
//               </label>
//               <input type="text" className="form-control quote-input" />
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Your Name</label>
//               <input type="text" className="form-control quote-input" />
//             </div>

//             <div className="quote-card-inputes mb-4">
//               <label className="center-label">Phone No.</label>
//               <input type="tel" className="form-control quote-input" />
//             </div>

//             <div className="quote-card-inputes mb-5">
//               <label className="center-label">Email ID</label>
//               <input type="email" className="form-control quote-input" />
//             </div>

//             <button className="btn buttons w-50">
//               Save Details
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalizedQuotePage;



import React from "react";
import "./PersonalizedQuotePage.css";

const PersonalizedQuotePage = () => {
  return (
    <div className="quote-wrapper d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <h1 className="title mb-5">
          Get your Personalized Quote
        </h1>

        <div className="quote-card mx-auto">
          <form>

            {/* Row wrapper */}
            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Event Type</label>
              </div>
              <div className="col-lg-6 col-12">
                <select className="form-control quote-input w-100">
                  <option>Select</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                </select>
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Event Date</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="date" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Event Location</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Event Duration</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Photography Requirements</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Your Name</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="text" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-4">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Phone No.</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="tel" className="form-control quote-input w-100" />
              </div>
            </div>

            <div className="row align-items-end mb-5">
              <div className="col-lg-6 col-12 mb-2 mb-lg-0">
                <label className="center-label">Email ID</label>
              </div>
              <div className="col-lg-6 col-12">
                <input type="email" className="form-control quote-input w-100" />
              </div>
            </div>

            <button className="btn buttons w-50 w-50 d-lg-inline-block">
              Save Details
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedQuotePage;
