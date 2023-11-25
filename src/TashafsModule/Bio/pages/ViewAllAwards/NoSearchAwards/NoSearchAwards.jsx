import React from "react";
import "./noAwards.scss";
import norating from "../../../../../assets/images/no-testimonials.png";
import noAwards from "../../../../../assets/images/noawards.png"
import searchFinder from '../../../../../assets/images/Search-rafiki1x.png'
function NoSearchAwards({ isSearch, showData }) {
  return (
    <div className="container-wrapper">
      <div className="centered-div ">
        <div className="d-flex align-items-center justify-content-center flex-column">
          {isSearch && !showData ? <>
            <img alt="" src={norating} />
            <p className="no-ratings mt-4">No search result found</p>
          </> :
          isSearch && showData ? <>
          <img className="search-finder"  alt="" src={searchFinder} />
          {/* <p className="no-ratings mt-4">No search result found</p> */}
        </> :
            <>
              <img className="no-Awards" alt="" src={noAwards} />
              <p className="no-ratings mt-4">No awards & honours added yet</p>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default NoSearchAwards;
