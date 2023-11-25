import React from "react";
import "./skillcard.scss";
import pattern from "../../../assets/images/redframe.png";
import {
  parseParagraph,
  parseParagraphLead,
  parseText,
} from "../../../globalFunctions";
import ReactLinkify from "react-linkify";
import ReactLinkifyComp from "../../Profile/components/ReactLinkifyComp/ReactLinkifyComp";

const SkillCard = ({ title, data, skills, superSkills, key }) => {
  const skillValues = skills ? data?.map((skill) => skill?.value) : "";
  const displaySkills = skills ? skillValues?.join(" | ") : "";

  return (
    <div className="skillcard" id={key}>
      <div className="heading" style={{ backgroundImage: `url(${pattern})` }}>
        {title}
      </div>
      <div className="description">
        {data?.length == 0 ? (
          <div className="no-answer-added">No Answer Added.</div>
        ) : skills ? (
          // ? displaySkills : superSkills && <div className="text-description">{parseText(data)}</div>}
          displaySkills
        ) : (
          superSkills && (
            <div className="text-description">
              {/* <ReactLinkify
                    componentDecorator={(decorateHref, decoratedText, key) => (
                      <a target="blank" href={decorateHref} key={key}>
                        {decoratedText}
                      </a>
                    )}
                  >
                    {data.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </ReactLinkify> */}
              <ReactLinkifyComp
                data={data.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillCard;
