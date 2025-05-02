// Rating.jsx
import React from "react";

export const FullDiamond = ({ color = "#FFA500" }) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M8.707 1.893a1.002 1.002 0 0 0-1.415 0l-5.4 5.4c-.39.39-.39 1.022 0 1.414l5.4 5.4c.39.39 1.023.39 1.415 0l5.4-5.4c.39-.39.39-1.022 0-1.415l-5.4-5.4Z"></path>
  </svg>
);

const HalfDiamond = ({ color = "#FFA500" }) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.6c-.256 0-.512.098-.708.292l-5.4 5.4c-.39.39-.39 1.023 0 1.415l5.4 5.4A.996.996 0 0 0 8 14.4V1.6Z"></path>
  </svg>
);

const Rating = ({ value }) => {
  const fullCount = Math.floor(value);
  const hasHalf = value - fullCount >= 0.5;

  const icons = [];

  for (let i = 0; i < fullCount; i++) {
    icons.push(<FullDiamond key={`full-${i}`} />);
  }

  if (hasHalf) {
    icons.push(<HalfDiamond key="half" />);
  }

  return <span style={{ display: "inline-flex", gap: "2px" }}>{icons}</span>;
};

export default Rating;
