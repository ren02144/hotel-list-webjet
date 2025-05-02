import React, { useEffect, useState } from "react";
import "./HotelCard.css";
import Rating from "./Rating";

function HotelCard({ hotel }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hotel-card">
      <div className="hotel-image-wrapper">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      </div>

      <div className="hotel-info-wrapper">
        <div className="hotel-details">
          <h2 className="hotel-name">{hotel.name}</h2>
          <Rating value={hotel.rating} />
          <div className="room-type">{hotel.roomType}</div>
        </div>
        <div className="price-section">
          <span className="hotel-price">${hotel.price}</span>
          {isMobile && <span className="view-button">→</span>}
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
