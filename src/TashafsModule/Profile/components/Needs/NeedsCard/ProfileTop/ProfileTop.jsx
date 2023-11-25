import React, { useContext } from "react";
import avatar from "../../../../../../assets/images/avatar.png";
import bluetick from "../../../../../../assets/images/blue_tick.svg";
import { viewProfile } from "../../needsGlobalFunctions";
import { calcTextLength } from "../../../../../../globalFunctions";
import { AadharPopupContext } from "../../../AadhaarVerifiedPopup/AadharPopupContext";

const ProfileTop = ({ data }) => {
  const { dpURL, firstname, lastname, companyName, title, aadhaarVerifiedStatus } =
    data?.needOwnerDetails;
    const { setShowVerifiedPopup } = useContext(AadharPopupContext);

  const name = `${firstname} ${lastname}`

  return (
    <div className="profile_top_wrapper" onClick={() => viewProfile(data)}>
      <div className="profile_div">
        <div className="avatar">
          <img src={dpURL == "" ? avatar : dpURL} alt="" />
        </div>
        <div className="name_detail">
          <span className='d-flex'>
            <span className="name" >{calcTextLength(18, name, 'name')} </span>
            {aadhaarVerifiedStatus && <span onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} className="bluetick-NeedsProfile">
              <img src={bluetick} alt="" />
            </span>}
          </span>
          {/* <span className="name">
          {calcTextLength(18, name, 'name')}
          </span>
          {!aadhaarVerifiedStatus && <span className="btick">
          <img src={bluetick} alt="" />
        </span>} */}
          <div className="location">
            <span className={companyName?.length>6?"needs_designation":"needs_designation-alone"}>
              {calcTextLength(title?.[0]?.value.length, title?.[0]?.value)}
            
            </span>
            
            {(companyName!==null &&companyName?.length !== 0 && title?.[0]?.value.length > 0) && <span>|</span>}
            {companyName && (
              <span className={title?.[0]?.value.length>4?"needs_company":"needs_company-alone"}>
              
                {calcTextLength(companyName?.length, companyName)}
                {/* {companyName?.length <= 16
                  ? companyName
                  : companyName?.slice(0, 16) + "..."} */}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="view_button" onClick={() => viewProfile(data)}>
        View profile
      </div>
    </div>
  );
};

export default ProfileTop;
