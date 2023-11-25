import React from "react";

const BackgroundFilter = ({ filterValues }) => {
  return (
    <svg viewBox="0 0 600 400" width="0" height="0" style={{ display: "none" }}>
      <filter id="filter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values={filterValues}
        />
      </filter>
    </svg>
  );
};

export default BackgroundFilter;
