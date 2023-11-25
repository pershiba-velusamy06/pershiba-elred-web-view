import React from "react";
import {capitalizeNameString, formatCommentTimestamp, onProfileClick, shareURL} from "../../../globalFunctions";
import classNames from "classnames";
import bluetick from "../../../assets/images/blue_tick.svg"
import defaultDpURL from '../../../assets/images/defaultDp.png'

function CommentsHead({ item, onCommentsClick, className, color, setShowVerifiedPopup }) {
  return (
    <div className="comments-card-wrapper d-flex">
      <div className="img-cont">
        <div onClick={(e) => { onProfileClick(e,shareURL, item?.commentedBy?.userCode) }} className={item?.commentedBy?.dpURL?"button_profile":"button_default_profile"}>
          <img className={classNames({" bg-image-no":!item?.commentedBy?.dpURL})}  src={item?.commentedBy?.dpURL || defaultDpURL} alt="user" />
        </div>
      </div>
      <div
        className="text-wrapper"
        
      >
        <div onClick={() => {
          if (onCommentsClick) {
            onCommentsClick();
          }
        }} className={classNames("comment-text", { [className]: className })}style={{ color: color }}>
          <div className="d-flex">       <p className={"username mb-0"} style={{ color: color }}>{`${  capitalizeNameString(item?.commentedBy?.firstname) ?? "" } ${capitalizeNameString(item?.commentedBy?.lastname)}`}</p>  
            {item.commentedBy?.aadhaarVerifiedStatus && <div onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} className="btick_comments d-flex" >
            <img src={bluetick} alt="" /> 
          </div>}</div>
          <p className={classNames("comment-text-in mb-0", { [className]: className,})} style={{ color: color }}>{item.comment}</p>
        </div>
        <div className="d-flex pt-1">
          <span className="text-date "style={{ color: color, marginRight: "5px" }}> {formatCommentTimestamp(item?.createdTime)}
          </span>
          <div className="text-date px-2" style={{ color: color }}>{item?.likesInfo?.likesCount} likes</div>
        </div>
      </div>
    </div>
  );
}

export default CommentsHead;
