import React from "react";
import "./HotelCard.css";
import Rating from "./Rating";

function HotelCard({ hotel }) {

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
        <div className="hotel-price">${hotel.price}</div>
      </div>
    </div>
  );
}

export default HotelCard;
