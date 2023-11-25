const ChatReceivedMetaData = ({ receiveTimeStamp }) => {
  return (
    <div className="received-chat-meta-container">
      <span className="received-chat-sent-time">{receiveTimeStamp}</span>
    </div>
  );
};

export default ChatReceivedMetaData;
