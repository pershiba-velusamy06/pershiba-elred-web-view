import React from "react";
import Skeleton from "react-loading-skeleton";

const SkillsShimmer = ({ color, shimmerWidth }) => {
  return (
    <div style={{margin:"0 20px"}}>
      <Skeleton width={shimmerWidth} height={10} borderRadius={13} baseColor={color} />
      {/* <div style={{display:"flex", justifyContent:"space-between", marginTop:'15px'}}>
        {[...Array(4)].map((item, index) => (
          <Skeleton
            width={80}
            height={24}
            borderRadius={14}
            baseColor={color}
          />
        ))}
      </div> */}
      <div className="skills_shimmer">
      <Skeleton width={107} height={32} borderRadius={16} baseColor={color} style={{marginRight:"10px"}}/>
      <Skeleton width={68} height={32} borderRadius={16} baseColor={color} style={{marginRight:"10px"}}/>
      <Skeleton width={68} height={32} borderRadius={16} baseColor={color} style={{marginRight:"10px"}}/>
      <Skeleton width={41} height={32} borderRadius={16} baseColor={color} style={{marginRight:"10px"}}/>

      </div>
    </div>
  );
};

export default SkillsShimmer;
