import { useState, useRef, useEffect } from 'react'
import {
  Spinner, shareIcon, defaultDpURL, bluetick, handleShareProfile, shareURL, calcTextLength, onProfileClick, calcWidthAnimation
} from './ImportUserShare'

const UserAndShare = ({ data, shareData, userCode, shareLoader, setShareLoader, setShowVerifiedPopup }) => {
  const [calculateWidth, setCalculateWidth] = useState('')
  const capitalizedFirstName = data?.firstname ? data?.firstname?.charAt(0).toUpperCase() + data?.firstname?.slice(1).toLowerCase() : '';
  const capitalizedLastName = data?.lastname ? data?.lastname?.charAt(0).toUpperCase() + data?.lastname?.slice(1).toLowerCase() : '';
  const myDivRef = useRef(null);

  useEffect(() => {
    calcWidthAnimation(myDivRef, setCalculateWidth)
  }, [myDivRef]);

  return (
    <div className="userandsharecontainer">
      <div className="userdata">
        <span className="userprofileimg" onClick={(e) => onProfileClick(e, shareURL, userCode)}>
          <img className={data?.dpURL?.length !== 0 ? "" : "NoDPURL"} src={data?.dpURL?.length !== 0 ? data?.dpURL : defaultDpURL} alt="profile" /></span>
        <div ref={myDivRef} className="userdetail">
          <div className='username-bluetick'>
            <div className={calculateWidth < 200 ? "username-no-ellipsis" : "username"}
              onClick={(e) => onProfileClick(e, shareURL, userCode)}>{`${capitalizedFirstName} ${capitalizedLastName}`}</div>
            {data?.aadhaarVerifiedStatus && <div className="bluetick" onClick={() => setShowVerifiedPopup(true)}> <img src={bluetick} alt="" /> </div>}
          </div>

          <div className="userjobcompany">
            <span className={data?.companyName?.length === 0 || data?.companyName?.length <= 15 ? "no-user-designation" : "user-designation"}
              onClick={(e) => onProfileClick(e, shareURL, userCode)}>
              {calcTextLength(data?.title[0]?.value?.length, data?.title[0]?.value)}
            </span>
            {(data?.companyName!==null&&data?.companyName?.length !== 0 && data?.title?.length > 0) && <div>|</div>}
            {data?.companyName && (
              <span className={data?.companyName===null && data?.companyName?.length === 0 ? "no-user-company" : "user-company"}
                onClick={(e) => onProfileClick(e, shareURL, userCode)}>
                {calcTextLength(data?.companyName?.length, data?.companyName)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className={shareLoader ? 'spinnerLoader' : ''}>
          <Spinner animation="border" variant="#fff" size="sm" className={shareLoader ? 'show-img-loader' : 'hide-img-loader'} />
        </div>
        <span className="shareiconimage" onClick={() => handleShareProfile(shareData)}>
          <img className={shareLoader ? 'hide-img-loader' : 'show-img-loader'} src={shareIcon} alt="share" onLoad={() => setShareLoader(false)} /></span>
      </div>
    </div>
  );
};

export default UserAndShare;
