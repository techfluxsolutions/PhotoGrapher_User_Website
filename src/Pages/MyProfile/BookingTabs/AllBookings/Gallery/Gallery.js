import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container gallery-container">

      {/* HEADER */}
      <div className="gallery-header">
        <div className="gallery-pending">7 Days Pending...</div>
        <div className="gallery-actions">
          <button className="gallery-btn outline">Store to Cloud</button>
          <button className="gallery-btn">Download Zip</button>
        </div>
      </div>

      {/* ROW 1 : TWO FIXED BOXES */}
      <div className="row gallery-row-gap">
        <div className="col-md-6 col-12">
          <div className="gallery-box gallery-box-xl">
            <img src="https://picsum.photos/800/600?1" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="gallery-box gallery-box-xl">
            <img src="https://picsum.photos/800/600?2" alt="" />
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row gallery-row-gap">

        {/* COL 1 */}
        <div className="col-md-4 col-12">
          <div className="gallery-col">
            <div className="gallery-box gallery-box-sm">
              <img src="https://picsum.photos/400/300?3" alt="" />
            </div>
            <div className="gallery-box gallery-box-sm">
              <img src="https://picsum.photos/400/300?4" alt="" />
            </div>
            <div className="gallery-box gallery-box-md">
              <img src="https://picsum.photos/400/500?5" alt="" />
            </div>
          </div>
        </div>

        {/* COL 2 */}
        <div className="col-md-5 col-12">
          <div className="gallery-col">
            <div className="gallery-box gallery-box-md">
              <img src="https://picsum.photos/500/350?6" alt="" />
            </div>
            <div className="gallery-box gallery-box-md">
              <img src="https://picsum.photos/500/350?7" alt="" />
            </div>
            <div className="gallery-box gallery-box-md">
              <img src="https://picsum.photos/500/350?8" alt="" />
            </div>
          </div>
        </div>

        {/* COL 3 */}
        <div className="col-md-3 col-12">
          <div className="gallery-col">
            <div className="gallery-box gallery-box-lg">
              <img src="https://picsum.photos/300/550?9" alt="" />
            </div>
            <div className="gallery-box gallery-box-md">
              <img src="https://picsum.photos/300/400?10" alt="" />
            </div>
            <div className="gallery-box gallery-box-sm">
              <img src="https://picsum.photos/300/250?11" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;




// import React from 'react'

// const Gallery = () => {
//   return (
//     <div className='container'>
//       <div>here i want the 7 days pending, storage, download zip</div>

//       <div className='row'> 
//         {/* here want two images */}
//         <div className='col-md-6 col-12'></div>
//          <div className='col-md-6 col-12'></div>
//       </div>
//        <div className='row'>
//         <div className='col-md-4 col-12'>3 images where i want flex in column format where width & height is same for fisrt two iamgse but for 3rd img width same height sligtly large </div>
//          <div className='col-md-5 col-12'>3 images where i want flex in column format where width & height is same</div>
//          <div className='col-md-3 col-12'>3 images where i want flex in column format where width is same but for 1st height large and then 2 nd image height slightly small then 3 rd or slightly less</div>
//        </div>

//     </div>
//   )
// }

// export default Gallery