import React from "react";
import Skeleton from "react-loading-skeleton";
import "./index.scss";
import classNames from "classnames";

function CommentsShimmer({ color , className, profile = false }) {
  const arr = profile ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classNames({ [className]: className })}>
      {arr.map((num) => (
        <div
          key={num}
          className={"mx-1 mb-3 profile-shimmer mt-1 "}
          style={{ backgroundColor: color }}
        >
          <div className="circle-name mt-1">
            <div className="icon">
              <Skeleton circle height={50} width={50} baseColor={color} />
            </div>
            <div className="location">
              <Skeleton height={8} baseColor={color} />
              <Skeleton height={8} baseColor={color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsShimmer;
