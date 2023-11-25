import React, { useEffect, useState } from "react";
import "./mysuperskills.scss";
import back from "../../assets/images/backpage.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import MySuperSkillsShimmer from "./MySuperSkillsShimmer/MySuperSkillsShimmer";
import useSuperSkills from "./apiServices/useSuperSkills";
import MySuperSkillsContainer from "./MySuperSkillsContainer/MySuperSkillsContainer";

const MySuperSkills = ({ isLive, productionUrl }) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const { isLoading, data, bg, question, answer, selected, fetchSkills, setBg,
    setQuestion, setAnswer, setSelected } = useSuperSkills(userCode, isLive, productionUrl);

  const setActive = (data, bgIndex) => {
    // setBg(data.bgImageURL);
    setBg(bgIndex)
    setQuestion(data.question);
    setAnswer(data.answer);
    setSelected(data._id);
  };
  
  return (
    <>
      {isLoading ?
        <MySuperSkillsShimmer color={"#CFD4DF"} /> :
        <MySuperSkillsContainer navigate={navigate} back={back} bg={bg} question={question}
          answer={answer} data={data} selected={selected} setActive={setActive} />}
    </>
  );
};

export default MySuperSkills;
