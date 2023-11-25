import React, { useState } from "react";
import "./header.scss";
import back from "../../../assets/images/backpage.svg";
import search from "../../../assets/images/search-icon.png";
import {  useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import classNames from "classnames";
import { capitalizeNameString } from "../../../globalFunctions";

function Header({ title, userCode, disabled=false, children, onClick, showSearch }) {
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isSearchImageLoading, setIsSearchImageLoading] = useState(true);

  return (
    <div
      className={classNames( "d-flex justify-content-between align-items-center header-container", { "pt-2": children }  )}>
      <div className=" d-flex align-items-center w-100">
        <div className="d-flex align-items-center overflow-hidden">
          <Spinner animation="border"  variant="dark" size="sm"
          className={ isImageLoading ? "showing-img-loader back-img designation-loader" : "hiding-img-loader" }/>
          <img
            className={classNames("back-img", {  ["show-back-image"]: isImageLoading})} src={back}
            onLoad={() => {  setIsImageLoading(false);  }} alt=""
            onClick={() => {
              if (onClick) {
                onClick();
              } else {
                navigate(-1);
              }}}/>
          <span className="header-title">{capitalizeNameString(title)}</span>
        </div>
        {children}
      </div>
      {showSearch ? (
        <>
          <Spinner animation="border" variant="dark" size="sm"
            className={ isSearchImageLoading ? "showing-img-loader search-icon designation-loader": "hiding-img-loader" }
          />
          <div className={classNames({"disabled_button":disabled})}  onClick={() => { navigate(`/testimonials/search?userCode=${userCode}`)}} disabled={true} ><img onLoad={() => {setIsSearchImageLoading(false);}}
            className={classNames("search-icon", { ["show-back-image"]: isSearchImageLoading})} src={search} alt=""/></div>
        </>
      ) : null}
    </div>
  );
}

export default Header;
