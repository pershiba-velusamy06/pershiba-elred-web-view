import React, { useEffect } from "react";
import "./comments.scss";
import { useSearchParams } from "react-router-dom";
import { useCommentPagination } from "../../../../UmeshModule/comments/api/useCommentPagination";
import ScrollComments from "./ScrollComments";
import CardHeader from "./CardHeader";
import CommentsShimmer from "../../../../UmeshModule/components/shimmer/CommentsShimmer";

const Comments = ({ productionUrl, isLive, rgba, setShowVerifiedPopup }) => {
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
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
    <div style={{ backgroundColor: rgba }} className="comments-section ">
      <CardHeader loading={loading} data={data} userCode={userCode} />
      {loading ? (
        <CommentsShimmer
          profile={true}
          className="shimmer_container"
          color="#e7e9ef"
        />
      ) : data?.length ? (
        <div
        id="comments_horizontals_container"
        className="comments-hor-container"
      >
        <ScrollComments
          data={data}
          getData={getData}
          hasMore={hasMore}
          loading={loading}
          onClikShowMore={onClikShowMore}
          showMoreReplies={showMoreReplies}
          userCode={userCode}
          setShowVerifiedPopup={setShowVerifiedPopup}
        />
      </div>
      ) : (
        <div className="no-comment">No Comments Available Yet </div>
      )}
    </div>
  );
};
export default Comments;
