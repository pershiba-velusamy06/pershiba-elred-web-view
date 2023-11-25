import React, { useState } from "react";
import "./ratings.scss";
import star from "../../../../assets/images/star.svg";
import RatingsContainer from "./RatingsContainer/RatingsContainer";
import { Spinner } from "react-bootstrap";

const Ratings = ({ rgba, data1, data2, hasMore, fetchNextPage, pagingData1, pagingData2, isMore, fetchMorePage,
  meetLoader, ethicalloader, setLoading, meetSetLoading, deBoundeEthical,meetfetchLoader,loader,
  deBoundeMeet,ratingsDataSearch,virtuallyMetDataSearch,  isSearchEthical,isSearchMeet, closeMeetpopUp,closeEthicalPopup,meetSearchMore,ethicalSearchMore }) => {
  const [showEthical, setShowEthical] = useState(false);
  const [showMet, setShowMet] = useState(false);

  const ratingsContainerProps = {
    showEthical, showMet, data1, data2, pagingData1, pagingData2, setShowEthical,
    setShowMet, hasMore, isMore, fetchMorePage, fetchNextPage, meetLoader, ethicalloader,
     setLoading, meetSetLoading,deBoundeEthical,meetfetchLoader,loader,
     deBoundeMeet,ratingsDataSearch,virtuallyMetDataSearch,  isSearchEthical,isSearchMeet, closeMeetpopUp,closeEthicalPopup,meetSearchMore,ethicalSearchMore
  };

  const [logoLoader, setLogoLoader] = useState(true)
  return (
    <div className="ratings" style={{ background: `${rgba}` }}>
      <div className="circle-logo" style={{ background: `${rgba}` }}>
      <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'}/>
        <img src={star} alt="" className={logoLoader ? 'hide-img-loader' : 'show-img-loader'}  onLoad={()=>setLogoLoader(false)}/>
      </div>
      <div className="title-ratings">Ratings</div>
      <div className="desc-ratings" onClick={() => setShowEthical(true)}>
        <div className="ratings-count">{data1?.ethicalCodeYesCount}</div>
        <div className="ratings-desc">
          Say has ethical code of conduct and is safe to do business with
        </div>
      </div>
      <hr style={{margin:"14px 23px 24px 26px"}} />
      <div className="desc-ratings" onClick={() => setShowMet(true)}>
        <div className="ratings-count">{data2?.virtuallyMetYesCount}</div>
        <div className="ratings-desc">Have met In real life/Video call</div>
      </div>
      <RatingsContainer {...ratingsContainerProps} />
    </div>
  );
};

export default Ratings;
