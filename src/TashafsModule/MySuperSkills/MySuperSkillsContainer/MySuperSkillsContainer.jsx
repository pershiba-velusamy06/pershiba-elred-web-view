import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { parseParagraphLead } from "../../../globalFunctions";
import ReactLinkify from "react-linkify";
import {imagesSkill} from '../MySuperSkillsData'
import ReactLinkifyComp from "../../Profile/components/ReactLinkifyComp/ReactLinkifyComp";


const MySuperSkillsContainer = ({ navigate, back, bg, question, answer, data, selected, setActive}) => {
  const [backLoader, setbackLoader] = useState(true);
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0; // Scroll to the top of the div
    }
  },[selected])

  return (
    <div className="mysuperskills">
      <div className="back-title">
        <span className="back-button" onClick={() => navigate(-1)}>
          <Spinner
            animation="border" variant="dark" size="sm"
            className={ backLoader ? "show-img-loader back-super-icon-spinner" : "hide-img-loader"}
          />
          <img src={back} alt="" className={!backLoader ? "show-img-loader" : "hide-img-loader"}
            onLoad={() => setbackLoader(false)} />
        </span>
        My super skills
      </div>
      <div className="display-screen"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagesSkill[bg]?.img})`}}>
        <div className="question">{question}</div>
        {answer ? <div className="answer" ref={divRef}>
        {/* <ReactLinkify
              componentDecorator={(decorateHref, decoratedText, key) => {
                const urlRegex = /^https?:\/\//;
                if (urlRegex.test(decorateHref)) {
                  const formattedLink = decorateHref.startsWith('https://')
                    ? decorateHref
                    : `https://${decorateHref.replace(urlRegex, '')}`;
                  return (
                    <a target="blank" href={formattedLink} key={key}>
                      {formattedLink}
                    </a>
                  );
                } else {
                  return (
                    <a target="blank" href={decorateHref} key={key}>
                      {decoratedText}
                    </a>
                  );
                }
              }}
            >
              {answer}
            </ReactLinkify> */}
            <ReactLinkifyComp data={answer}/>
            
          </div> : <div className="no-super-skill-answer">No answer added yet.</div>}
      </div>
      <div className="bottom-thumbnails">
        {data.map((item, id) => (
          <div className={ selected === item?._id ? `thumbnail-div${id} custom` : `thumbnail-div${id}`}
            style={{ backgroundImage: `url(${imagesSkill[id]?.img})` }}
            onClick={() => setActive(item, id)}
            key={id}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MySuperSkillsContainer;
