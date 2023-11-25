import React, { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import "./testimonal.scss";
import "../components/card/wrapper.scss";
import Header from "../components/header/Header";
import { usePaginatedData } from "../hooks/usePaginatedData";
import TestimonalScroll from "./component/TestimonalScroll";
import AadhaarVerifiedPopup from "../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup";
import { AadharPopupContext } from "../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";


const CardList = ({ isLive, productionUrl }) => {
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const { data, hasMore, loading, setLoading, getData } = usePaginatedData(
    `${isLive ? productionUrl : ""}/noSessionPreviewTestimonials`
  );
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  useEffect(() => {
    if (userCode) {
      setLoading(true);
      getData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
    <div className="testimonal-main-wrapper">
      <Header showSearch={true} disabled={loading} title="Testimonials" userCode={userCode} />
      <TestimonalScroll
        data={data}
        getData={getData}
        hasMore={hasMore}
        loading={loading}
        userCode={userCode}
      />
    </div>
    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
};

export default CardList;
