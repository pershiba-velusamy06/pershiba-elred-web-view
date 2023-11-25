import React, { useState } from "react";
import "./ratingspopup.scss";
import borderLine from "../../../../../assets/images/line.svg";
import NoRatingsDisplay from "../NoRatingsDisplay/NoRatingsDisplay";
import RatingsPopupSearchbar from "./RatingsPopupSearchbar/RatingsPopupSearchbar";
import RatingsPopupData from "./RatingsPopupData/RatingsPopupData";
import NoSearchRatings from '../NoSearchRatings/NoSearchRatings'
import RedLoader from '../../RedLoader/RedLoader'
const RatingsPopUp = ({ count, closeBtn, close, msg, data, more, fetchMoreData, searchHandler, setLoading, loading, type, isSearch,loader,closePopUp,searchMore }) => {

  const [searchText, setSearchText] = useState("")
 
  return (
    <div className="ratings-popup">
      <RatingsPopupSearchbar close={close} closeBtn={closeBtn} count={count} msg={msg} closePopUp={closePopUp}
        borderLine={borderLine} searchHandler={searchHandler} setLoading={setLoading} loading={loading} type={type} searchText={searchText} setSearchText={setSearchText} />

      {count == 0 ?
        <NoRatingsDisplay /> : count !== 0 && isSearch && data.length === 0 ? (<>
          <NoSearchRatings />
        </>) : loading  ? <>
          <div className="loader-margin-ratings">
            <RedLoader />
          </div>

        </> :
          <RatingsPopupData data={data} fetchMoreData={fetchMoreData} more={more}  loader={loader}searchMore={searchMore} />
      }
    </div>
  );
};

export default RatingsPopUp;
