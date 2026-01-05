import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    { id: 1, url: "https://picsum.photos/300/300?1" },
    { id: 2, url: "https://picsum.photos/300/300?2" },
    { id: 3, url: "https://picsum.photos/300/300?3", video: true },
    { id: 4, url: "https://picsum.photos/300/300?4" },
    { id: 5, url: "https://picsum.photos/300/300?5" },
    { id: 6, url: "https://picsum.photos/300/300?6" },
    { id: 7, url: "https://picsum.photos/300/300?7" },
    { id: 8, url: "https://picsum.photos/300/300?8" },
    { id: 9, url: "https://picsum.photos/300/300?9", video: true },
  ];

  return (
    <div className="gallery-wrapper">

      {/* Top Actions */}
      <div className="gallery-header">
        <div className="pending-text">7 Days Pending...</div>

        <div className="gallery-actions">
          <button className="gallery-btn outline">☁️ Store to Cloud</button>
          <button className="gallery-btn">⬇️ Download Zip File</button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img src={item.url} alt="gallery" />
            {item.video && <span className="video-icon">▶</span>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;
