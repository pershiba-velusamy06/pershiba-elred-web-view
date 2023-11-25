import React, { useState } from "react";
import "./resumeview.scss";
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../../../assets/images/backpage.svg";
// import noResume from "../../../../assets/images/noresume.png";
import noResume from "../../../../assets/images/noresume2x.png";
import PdfResume from "./PdfResume/PdfResume";
import { Spinner } from "react-bootstrap";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pdfPreview, resumeURL, resumeContentType } = location.state;
  const [resumeBackImg, setresumeBackImg] = useState(true)
  const [noResumeLoader, setNoResumeLoader] = useState(true)
  return (
    <div className="resume-view">
      <div className="resume-header">
      <Spinner animation="border" variant="dark" size="sm" className={resumeBackImg ?'showing-img-loader resume-back-spinner':"hiding-img-loader "}/>

        <div   className={!resumeBackImg?'resume-back showing-img-loader':"hiding-img-loader "}  onClick={() => navigate(-1)}>
          <img src={back} alt="" onLoad={() => setresumeBackImg(false)}/>
        </div>
        <div className="title">Resume</div>
      </div>
      {/* NO resume */}
      {!resumeURL ? (
        <div className="noresume">
          <img src={noResume} alt="" />
          <div className="no-title">No Resume Added Yet</div>
        </div>
      ) : resumeContentType == "image" ? (
        <div className="image-resume">
            <Spinner animation="border" variant="dark" size="sm" className={noResumeLoader ?'showing-img-loader resume-back-spinner':"hiding-img-loader "}/>
          <img src={resumeURL} onLoad={() => setNoResumeLoader(false)} className={!noResumeLoader ? 'show-img-loader' : 'hide-img-loader'}/>
        </div>
      ) :
        <PdfResume preview={pdfPreview} downloadLink={resumeURL} />
      }
    </div>
  );
};

export default ResumeView;
