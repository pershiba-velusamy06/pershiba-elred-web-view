import React, { useState } from "react";
import "./share.scss";
import share from "../../../../assets/images/share.svg";
import { Spinner } from "react-bootstrap";
import toast, { toastConfig } from "react-simple-toasts";

const Share = ({ rgba, url }) => {
  
  const [logoLoader, setLogoLoader] = useState(true)

  const handleShare = () => {
    const time = new Date().getTime().toString().slice(-6);
  
    (async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            text: `Hello, \n\nCheck out this profile at elRed.\n\nURL:`,
            url: url + `&t=${time}`,
          });
        } catch (error) {
          // console.error("Error Sharing:", error);
        }
      } else {
        toast('Web share not supported by MacOS Chrome')
      }
    })(); // Add parentheses here to call the function immediately
  };
 
  return (
    <div className="share-div" style={{ background: `${rgba}` }}>
      <div className="share-icon-div" onClick={handleShare}>
      <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} />
        <img src={share} alt="" className={logoLoader ? 'hide-img-loader' : 'show-img-loader'} onLoad={()=>setLogoLoader(false)}/>
      </div>
      <div className="share-text">Share</div>
    </div>
  );
};

export default Share;
