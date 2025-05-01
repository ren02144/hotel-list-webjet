import React, { useState } from "react";
import "./App.css";
import HotelCard from "./components/HotelCard";
import FilterPanel from "./components/FilterPanel";
import AdBanner from "./components/AdBanner";
import Header from "./components/Header";

const hotels = [
  {
    id: 1,
    name: "Oaks on William",
    price: 282,
    rating: 5,
    roomType: "Studio Apartment (No Housekeeping)",
    image: "https://hotelimages.webjet.com.au/lodging/1000000/850000/845400/845390/e394a620_z.jpg"
  },
  {
    id: 2,
    name: "Crowne Plaza Melbourne",
    price: 449,
    rating: 3,
    roomType: "Standard Room, Non Smoking",
    image: "https://hotelimages.webjet.com.au/lodging/1000000/570000/564500/564404/3398b9cd_z.jpg"
  },
  {
    id: 3,
    name: "Novotel Melbourne on Collins",
    price: 401,
    rating: 2,
    roomType: "Deluxe King Room",
    image: "https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg"
  }
];

function App() {
  const [filters, setFilters] = useState({ name: "", rating: 0 });

  const handleNameChange = (name) =>
    setFilters((prev) => ({ ...prev, name }));

  const handleRatingChange = (rating) =>
    setFilters((prev) => ({ ...prev, rating }));

  const filteredHotels = hotels
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter((hotel) =>
      filters.rating > 0 ? hotel.rating === filters.rating : true
    )
    .sort((a, b) => a.price - b.price);

  return (
    <div className="page">
      <Header />
      <main className="main-area">
        <h1 className="page-title">550 Hotels Available in Melbourne</h1>
        <div className="main-content">
          <FilterPanel
            filters={filters}
            onNameChange={handleNameChange}
            onRatingChange={handleRatingChange}
          />
          <div className="hotel-list">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          <AdBanner />
        </div>
      </main>
    </div>
  );
}

export default App;
