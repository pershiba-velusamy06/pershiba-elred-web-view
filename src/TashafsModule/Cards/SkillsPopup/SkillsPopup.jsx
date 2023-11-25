import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import close from '../../../assets/images/closeBg.svg'

const SkillsPopup = ({ setOpen, data }) => {
  const { attributes } = data;
  return (
    <>
      <div className="skill-title">
        <div className="title">Skills</div>
        <div className="close-btn">
          <img src={close} alt="" onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="mid_part_skill">
        <SkillCard
          title={"I am incredible at these skills / professionally great at "}
          data={data?.skills}
          skills={true}
        />
        <SkillCard
          title={"Hobbies I am passionate about"}
          data={data?.hobbies}
          skills={true}
        />
        <SkillCard
          title={"My favourite subjects are"}
          data={data?.subjects}
          skills={true}
        />
        <div className="superskill-title">My Super Skills</div>
        {attributes?.map((item, idx) => (
          <SkillCard title={item?.question} data={item?.answer} superSkills={true} key={idx}/>
        ))}
      </div>
    </>
  );
};

export default SkillsPopup;
