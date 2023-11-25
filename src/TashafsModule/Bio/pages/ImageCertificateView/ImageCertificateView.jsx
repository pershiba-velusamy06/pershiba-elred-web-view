import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./imagecertificateview.scss";
import closeBtn from "../../../../assets/images/redclose.svg";
import imgIcon from "../../../../assets/images/imgLable.svg";
import { Spinner } from "react-bootstrap";
import CertificateShimmer from "../CertificateShimmer/CertificateShimmer";
import { getFileExtension } from "../../../../globalFunctions";

const ImageCertificateView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location?.state;
  const [pdfLoader, setpdfLoader] = useState(true)
  const [certiLoader, setCertiLoader] = useState(true)
  const [ loaderCertificateImage, setLoaderCertificateImage] = useState(true)
  const [loader, setLoader] = useState(true)

  return (
    <div>
      <div className="cert_header">
        <div className="name">
        <Spinner animation="border" variant="dark" size="sm" className={pdfLoader ? 'show-img-loader certi-icon-awar-spinner' : 'hide-img-loader'} />

          <img src={imgIcon} alt=""  className={!pdfLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setpdfLoader(false)}  />
          <div className="certificate_name">Award.{getFileExtension(url)}</div>
        </div>
        <Spinner animation="border" variant="dark" size="sm" className={certiLoader ? 'show-img-loader cretificate-image-loader-icon' : 'hide-img-loader'} />

        <img src={closeBtn} alt="" onClick={() => navigate(-1)}  className={!certiLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setCertiLoader(false)}/>
      </div>
      <div className="wrapper_certificate">
        
      <Spinner animation="border" variant="dark" size="sm" className={loaderCertificateImage ? 'show-img-loader cretificate-image-loader-icon' : 'hide-img-loader'} />
          <img src={url} alt="" className={!loaderCertificateImage ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setLoaderCertificateImage(false)} />

      </div>
    </div>
  );
};

export default ImageCertificateView;
