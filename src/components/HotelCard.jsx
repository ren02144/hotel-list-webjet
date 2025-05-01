import React from "react";
import "./HotelCard.css";

function HotelCard({ hotel }) {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  return (
    <div className="hotel-card">
      <div className="hotel-image-wrapper">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      </div>

      <div className="hotel-info-wrapper">
        <div className="hotel-details">
          <h2 className="hotel-name">{hotel.name}</h2>
          <div className="hotel-stars">{renderStars(hotel.rating)}</div>
          <div className="room-type">{hotel.roomType}</div>
        </div>
        <div className="hotel-price">${hotel.price}</div>
      </div>
    </div>
  );
}

export default HotelCard;
