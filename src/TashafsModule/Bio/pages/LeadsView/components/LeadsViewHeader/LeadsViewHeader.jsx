import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { back, navigateToHomefromLeads } from "../../LeadsViewImports";

const LeadsViewHeader = ({ userCode }) => {
  const navigate = useNavigate();
  const [backLoader, setBackLoader] = useState(true)

  return (
    <div className="header-needs">
      <div className="back-display-Flex">
          <Spinner animation="border" variant="dark" size="sm" className={backLoader ? 'show-img-loader spinner-padding' : 'hide-img-loader'} />
          <img onClick={()=>navigateToHomefromLeads(userCode,navigate)} src={back} alt="" className={!backLoader ? 'show-img-loader back-icon' : "hide-img-loader"} onLoad={() => setBackLoader(false)} />
          <span className="txt">I can offer</span>
      </div>

    </div>
  );
};

export default LeadsViewHeader;
