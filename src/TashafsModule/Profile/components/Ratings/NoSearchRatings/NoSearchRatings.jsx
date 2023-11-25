import React from "react";
import "./noRatings.scss";
import norating from "../../../../../assets/images/no-data-search-2x.png";

function NoSearchRatings({ color }) {
  
  return (
    <div className="container-wrapper-no-search">
    
          <img alt="" src={norating} />
          <p className="no-ratings-text">No search result found</p>
      
    </div>
  );
}

export default NoSearchRatings;
