import React, { useState } from "react";
import back from "../../../assets/images/backpage.svg";
import placeholder from "../../../assets/images/placeholder.png";
import Skeleton from "react-loading-skeleton";
import { Spinner } from "react-bootstrap";

const MySuperSkillsShimmer = ({color}) => {
  const [backLoader, setbackLoader] = useState(true)
  return (
    <div>
      <div className="mysuperskills">
        <div className="back-title">
          <span className="back-button">
          <Spinner animation="border" variant="dark" size="sm" className={backLoader ? 'show-img-loader back-super-icon-spinner' : 'hide-img-loader'} />
            <img src={back} alt="" className={!backLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
          </span>
          My super skills
        </div>
        <div className="display-screen-shimmer">
          <img src={placeholder} alt="" />
          <Skeleton baseColor={color} height={10} width={290}/>
          <Skeleton baseColor={color} height={10} width={100} style={{marginTop:'35px'}}/>
          <Skeleton baseColor={color} height={10} width={260} style={{marginTop:'50px'}}/>
          <Skeleton baseColor={color} height={10} width={260} style={{marginTop:'25px'}}/>
          <Skeleton baseColor={color} height={10} width={220} style={{marginTop:'25px'}}/>
          <Skeleton baseColor={color} height={10} width={220} style={{marginTop:'25px'}}/>
          <Skeleton baseColor={color} height={10} width={260} style={{marginTop:'25px'}}/>
          
        </div>
        <div className="bottom-thumbnails">
          <div className={"thumbnail-div-shimmer custom"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
          <div className={"thumbnail-div-shimmer"}>
            <img src={placeholder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySuperSkillsShimmer;
