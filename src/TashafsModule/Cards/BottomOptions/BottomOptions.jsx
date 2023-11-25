import React, { useState } from "react";
import "./bottomoptions.scss";
import call from "../../../assets/images/call.svg";
import globe from "../../../assets/images/globe.svg";
import location from "../../../assets/images/location.svg";
import mail from "../../../assets/images/mail.svg";
import S from "../../../assets/images/S.svg";
import star from "../../../assets/images/star.svg";
import { Spinner } from 'react-bootstrap'
const BottomOptions = ({ setOpen, setEnable, setOpenMail, setLocationEnable, setWebEnable, isShareCard, setPop }) => {
  const [superSkillsLoader, setsuperSkillsLoader] = useState(true)
  const [emailLoader, setEmailLoader] = useState(true)
  const [callLoader, setCallLoader] = useState(true)
  const [locationLoader, setLocationLoader] = useState(true)
  const [linksLoader, setlinksLoader] = useState(true)

  return (
    <div className={isShareCard ? 'bottom-options custom-width' : 'bottom-options'}>
      <div className="option-wrapper" onClick={() => setOpen(true)}>
        <Spinner animation="border" variant="light" size="sm" className={superSkillsLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
        <img src={S} alt="" onLoad={() => setsuperSkillsLoader(false)}
          className={!superSkillsLoader ? 'showing-img-loader' : "hiding-img-loader"}
        />
      </div>
      <div className="option-wrapper" onClick={() => setOpenMail(true)}>
        <Spinner animation="border" variant="light" size="sm" className={emailLoader ? 'showing-img-loader' : 'hiding-img-loader'} />

        <img src={mail} alt="" onLoad={() => setEmailLoader(false)}
          className={!emailLoader ? 'showing-img-loader' : "hiding-img-loader"} />
      </div>
      <div className="option-wrapper" onClick={() => setEnable(true)}>
        <Spinner animation="border" variant="light" size="sm" className={callLoader ? 'showing-img-loader' : 'hiding-img-loader'} />

        <img src={call} alt="" onLoad={() => setCallLoader(false)}
          className={!callLoader ? 'showing-img-loader' : "hiding-img-loader"} />
      </div>
      <div className="option-wrapper" onClick={() => setLocationEnable(true)}>
        <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
        <img src={location} alt="" onLoad={() => setLocationLoader(false)}
          className={!locationLoader ? 'showing-img-loader' : "hiding-img-loader"} />
      </div>
      <div className="option-wrapper" onClick={() => setWebEnable(true)}>
        <Spinner animation="border" variant="light" size="sm" className={linksLoader ? 'showing-img-loader' : 'hiding-img-loader'} />
        <img src={globe} alt="" onLoad={() => setlinksLoader(false)}
          className={!linksLoader ? 'showing-img-loader' : "hiding-img-loader"} />
      </div>
    </div>
  );
};

export default BottomOptions;
