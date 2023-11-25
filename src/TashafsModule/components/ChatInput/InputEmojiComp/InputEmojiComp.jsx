import React from 'react'
import { Spinner } from 'react-bootstrap'

const InputEmojiComp = ({openEmoji, isMobile, smileyLoader, emoji, openEmojiAtPosition, setopenEmoji, setCurrentPosition, setSmileyLoader,
    closeIcon, onKeyDownHandler, sendMessageFromInputProps, value, inputRef, inputHandlerChatProps, sendOverlay, setCurrentPosval, onChange
}) => {
  return (
    <div className="input_emoji">
            {!openEmoji && !isMobile ? (
              <>
              <Spinner animation="border" variant="dark" size="sm" className={smileyLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} style={{width:'21px', height:'19px'}}/>
              <img className={!smileyLoader?"smile-img":"hide-img-loader"} src={emoji} alt="" onClick={() => openEmojiAtPosition(setopenEmoji, setCurrentPosition, "needs-text")} onLoad={()=>setSmileyLoader(false)}/>
              </>
            ) : !isMobile && (
              <img
                className="close-img"
                src={closeIcon}
                alt=""
                onClick={() => setopenEmoji(!openEmoji)}
              />
            )}
            <textarea
             onKeyDown={(e)=>onKeyDownHandler(e,inputHandlerChatProps,setCurrentPosition)}
              type="text"
              id="needs-text"
              placeholder="Type here..."
              value={value}
              ref={inputRef}
              onChange={(e) => onChange(e.target.value, inputHandlerChatProps,setCurrentPosition)}

              disabled={sendOverlay}
              onClick={() => setCurrentPosval(openEmoji,setopenEmoji,setCurrentPosition,"needs-text")}
              autoComplete="off"
              className={!isMobile ? "withemoji" : "withoutemoji"} 
            />
          </div>
  )
}

export default InputEmojiComp
