import CheckMark from "../../../../../../assets/images/charm_tick.svg";

const ChatSentMetaData = ({ sentTimeimeStamp }) => {
  return (
    <div className="chat-meta-container">
      <span className="chat-sent-time">{sentTimeimeStamp}</span>
      <img className="chat-check-mark" src={CheckMark} alt="check" />
    </div>
  );
};

export default ChatSentMetaData;
