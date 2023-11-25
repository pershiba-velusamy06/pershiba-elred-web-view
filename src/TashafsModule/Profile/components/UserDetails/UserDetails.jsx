import { useNavigate } from 'react-router-dom';
import {
  useState, designationImg, avatar, locate, bluetick, calcTextLength,
  handleMapClick, Spinner, DesignationListProfile
} from './ImportsUserDetail'
import Skeleton from "react-loading-skeleton";
const UserDetails = ({ profileImg, designation, location, firstName, lastName, adhaar, setShowVerifiedPopup, userCode }) => {

  const newAddress = `${location?.city?.length > 0 ? location?.city + "," : ""} ${location?.country}`
  const username = `${firstName} ${lastName}`
  const [designationLoader, setDesignationLoader] = useState(true)
  const [locationLoader, setLocationLoader] = useState(true)
  const [profileImageLoader, setprofileImageLoader] = useState(true)
  const navigate = useNavigate();
  const baseColor = '#CFD4DF';
  return (
    <div className="user-details">
    <span onClick={() => navigate(`/view-profile-picture?userCode=${userCode}`)} className="profile-img">
          <Skeleton
            circle
            height={60}
            width={60}
            className={profileImageLoader ? 'showing-img-loader user-img' : 'hiding-img-loader'}
            baseColor={baseColor}
          />
        <img src={profileImg == "" ? avatar : profileImg} alt="" onLoad={() => setprofileImageLoader(false)}
          className={!profileImageLoader ? 'showing-img-loader' : "hiding-img-loader"}
        />
      </span>
      <div className="name">
        <div className="profileUserName">{calcTextLength(username.length, username, 'name')}</div>
        {adhaar && <div className="btick" onClick={() => setShowVerifiedPopup(true)}>
          <img src={bluetick} alt="" className="blue-verify-tick" />
        </div>}
      </div>
      <div className="designation">
        <img src={designationImg} className={!designationLoader ? 'showing-img-loader designation-image' : "hiding-img-loader"} onLoad={() => setDesignationLoader(false)} alt="" />
        <Spinner animation="border" variant="light"
         size="sm" className={designationLoader ? 
         'showing-img-loader designation-loader' : 'hiding-img-loader'} />
         
        <div className="designation-name">
          <DesignationListProfile designation={designation} maxWidth={180} />
        </div>
      </div>
      <div className="locate" >
        <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'showing-img-loader location-loader' : 'hiding-img-loader'} />
        <span className="location-img-profile" onClick={() => handleMapClick(location?.latitude, location?.longitude)}>
          <img src={locate} alt="" className={!locationLoader ? 'showing-img-loader location-img' : "hiding-img-loader"}
            onLoad={() => setLocationLoader(false)} /></span>
        <span className="location-name" onClick={() => handleMapClick(location?.latitude, location?.longitude)}>
          {newAddress?.length <= 28 ? newAddress : newAddress?.slice(0, 28) + '...'}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
