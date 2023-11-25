import { useState, useEffect } from "react";
import useAwardsSearch from "./useAwardSearch";
import _ from "lodash";
import axios from "axios";

const useFetchAwardsPagination = (userCode, isLive, productionUrl) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true)
  const[paginateLoader,setPaginateLoader] =useState(true)
  const[awardsCount,setAwardsCount]=useState(true)
  const fetchAwards = (p) => {
    const start = p ? p : page;

    axios
      .post(
        `${
          isLive ? productionUrl : ""
        }/noSessionPreviewAwards?userCode=${userCode}&start=${start}&offset=10`
      )
      .then((res) => {
        if (start === 1) {
          setData(res?.data?.result);
        } else {
          setData((prev) => [...prev, ...res?.data?.result]);
        }
        setHasMore(res.data.result.length < 10 ? false : true);
        setAwardsCount(res.data.totalAwardsCount);
        setPage(page + 10);
        setLoading(false);
        setPaginateLoader(false);
      });
  };

  const fetchMoreData = () => {
    if(awardsCount!==data.length){
      setPaginateLoader(true)
      debounceAllCall();
    }
  
  };

  const debounceAllCall = _.debounce(() => {
    fetchAwards();
  }, 500);

  useEffect(() => {
    fetchAwards()
  }, [userCode, isLive, productionUrl]);

  return {
    data,
    hasMore,
    fetchAwards,
    setData,
    page,
    setLoading,
    loading,
    fetchMoreData,
    paginateLoader,
  };
};

export default useFetchAwardsPagination;
