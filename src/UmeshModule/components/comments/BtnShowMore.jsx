import line from "../../../assets/images/Line 35.svg";
function BtnShowMore({
  repliesCount,
  onClickShowMoreReplies,
  replies,
  color,
  index,
  showReplies,
}) {
  return (
    <>
      {showReplies && repliesCount > replies.length ? (
        <div
          className="view-more-replies d-flex align-items-center"
          onClick={(e) => {
            e.stopPropagation();
            onClickShowMoreReplies(index, "showmore");
          }}
        >
          {color ? (
            <div
              className="comment-line"
              style={{ backgroundColor: color ? color : "#00000099" }}
            />
          ) : (
            <img className="line_horizontal" src={line} alt="" />
          )}
          <span
            className="text_view_more"
            style={{ color: color ? color : "#00000099" }}
          >
            View more replies
          </span>
        </div>
      ) : null}
      {repliesCount > 0 ? (
        <div className="view-more-replies d-flex align-items-center">
          {color ? (
            <div
              className="comment-line"
              style={{ backgroundColor: color ? color : "#00000099" }}
            />
          ) : (
            <img className="line_horizontal" src={line} alt="" />
          )}
          <span
            className="text_view_more"
            onClick={(e) => {
              e.stopPropagation();
              onClickShowMoreReplies(index);
            }}
            style={{ color: color ? color : "#00000099" }}
          >
            {showReplies && repliesCount !== replies.lenght
              ? "Hide replies"
              : `View ${repliesCount} more replies`}
          </span>
        </div>
      ) : null}
    </>
  );
}
export default BtnShowMore;
