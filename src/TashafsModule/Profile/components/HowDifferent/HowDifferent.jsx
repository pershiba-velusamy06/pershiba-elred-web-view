import React, { useState } from "react";
import "./howdifferent.scss";
import next from "../../../../assets/images/next.svg";
import { useNavigate } from "react-router-dom";
import { navigateToPath } from "../../../../globalFunctions";
import { Spinner } from "react-bootstrap";

const HowDifferent = ({ rgba, userCode, icon }) => {
  const navigate = useNavigate();
  const [backLoader, setbackLoader] = useState(true)
  return (
    <div className="how-different" style={{ background: `${rgba}` }}
      onClick={() => navigateToPath(navigate, userCode, '/my-super-skills')}>
      <img src={icon} alt="" className="m-f-icon" />
      <div className="description">
        <div className="title">My Super Skills</div>
        <div className="desc">4 traits</div>
      </div>
      <div className="next-button">
      <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'show-img-loader !' : 'hide-img-loader'} />

        <img src={next} alt="" className={!backLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
              
      </div>
    </div>
  );
};

export default HowDifferent;
