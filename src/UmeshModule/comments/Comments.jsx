import React, { useEffect } from "react";
import Header from "../components/header/Header";
import "./comments.scss";
import { useCommentPagination } from "./api/useCommentPagination";
import CommentsScroll from "./component/CommentsScroll";

function Comments({ productionUrl, isLive, showVerifiedPopup, setShowVerifiedPopup }) {
  const {
    data,
    setData,
    loading,
    setLoading,
    hasMore,
    getData,
    showMoreReplies,
  } = useCommentPagination(
    `${isLive ? productionUrl : ""}/noSessionPreviewComments?`,
    `${isLive ? productionUrl : ""}/noSessionPreviewReplies`
  );

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const onClikShowMore = (index, status) => {
    const arr = [...data];
    const d = arr[index];
    d.showReplies = !status;
    setData([...arr]);
  };
  return (
    <div>
      <Header title={"Comments"} />
      <CommentsScroll
        hasMore={hasMore}
        data={data}
        getData={getData}
        loading={loading}
        showMoreReplies={showMoreReplies}
        onClikShowMore={onClikShowMore}
        showVerifiedPopup={showVerifiedPopup}
        setShowVerifiedPopup={setShowVerifiedPopup}
      />
    </div>
  );
}

export default Comments;
