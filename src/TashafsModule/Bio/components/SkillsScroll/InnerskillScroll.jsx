import React from 'react'
import SkillsShimmer from './SkillsShimmer'
import NoDataText from "../NoDataText/NoDataText";
const InnerskillScroll = ({ loader, shimmerWidth, heading, data, noDataMsg, handleDragStart, handleDragEnd, handleDrag, MoveEventprops, slider,id }) => {

  return (
    <>
      {loader ? (
        <>
          <SkillsShimmer color="#CFD4DF" shimmerWidth={shimmerWidth} />
          <div style={{ marginBottom: "30px" }}></div>
        </>
      ) : (
        <div className="skills-option-div">
          <div className="skills-sub-title">{heading}</div>
          <div className="all-skills" id={id}
            onMouseDown={(e) => handleDragStart(slider, MoveEventprops, e)}
            onMouseUp={(e) => handleDragEnd(slider, MoveEventprops, e)}
            onMouseLeave={(e) => handleDragEnd(slider, MoveEventprops, e)}
            onMouseMove={(e) => handleDrag(slider, MoveEventprops, e)}
          >
            {data?.length ? (
              data?.map((item, id) => (
                <div className="single-skill">{item.value}</div>
              ))
            ) : (
              <div className="no-data-div">
                <NoDataText msg={noDataMsg} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default InnerskillScroll
