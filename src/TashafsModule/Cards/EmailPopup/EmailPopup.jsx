import React, { useState } from "react";
import close from "../../../assets/images/closeBg.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import emailLogo from "../../../assets/images/mailBg.svg";
import { Spinner } from "react-bootstrap";

const EmailPopup = ({ email, setOpenMail, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const gotoMail = (val) => {    
    const mailtoLink = `mailto:${val}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="outer-div" onClick={(e)=>e.stopPropagation()}>
      <div className="skill-title">
        <div className="title">Email ID</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />

        <div className="close-btn">
          <img src={close} alt="" onClick={() => setOpenMail(false)}className={!backLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={emailLogo}
        title={!status ? "Email not provided" : email}
        action={gotoMail}
        status={status}
        blankAddress = "Email not provided"
      />
    </div>
  );
};

export default EmailPopup;
