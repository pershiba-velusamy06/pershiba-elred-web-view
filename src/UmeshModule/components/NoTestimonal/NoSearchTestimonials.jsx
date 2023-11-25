import React from "react";
import "./noTestimonal.scss";
import noTesti from "../../../assets/images/no-testimonials.png";

function NoSearchTestimonials({ color }) {
  return (
    <div className="container-wrapper-no height-100">
      <div className=" centered-div-test height-100">
        <div className="d-flex align-items-center justify-content-center flex-column height-100">
          <img alt="" src={noTesti} />
          <p className="no-testimonal">No search result found</p>
        </div>
      </div>
    </div>
  );
}

export default NoSearchTestimonials;
