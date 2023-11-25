import React, { useState } from "react";
import back from "../../../../../assets/images/backpage.svg";
import { Spinner } from "react-bootstrap";

function NeedsViewHeader({ navigateToHomeFromNeeds, userCode, navigate }) {
  const [backLoader, setBackLoader] = useState(true);

  return (
    <div className="lead_header">
      <Spinner
        animation="border"
        variant="dark"
        size="sm"
        className={
          backLoader
            ? "show-img-loader needs-top-margin-loader"
            : "hide-img-loader"
        }
      />
      <img
        src={back}
        alt=""
        onClick={() => navigateToHomeFromNeeds(userCode, navigate)}
        className={
          backLoader ? "hide-img-loader" : "show-img-loader needs-top-margin"
        }
        onLoad={() => setBackLoader(false)}
      />
      <div className="txt">I need</div>
    </div>
  );
}

export default NeedsViewHeader;
