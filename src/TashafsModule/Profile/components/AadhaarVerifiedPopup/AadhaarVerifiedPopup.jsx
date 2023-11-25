import "./aadhaar-verified-popup.scss";
import VerifiedImage from "../../../../assets/images/aadhaar-verified-popup.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AadhaarVerifiedPopup = ({ showVerifiedPopup, setShowVerifiedPopup }) => {
    const location = useLocation()
    useEffect(() => {
        setShowVerifiedPopup(false);
    }, [location])

    return (
        <>
            <div className="container-aadhar-popup">
                <div className={showVerifiedPopup ? "aadhar-verified-container" : "aadhar-verified-container-hidden"}>
                    <img src={VerifiedImage} alt="" className="aadhaar-verified-popup-img" />
                    <div className="aadhaar-verified-text">Aadhaar verified</div>
                    <div className="blue-tick-symbol-text">Blue tick symbolize that you are Aadhaar verified</div>
                    <button onClick={() => setShowVerifiedPopup(false)} className="aadhaar-verified-ok-btn"><span className="btn-ok-text">Ok</span></button>
                </div>
                <div onClick={() => setShowVerifiedPopup(false)} className={showVerifiedPopup ? "aadhar-popup-overlay" : "aadhar-popup-overlay-hidden"}></div>
            </div>
        </>
    )
}

export default AadhaarVerifiedPopup;