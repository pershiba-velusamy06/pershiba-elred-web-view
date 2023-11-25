import React from "react";
import {formatCommentTimestamp, shareURL,capitalizeNameString} from "../../../globalFunctions";
import { Link } from "react-router-dom";
import bluetick from "../../../assets/images/blue_tick.svg"
import classNames from "classnames";
import defaultDpURL from '../../../assets/images/defaultDp.png'

function ReplyCommentCard({ item, onCommentsClick, className, color, setShowVerifiedPopup }) {
  const commentBy = `${item?.repliedBy?.firstname ?? ""} ${ item?.repliedBy?.lastname}`;
  const timeStamp = formatCommentTimestamp(item?.createdTime);
  return (
    <div className="comments-card-wrapper replies-container d-flex ">
      <div className="img-cont">
        <Link to={`${shareURL}/?userCode=${item?.repliedBy?.userCode}`}
          onClick={(e) => {
            e.stopPropagation();
          }} target="_blank" className="button"
        ><img src={item?.repliedBy?.dpURL || defaultDpURL} alt="user" className={classNames({"NoDPURL bg-image-no":!item?.repliedBy?.dpURL })} />
        </Link></div>
      <div className="text-wrapper "
        onClick={(e) => {
          e.stopPropagation();
          if (onCommentsClick) {
            onCommentsClick();
          }
        }}
      >
        <div className={className ? `comment-text ${className} ` : "comment-text "} style={{ color: color }}>
          <div className="d-flex"><p className={"username mb-0"} style={{ color: color }}> {capitalizeNameString(commentBy)} </p>
          {item?.repliedBy.aadhaarVerifiedStatus && <div onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} className="btick">
          <img src={bluetick} alt="" />
        </div>}</div>
          <p className={ classNames("comment-text-in mb-0", {[className]:className})} style={{ color: color }}>{item?.reply}</p>
        </div>
        <div className="d-flex pt-1">
          <span className="text-date" style={{ color: color, marginRight: "5px" }}>{timeStamp}</span>
          <div className="text-date px-2" style={{ color: color }}>{item?.likesInfo?.likesCount} likes</div>
        </div>
      </div>
    </div>
  );
}

export default ReplyCommentCard;

