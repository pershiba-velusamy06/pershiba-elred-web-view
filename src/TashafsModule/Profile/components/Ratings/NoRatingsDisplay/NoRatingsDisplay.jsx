import React from "react";
import Skeleton from "react-loading-skeleton";
import "./noratingsdisplay.scss";

const NoRatingsDisplay = () => {
  return (
    <div className="no-ratings">
      <div className="shimmer-no">
        <div>
          <Skeleton circle height={75} width={75} baseColor="#E7E9ED" enableAnimation={false}/>
        </div>
        <div className="liner">
          <Skeleton height={16} width={100}  baseColor="#E7E9ED" enableAnimation={false}/>
          <Skeleton height={8} width={165}  baseColor="#E7E9ED" enableAnimation={false}/>
          <Skeleton height={8} width={35}  className="sk" baseColor="#E7E9ED" enableAnimation={false}/>
        </div>
      </div>
      <div className="shimmer-no">
        <div>
          <Skeleton circle height={75} width={75} baseColor="#f5f6f8" enableAnimation={false}/>
        </div>
        <div className="liner">
          <Skeleton height={16} width={100} baseColor="#f5f6f8" enableAnimation={false}/>
          <Skeleton height={8} width={165} baseColor="#f5f6f8" enableAnimation={false}/>
          <Skeleton height={8} width={35} baseColor="#f5f6f8" className="sk" enableAnimation={false}/>
        </div>
      </div>
      <div className="text">Empty List!</div>
      <div className="description">
        Once a user rates someone on their profile, the rating will be listed
        here for the creator to view
      </div>
    </div>
  );
};

export default NoRatingsDisplay;
