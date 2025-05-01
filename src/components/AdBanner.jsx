import React from "react";
import "./AdBanner.css";

function AdBanner() {
  return (
    <div className="ad-banner">
        {/* ad image from webjet website */}
      <img
        src="https://tpc.googlesyndication.com/simgad/3706009192004328791"
        alt="Ad Banner"
        className="ad-image"
      />
    </div>
  );
}

export default AdBanner;
