import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { getRandomColor, gradientSolidColors } from "../../globalFunctions";

export const useSearchResult = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [searchResultFound, setSearchResultFound] = useState(true);
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  useEffect(() => {
    // getData("");
  }, []);

  const getData = (searchKey, count) => {
    !searchResultFound && setSearchResultFound(true);
    const start = count ? count : page * 10 + 1;
    if (start === 1) {
      setLoading(true);
    }
    // alert(start);
    axios
      .post(
        `${url}?userCode=${userCode}&start=${start}&offset=10&searchKey=${searchKey}`
      )
      .then((resp) => {
        const d = resp?.data?.result?.map((item) => {
          const overlayColor = getRandomColor(gradientSolidColors);
          return {
            ...item,
            overlayColor: overlayColor[1],
          };
        });
        try {
          if (resp?.data?.result?.length === 0) {
            setSearchResultFound(false);
          } else {
            if (start === 1) {
              // Check if the IDs in the API response are different from the current state
              const areAllIdsEqual = data.every((item) => {
                return d.some(
                  (existingItem) =>
                    existingItem.testimonialId === item.testimonialId
                );
              });


              if (!areAllIdsEqual || data.length !== d.length) {
                setData(d); // Update the state if any ID is different
              }
            } else {
              setData([...data, ...d]);
            }
          }
          if (resp?.data?.result?.length < 10) {
            setHasMore(false); // No more data to fetch
          } else {
            setHasMore(true);
          }
        } catch (error) {
          //console.log(error);
        }
        const p = count ? count : page + 1;
        setPage(p);
        setLoading(false);
      })
      .catch((error) => {
        setData([]);
        setHasMore(false);
        setSearchResultFound(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    setData,
    loading,
    page,
    setSearchResultFound,
    searchResultFound,
    setPage,
    setLoading,
    hasMore,
    setHasMore,
    getData,
  };
};
