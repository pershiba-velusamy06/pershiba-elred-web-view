import { useState } from 'react';
import { Spinner } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import crossIcon from "../../../../../../assets/images/ion_close.svg";
import { navigateToPathWithState } from "../../../../../../globalFunctions";

const RespondingLeadsCross = ({ userCode, isLive, productionUrl }) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };
  const [logoLoader, setLogoLoader] = useState(true)

  return (
    <div className="crosscontainer">
     <Spinner animation="border" variant="#fff" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} />
      <img
        onClick={() =>
          navigateToPathWithState(
            navigate,
            userCode,
            "/my-bio/leads",
            navigateState
          )
        }     
        className={ logoLoader ? 'hide-img-loader' : 'leadscross'}
        src={crossIcon}
        alt="cross"
        onLoad={()=>setLogoLoader(false)}
      />
    </div>
  );
};

export default RespondingLeadsCross;
