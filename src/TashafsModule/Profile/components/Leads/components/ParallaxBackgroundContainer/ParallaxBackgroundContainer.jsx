import { useEffect } from "react";
import { pausePlayAnimation, updateProgress } from "../SliderContainer/apiServices/SliderFunction";
import NoLeadImage from '../../../../../../assets/images/leads-no-img-background.png'

const ParallaxBackgroundContainer = ({data,currentIndex,setCurrentIndex,children,isPaused,setCurrentImageIndex,
  remainingTime,lastPausedTimestamp,setLastPausedTimestamp,setRemainingTime, setProgress,progress,currentImageIndex,
  scrollDivRef, setScrollPosition
}) => {

  useEffect(() => {
    return pausePlayAnimation({ isPaused, currentIndex, data, setCurrentIndex, setCurrentImageIndex, 
      updateProgress, setRemainingTime, lastPausedTimestamp, setLastPausedTimestamp, setProgress, progress, remainingTime,
      scrollDivRef, setScrollPosition });
  }, [isPaused, currentIndex, lastPausedTimestamp, data]);  
  
  return (
    <>
      <div key={`${currentIndex}_${currentImageIndex}`} className={data?.backgroundImages?.length === 0 ?  
        "defaultImage" : "containerrespondingleads "}
        style={{
          backgroundImage:  data?.backgroundImages?.length === 0 ?  `url(${NoLeadImage})` : 
          `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data?.backgroundImages[currentIndex]})`,
          animationPlayState: `${isPaused ? "paused" : ""}`}}
      >
        {children}
      </div>
    </>
  );
};

export default ParallaxBackgroundContainer;
