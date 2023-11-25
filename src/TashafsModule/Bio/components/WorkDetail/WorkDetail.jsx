import React from "react";
import greentick from "../../../../assets/images/greentick.svg";
import bluetick from "../../../../assets/images/bluetick.svg";
import { calcTextLength } from "../../../../globalFunctions";

const WorkDetail = ({ title, name, city, startYear, endYear, last, currentlyDoing, isVerified, greenTickVerification, key }) => {

  return (
    <div className="work-detail" key={key}>
      <div className="work-title-div">
        {/* <div className="work-title">{calcTextLength(title.length, title,'capitalize')}</div> */}
         <div className="work-title">{title}</div>
        {greenTickVerification &&  <div className="work-verify">
          <img src={greentick} alt="" />
        </div>}
      </div>
      <div className="work-desc-div">
        <div className="name">
          {calcTextLength(name.length, name)}
          {/* {!isVerified && `\u00A0`} */}
        </div>
        {isVerified &&  <div className="badge1">
         <img src={bluetick} alt="" />
        </div>}
        <div className="city"> | {calcTextLength(city.length, city)}</div>
      </div>
      <div className="year">
        {startYear.trim() !== "" && (endYear.trim() !== "" || currentlyDoing)
          ? `${startYear.trim()} - ${
              currentlyDoing ? "Present" : endYear.trim()
            }`
          : startYear.trim() !== ""
          ? startYear.trim()
          : startYear.trim() === "" && currentlyDoing
          ? "Present"
          : endYear.trim()}
      </div>
      {last ? null : <hr />}
    </div>
  );
};

export default WorkDetail;
