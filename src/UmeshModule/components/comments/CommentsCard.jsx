import "./index.scss";
import BtnShowMore from "./BtnShowMore";
import ReplyCommentCard from "./ReplyCommentCard";
import CommentsHead from "./CommentsHead";

function CommentsCard(props) {
  const {  item,color,onClikShowMore,index,showMoreReplies,className,onCommentsClick, setShowVerifiedPopup } = props

  const onClickShowMoreReplies = (index, type) => {
    if (item.repliesCount.lenght >= item.replies.lenght) {
    } else {
      if (showMoreReplies) {
        showMoreReplies(index, item.commentId);
      }
    }
    if (type !== "showmore") {
      onClikShowMore(index, item.showReplies);
    }
  };

  return (
    <>
      <CommentsHead item={item} onCommentsClick={onCommentsClick} className={className} color={color} setShowVerifiedPopup={setShowVerifiedPopup}/>

      <div className="view-replies-container">
        {item.showReplies
          ? item.replies.map((item, i) => {
              return (
                <ReplyCommentCard
                  item={item}
                  onCommentsClick={onCommentsClick}
                  className={className}
                  color={color}
                  key={`rep-${i}-${index}`}
                  setShowVerifiedPopup={setShowVerifiedPopup}
                />
              );
            })
          : null}
      </div>
      
      <BtnShowMore repliesCount={item.repliesCount} onClickShowMoreReplies={onClickShowMoreReplies} replies={item.replies} color={color} index={index} showReplies={item.showReplies} />
    </>
  );
}

export default CommentsCard;
