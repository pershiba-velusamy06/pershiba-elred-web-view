import classNames from "classnames";
import React, { useContext } from "react";
import {
  getCurrentTime,
  shareURL,
  capitalizeNameString,
} from "../../../globalFunctions";
import bluetick from "../../../assets/images/blue_tick.svg"
import { AadharPopupContext } from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext"

function CardBody({ item, className, showDesign, isProfileCard, adhaar }) {
  const { setShowVerifiedPopup } = useContext(AadharPopupContext);

  return (
    <div className="testi_profile_cont">
      <div className="text_text_wrapper_center">
        <div
          className={classNames("testimonal_text_profile", {
            [className]: className,
          })}
        >
          {item?.testimonial}
        </div>
      </div>
      <div className="d-flex profile-wrapper flex-row align-items-center">
        <div
          onClick={(e) => {
            const url = `${shareURL}/?userCode=${
              item.givenBy_userCode
            }&t=${getCurrentTime()}`;
            window.open(url, "_blank");
            e.stopPropagation();
          }}
          className="button"
        >
          <img className={(classNames("user_profile",{
            "profile_image":isProfileCard
          }))} src={item?.dpURL} alt="user" />
        </div>
        <div className="user-card">
          <div className="user_test btick_comments ">{`${
            capitalizeNameString(item?.firstname) ?? ""
          } ${capitalizeNameString(item?.lastname) ?? ""}`}  {item.aadhaarVerifiedStatus && 
            <span onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}}> 
              <img src={bluetick} alt="" /></span>}
          </div>
          {showDesign ? (
            <span className="designation">  {item?.title?.[0]?.value ?? ""}  {item.title.length>1? `| +${item.title.length - 1}`:null}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
