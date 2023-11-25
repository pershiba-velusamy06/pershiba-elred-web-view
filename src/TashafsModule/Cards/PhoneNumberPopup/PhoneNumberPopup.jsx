import React, { useState } from "react";
import close from "../../../assets/images/closeBg.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import phone from "../../../assets/images/phonebg.svg";
import { Spinner } from "react-bootstrap";

const PhoneNumberPopup = ({ number, setEnable, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const handlePhoneNumberClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };
  return (
    <div
      className="outer-div" onClick={(e)=>e.stopPropagation()}
    >
      <div className="skill-title">
        <div className="title">Phone Number</div>
        <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} />

        <div className="close-btn">
          <img src={close} alt="" onClick={() => setEnable(false)} className={!backLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={phone}
        title={!status ? "Number not provided" : number}
        action={handlePhoneNumberClick}
        status={status}
        const blankAddress = "Number not provided"
      />
    </div>
  );
};

export default PhoneNumberPopup;
