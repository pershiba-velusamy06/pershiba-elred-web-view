import React from "react";
import "./leadsviewshimmer.scss";
import Skeleton from "react-loading-skeleton";

export const LeadsViewShimmer = () => {
  return (
    <div className="needs_view_shimmer">
      <Skeleton
        height={11}
        width={31}
        baseColor={"#D6DAE5"}
        borderRadius={40}
      />
      <Skeleton
        height={11}
        width={129}
        baseColor={"#D6DAE5"}
        borderRadius={40}
      />
      <Skeleton
        height={11}
        width={81}
        baseColor={"#D6DAE5"}
        borderRadius={40}
      />
    </div>
  );
};

export const LeadsShimmer = () => {
  return (
    <div className="needs_shimmer">
      <div className="first_needs">
        <LeadsViewShimmer />
        <LeadsViewShimmer />
        <LeadsViewShimmer />
      </div>
      <div className="second_needs">
        <LeadsViewShimmer />
        <LeadsViewShimmer />
        <LeadsViewShimmer />
      </div>
    </div>
  );
};

export default LeadsShimmer;
