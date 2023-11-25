import React from 'react';
import './SliderContainer.scss'
import { handlePreviousImage, handleNextImage } from './apiServices/SliderFunction'


const SliderContainer = ({ data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress,manual, setManual, progress, setRemainingTime, 
    remainingTimeProgress, setRemainingTimeProgress,scrollDivRef, setScrollPosition }) => {

    return (
        <div>
            <div className="left-container" 
            onClick={() => {handlePreviousImage(data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex,
             setProgress, manual, setManual, progress, setRemainingTime, remainingTimeProgress, setRemainingTimeProgress);  
             setScrollPosition(scrollDivRef.current.scrollTop)}} />
            <div className="right-container" onClick={() => {handleNextImage(data, isPaused, setIsPaused, currentIndex, setCurrentIndex, setCurrentImageIndex, setProgress, manual, setManual, progress, 
                setRemainingTime, remainingTimeProgress, setRemainingTimeProgress) ; setScrollPosition(scrollDivRef.current.scrollTop)}} />
        </div>
    )
}
export default SliderContainer;