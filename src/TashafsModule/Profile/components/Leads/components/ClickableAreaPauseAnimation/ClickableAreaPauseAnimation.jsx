const ClickableAreaPauseAnimation = ({ setIsPaused }) => {
  return (
    <div
      className="clickable-area"
      onClick={() => setIsPaused((prevIsPaused) => !prevIsPaused)}
    ></div>
  );
};

export default ClickableAreaPauseAnimation;
