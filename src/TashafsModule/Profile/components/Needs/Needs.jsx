import React, { useContext, useEffect, useRef, useState } from "react";
import "./needs.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { openNeedCard } from "./needsGlobalFunctions";
import { navigateToPath } from "../../../../globalFunctions";
import { GlobalData } from "../../../../App";

const Needs = ({ rgba, userCode, needsData }) => {
  const navigate = useNavigate();
  const { setFormData } = useContext(GlobalData);
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(()=>{
    const handleMouseUp = (e) => {
      setIsDragging(false)
    };
    document.addEventListener("mouseup", handleMouseUp)
    return()=>{
      document.removeEventListener("mouseup", handleMouseUp)
    }
  },[])

  const handleMouseDown=(e)=>{
    if(e.button !== 0) return;
    setIsDragging(true);
    setStartPosition(e.clientX)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if(!isDragging) return;
    const deltaX = e.clientX - startPosition;
    scrollRef.current.scrollLeft = scrollLeft - deltaX;
  }
 
  return (
    <div className="needs" style={{ background: `${rgba}` }}>
      <div className="needs-top">
        <div className="heading">I need</div>
        <div
          className="see-text"
          onClick={(e) => {
            navigateToPath(navigate, userCode, "/my-bio/needs")
          }}
        >
          See all
        </div>
      </div>
      <div className="needs-card-div"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {needsData?.map((item, id) => (
          <div
            className="needs-card"
            key={id}
            onClick={() =>
              openNeedCard(item?.needId, userCode, navigate, setFormData)
            }
          >
            <div className="date">
              {moment(item?.needCreatedAt).format("ddd, DD MMM YYYY")}
            </div>
            <div className="title">{item?.needDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Needs;
