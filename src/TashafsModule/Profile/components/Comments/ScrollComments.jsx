import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentsCard from "../../../../UmeshModule/components/comments/CommentsCard";
import RedLoader from "../RedLoader/RedLoader";
import { getCurrentTime } from "../../../../globalFunctions";
import { useNavigate } from "react-router-dom";

function ScrollComments({
  data,
  getData,
  hasMore,
  onClikShowMore,
  showMoreReplies,
  userCode,
  setShowVerifiedPopup
}) {
  const navigate = useNavigate();
  return (
    <InfiniteScroll
      dataLength={data?.length}
      next={getData}
      style={{ overflow: "hidden" }}
      scrollableTarget="comments_horizontals_container"
      hasMore={hasMore}
    >
      <div className="comment_list">
        {data?.map((item, index) => {
          return (
            <CommentsCard
              className={"text-overflow"}
              onClikShowMore={onClikShowMore}
              showMoreReplies={showMoreReplies}
              key={index}
              item={item}
              index={index}
              color={"#fff"}
              onCommentsClick={() => {
                navigate(
                  `/comments?userCode=${userCode}&t=${getCurrentTime()}`
                );
              }}
              setShowVerifiedPopup={setShowVerifiedPopup}
            />
          );
        })}
      </div>
      {hasMore ? <RedLoader /> : null}
    </InfiniteScroll>
  );
}

export default ScrollComments;
