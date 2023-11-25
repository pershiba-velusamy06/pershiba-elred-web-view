import React, { useState } from "react";
import close from "../../../assets/images/closeBg.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import web from "../../../assets/images/websiteBg.svg";
import { Spinner } from "react-bootstrap";
import { handleUrlClick } from "../../../globalFunctions";

const WebsitePopup = ({ data, setWebEnable, webStatus, socialStatus,website }) => {
  const [backLoader, setbackLoader] = useState(true)
 
  return (
    <div className="outer-div" onClick={(e)=>e.stopPropagation()}>
      <div className="skill-title">
        <div className="title">Web Links</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />
        <div className="close-btn">
          <img src={close} alt="" onClick={() => setWebEnable(false)} className={!backLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)}/>
        </div>
      </div>
      <div className="email-address-wrapper">
      <LogoTitle
        logo={web}
        title={
          !webStatus || website === "" || !website 
            ? "Website not provided"
            : website
        }
        action={handleUrlClick}
        status={webStatus}
        blankAddress = "Website not provided"
        favicon={ website === ""  ?false:true}
      />
      </div>

      <LogoTitle
        logo={web}
        title={
          !socialStatus || data?.socialMediaLink == ""|| ! data?.socialMediaLink 
            ? "Social Media Link not provided"
            : data?.socialMediaLink
        }
        action={handleUrlClick}
        status={socialStatus}
        blankAddress = "Social Media Link not provided"
        favicon={ data?.socialMediaLink === ""|| ! data?.socialMediaLink ?false:true}
      />
    </div>
  );
};

export default WebsitePopup;
