import React, { useEffect, useState } from "react";
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
    rating: 4.5,
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
  const [filters, setFilters] = useState({
    name: "",
    ratings: []
  });
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [modalWasOpen, setModalWasOpen] = useState(false);

  const handleNameSearch = (name) => {
    setFilters((prev) => ({ ...prev, name }));
  };

  const handleRatingChange = (ratings) => {
    setFilters((prev) => ({ ...prev, ratings }));
  };

  const handleReset = () => {
    setFilters({ name: "", ratings: [] });
  };

  const filteredHotels = hotels
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter((hotel) =>
      filters.ratings.length > 0
        ? filters.ratings.includes(Math.floor(hotel.rating))
        : true
    )
    .sort((a, b) => a.price - b.price);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        if (showFilterModal) {
          setShowFilterModal(false);
          setModalWasOpen(true);
        }
      } else {
        if (modalWasOpen) {
          setShowFilterModal(true);
          setModalWasOpen(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showFilterModal, modalWasOpen]);

  return (
    <div className="page">
      <Header />
      <main className="main-area">
        <div className="content-container">
          <div className="left-content">
            <h2 className="hotel-count">{filteredHotels.length} Hotels Available in Melbourne</h2>
            <div className="content-body">
              <FilterPanel
                filters={filters}
                onNameSearch={handleNameSearch}
                onRatingChange={handleRatingChange}
              />
              <HotelCardList hotels={filteredHotels} />
            </div>
          </div>
          <AdBanner />
        </div>

        {showFilterModal && (
          <div className="filter-modal">
            <div className="filter-modal-content">
              <div className="modal-body">
                <FilterPanel
                  filters={filters}
                  onNameSearch={handleNameSearch}
                  onRatingChange={handleRatingChange}
                />
              </div>
              <div className="modal-footer">
                <button className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
                <button
                  className="done-btn"
                  onClick={() => setShowFilterModal(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          className="filter-float-button"
          onClick={() => setShowFilterModal(true)}
        >
          Filters
        </button>
      </main>
    </div>
  );
}

function HotelCardList({ hotels }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default App;
