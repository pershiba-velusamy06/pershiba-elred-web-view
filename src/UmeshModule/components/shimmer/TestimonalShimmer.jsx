import "./index.scss";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";

const TestimonalShimmer = ({ color, showCard = true }) => {
  return (
    <div className="testimonials-shimmer">
      {showCard ? (
        [1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div key={item} className={classNames("profile-shimmer overflw_verticle overflw_verticle_mb")} >
              <div className="shimmer-user">
                <Skeleton height={8} baseColor={color} />
                <div className="circle-name-testimonials mt-3 mb-3">
                  <div className="icon">
                    <Skeleton circle height={24} width={24} baseColor={color} />
                  </div>
                  <div className="location">
                    <Skeleton height={8} baseColor={color} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          className={classNames("profile-shimmer", {
            "mt-3 overflw_verticle": !showCard,
          })}
        >
          <div className="shimmer-user">
            <Skeleton height={8} baseColor={color} />
            <div className="circle-name-testimonials mt-3">
              <div className="icon">
                <Skeleton circle height={24} width={24} baseColor={color} />
              </div>
              <div className="location">
                <Skeleton height={8} baseColor={color} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonalShimmer;
