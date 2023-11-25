import React, { useEffect, useState } from "react";
import share from '../../../../assets/images/share-arrow.svg'
import avatar from '../../../../assets/images/avatar.png'
import { handleShareCard } from "../../shareCardFunctions";
import DesignationListProfile from "../../../components/DesignationListProfile/DesignationListProfile";
import { calcTextLength } from "../../../../globalFunctions";
import blueTick from "../../../../assets/images/blue_tick.svg";
import Skeleton from 'react-loading-skeleton'
import { Spinner } from 'react-bootstrap'

const UserDetails = ({ userDetail, firstname, lastname, setShowVerifiedPopup }) => {
  const baseColor = '#CFD4DF';
  let city = userDetail?.location?.city?.length > 0 ? userDetail?.location?.city + ", " : "";
  const location = city + userDetail?.location?.country;
  const [profileImageLoader, setprofileImageLoader] = useState(true)
  const[shareLoader,setShareLoader]=useState(true)

  return (
    <>
      <div className="userdetails-sharing" >
        <div className="share-icon" onClick={() => handleShareCard(userDetail)}>
        <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
          <img src={share} alt="" className={!shareLoader ? 'showing-img-loader' : "hiding-img-loader"}    onLoad={() => setShareLoader(false)} />
        </div>
        <span className="title" onClick={() => handleShareCard(userDetail)}>Share</span>
      </div>
      <div className="user-image">
        <Skeleton circle height={127} width={127} baseColor={baseColor} className={profileImageLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
        <img src={userDetail?.dpURL == "" ? avatar : userDetail?.dpURL} alt="" className={!profileImageLoader ? 'showing-img-loader' : "hiding-img-loader"} onLoad={() => setprofileImageLoader(false)} />
      </div>
      {userDetail?.aadhaarVerifiedStatus && <div onClick={() => setShowVerifiedPopup(true)} className="verified-user-share-card-icon-container">
        <img src={blueTick} alt="" className="verified-user-share-card-icon" />
      </div>}
      <div className="user-name">{calcTextLength(12, userDetail?.firstname, 'name')}</div>
      <div className="user-surname">{calcTextLength(20, userDetail?.lastname, 'name')}</div>
      <div className="professions" style={{ fontWeight: '600' }}>
        <DesignationListProfile designation={userDetail?.title} maxWidth={180} />
      </div>
      <div className="locations" style={{ fontWeight: '600' }}>
        {location?.length <= 27 ? location : location?.slice(0, 27) + '...'}
      </div>
    </>
  );
};

export default UserDetails;
