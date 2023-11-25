import React, { useContext } from "react";
import quote from "../../../assets/images/fa6-solid_quote-left.svg";
import Header from "../../components/header/Header";
import "./detail.scss";
import { useLocation } from "react-router-dom";
import moment from "moment";
import {getRandomColor,gradientSolidColors,capitalizeNameString,onProfileClick, shareURL} from "../../../globalFunctions";
import bluetick from "../../../assets/images/blue_tick.svg"
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import AadhaarVerifiedPopup from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup";

function TestimonaDetails() {
  const location = useLocation();
  const item = location.state;
  const date = new Date(location.state?.createdTime);
  const overlayColor = getRandomColor(gradientSolidColors);
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  return (
    <>
    <div className="details-wrapper" style={{ position: "relative" }}>
      <Header title={`${item?.firstname ?? ""} ${item?.lastname}`} />
      <div
        className="detail_overlay "
        style={{ backgroundImage: `linear-gradient( rgba(0,0,0,0.5), ${overlayColor[1]}),url(${item?.dpURL}` }}>
        <div className="body_wrapper_test d-flex flex-column justify-content-between">
          <div className="quote-container d-flex justify-content-between">
            <img src={quote} alt="quote" />
            <div className="date-container d-flex">
              <div className="date"> {moment(date).format("ddd, DD MMM YYYY")} </div>
            </div>
          </div>
          <div className="testimonal-detail-text detail_text ">{item.testimonial}</div>
          <div
            onClick={(e) => onProfileClick(e,shareURL, item.givenBy_userCode)}
            className="d-flex profile-wrapper flex-row align-items-center dp_position">
            <div className="button">
              <img className="user-profile" src={item?.dpURL} alt="user" />
            </div>
            <div className="user-card">
              <div className="user">{`${capitalizeNameString(item?.firstname) ?? "" } ${capitalizeNameString(item?.lastname) ?? ""}`} 
               {item.aadhaarVerifiedStatus && <span onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}}>
                <img src={bluetick} alt="" className="btick"/></span>}</div>
              <span className="designation">  {item?.title?.[0]?.value ?? ""}  {item.title.length>1? `| +${item.title.length - 1}`:null}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
}
export default TestimonaDetails;
