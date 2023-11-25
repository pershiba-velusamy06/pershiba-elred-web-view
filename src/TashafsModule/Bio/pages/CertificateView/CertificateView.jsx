import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./certificateview.scss";
import closeBtn from "../../../../assets/images/redclose.svg";
import pdfIcon from "../../../../assets/images/pdfIcon.svg";
import { Spinner } from "react-bootstrap";

const CertificateView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, link} = location?.state;
  const [pdfLoader, setpdfLoader] = useState(true)
  const [certiLoader, setCertiLoader] = useState(true)
  return (
    <div>
      <div className="cert_header">
        <div className="name">
        <Spinner animation="border" variant="dark" size="sm" className={pdfLoader ? 'show-img-loader certi-icon-awar-spinner' : 'hide-img-loader'} />

          <img src={pdfIcon} alt=""  className={!pdfLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setpdfLoader(false)} />
          <div className="certificate_name">Certificate.pdf</div>
        </div>
        <Spinner animation="border" variant="dark" size="sm" className={certiLoader ? 'show-img-loader' : 'hide-img-loader'} />

        <img src={closeBtn} alt="" onClick={() => navigate(-1)}     className={!certiLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setCertiLoader(false)}/>
      </div>
      <div className="wrapper_certificate">
        <a href={link} target="_blank">
          <img src={url} alt="" loading="lazy"/>
        </a>
      </div>
    </div>
  );
};

export default CertificateView;
