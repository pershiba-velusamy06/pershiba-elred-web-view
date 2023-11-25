import React, { useState } from "react";
import Header from "../../components/header/Header";
import { useSearchParams } from "react-router-dom";
import "../testimonal.scss";
import SearchBar from "../../search/SearchBar";
import { useSearchResult } from "../../hooks/useSearchResult";
import SearchScroll from "./component/SearchScroll";

function SearchTestimonials({ isLive, productionUrl }) {
  let [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const userCode = searchParams.get("userCode");
  const {
    data,
    loading,
    searchResultFound,
    hasMore,
    getData,
  } = useSearchResult(
    `${isLive ? productionUrl : ""}/noSessionPreviewTestimonials`
  );

  return (
    <div className="search_test_container">
      <Header>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          loading={loading}
          onSearch={getData}
          placeholder={"Search Name/Keyword/Date/Title"}
        />
      </Header>
      <div className="search-rel-container">
        <SearchScroll
          loading={loading}
          searchResultFound={searchResultFound}
          data={data}
          className={"search_result_bg"}
          userCode={userCode}
          hasMore={hasMore}
          getData={getData}
          searchText={searchText}
        />
      </div>
    </div>
  );
}
export default SearchTestimonials;
