
import { useState, useEffect } from "react";
import axios from "axios";

const useSimpleFetch = (url, itemsPerPage = 10) => {
  const [data, setData] = useState([]);
  const [wholeData,setWholeData] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(url, {
          params: {
            start: currentPage,
            offset: itemsPerPage
          }
        });
        const newData = response.data.result;
        setWholeData(response.data)
        setData((prevData) => [...prevData, ...newData]);
        setHasMore(newData.length === itemsPerPage);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, currentPage, itemsPerPage]);

  const fetchNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return {
    data,
    error,
    isLoading,
    hasMore,
    fetchNextPage,
    wholeData
  };
};

export default useSimpleFetch;



