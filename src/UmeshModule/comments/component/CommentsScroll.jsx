import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentsCard from "../../components/comments/CommentsCard";
import CommentsShimmer from "../../components/shimmer/CommentsShimmer";
import RedLoader from "../../../TashafsModule/Profile/components/RedLoader/RedLoader";
import AadhaarVerifiedPopup from "../../../TashafsModule/Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup";

function CommentsScroll({
  hasMore,
  data,
  getData,
  loading,
  showMoreReplies,
  onClikShowMore,
  showVerifiedPopup,
  setShowVerifiedPopup
}) {
  return (
    <>
    <div id="comments-body" className="comments-body">
      <InfiniteScroll
        dataLength={data?.length}
        next={getData}
        style={{ overflow: "hidden" }}
        scrollableTarget="comments-body"
        hasMore={hasMore}
      >
        {loading ? (
          <CommentsShimmer />
        ) : !data.length ? (
          <div className="no-comments" style={{ color: "#00000099" }}>
            No Comments Available Yet
          </div>
        ) : (
          data.map((item, index) => {
            return (
              <CommentsCard
                key={`comment-${index}`}
                item={item}
                index={index}
                showMoreReplies={showMoreReplies}
                onClikShowMore={onClikShowMore}
                setShowVerifiedPopup={setShowVerifiedPopup}
              />
            );
          })
        )}
        {hasMore  ? <RedLoader /> : null}
      </InfiniteScroll>
    </div>
    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
    </>
  );
}

export default CommentsScroll;
