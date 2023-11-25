import React, { useEffect, useState } from "react";
import "./badges.scss";
import Skeleton from 'react-loading-skeleton'
const Badges = ({ data, count }) => {
  const baseColor = '#CFD4DF';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let lengthVal = data.length <= 4 ? data.length : 3
    const promises = data?.slice(0, lengthVal).map((imagePath) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = imagePath.awardIconURL;
      });
    });

    Promise.all(promises).then(() => {
      setIsLoading(false);
    });
  }, []);


  return (
    <div className="badges">

      {count <= 4 ? (
        <>
          {data?.map((item, id) => (
            <div className="badge">
              <Skeleton circle height={31} width={31} baseColor={baseColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
              <img src={item.awardIconURL} alt="" className={!isLoading ? 'showing-img-loader' : "hiding-img-loader"} />
            </div>
          ))}
        </>
      ) : (
        <>
          {data?.slice(0, 3).map((item, id) => (
            <div className="badge" key={id}>
              <Skeleton circle height={31} width={31} baseColor={baseColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
              <img src={item.awardIconURL} alt="" className={!isLoading ? 'showing-img-loader' : "hiding-img-loader"} />
            </div>
          ))}

          <div className="badge">
            <Skeleton circle height={31} width={31} baseColor={baseColor} className={isLoading ? 'showing-img-loader bastch-Shimmer' : "hiding-img-loader"} />
            <span className={!isLoading ? 'showing-img-loader total-badge' : "hiding-img-loader"}  >  +{count - (data?.length - 1)}</span>

          </div>
        </>
      )}
    </div>
  );
};

export default Badges;
