import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const useCommentPagination = (url, replyUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const getData = () => {
    const start = page * 10 + 1;
    const body = { profileOwner_usercode: userCode };

    if(start !== 1){
      setHasMore(true)
    }
    axios
      .post(`${url}?userCode=${userCode}&startComment=${start}&offset=10`, body)
      .then((resp) => {
        let d = [...data];
        if (start === 1) {
          d = [...resp?.data?.result?.[0]?.comments];
          d = d?.map((item) => {
            return { ...item, showReplies: false };
          });
        } else {
          setHasMore(true);
          const comments = resp?.data?.result?.[0]?.comments?.map((item) => {
            return { ...item, showReplies: false };
          });
          d = [...d, ...comments];
        }
        if (resp?.data?.result?.[0]?.comments?.length < 10) {
          setHasMore(false); // No more data to fetch
        } else {
          setHasMore(true);
        }
        setData(d);
        const p = page + 1;
        setPage(p);
      })
      .catch(() => {
        setHasMore(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showMoreReplies = (index, commentId) => {
    const arr = [...data];
    let d = arr[index];
    const total = d.repliesCount;
    const start = d.replies.length + 1;

    if (start !== total + 1) {
      const url = `${replyUrl}?&startReply=${start}&offset=10`;

      const body = { profileOwner_usercode: userCode, commentId: commentId };
      axios
        .post(url, body)
        .then((resp) => {
          if (resp?.data?.result) {
            d.replies = [
              ...d.replies,
              ...(resp?.data?.result[0]?.replies ?? []),
            ];

            setData([...arr]);
          }
        })
        .catch(() => {})
        .finally(() => {});
    }
  };

  return {
    data,
    setData,
    loading,
    page,
    setPage,
    setLoading,
    hasMore,
    setHasMore,
    getData,
    showMoreReplies,
  };
};
