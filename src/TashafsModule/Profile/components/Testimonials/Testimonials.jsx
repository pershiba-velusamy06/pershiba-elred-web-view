import React from "react";
import "./testimonials.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useResponse } from "../../../hooks/useResponse";
import ProfileTestimonalCard from "../../../../UmeshModule/components/card/ProfileTestimonalCard";
import TestimonalShimmer from "../../../../UmeshModule/components/shimmer/TestimonalShimmer";
import classNames from "classnames";

const Testimonials = ({ isLive, productionUrl, rgba }) => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const { data, loading } = useResponse(`${isLive ? productionUrl : ""}/noSessionPreviewTestimonials?userCode=${userCode}&start=1&offset=10`);

  return (
    <div style={{ backgroundColor: rgba }} className="testimonials">
      <div className=" d-flex justify-content-between align-items-centre">
        <p className=" mb-0">Testimonials</p>
        {loading || !data.length ? null : (
          <div
            className="btn-see-more testi_btn_see_more"
            onClick={() => navigate(`/testimonials?userCode=${userCode}`)}
          > See all </div>)}
      </div>
      {loading ? (
        <TestimonalShimmer showCard={false} />
      ) :data.length ? (
        <div
        className={classNames("testimonal-hor-container", {
          signle_testimonal_container: data?.length === 1,
        })}
      >
        {data?.map((item, index) => {
          return (
            <div
              style={{ marginRight: data?.length !== 1 ? "10px" : "14px"}} key={index + Math.random()}>
              <ProfileTestimonalCard
                onClick={() => {
                  navigate(`/testimonials/details?userCode=${userCode}`, {
                    state: item,
                  });
                }}
                isProfileCard={true} item={item} index={index} /> </div>
          );
        })}
      </div>
      ) : (<div className="no-comment no-testimonials text-align-center"> No Testimonials Available Yet</div> )}
    </div>
  );
};
export default Testimonials;
