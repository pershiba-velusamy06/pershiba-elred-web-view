import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSkills = (isLive, productionUrl, userCode) => {
  const [skills, setSkills] = useState(null);
  const [skillsLoader, setSkillsLoader] = useState(false);

  useEffect(() => {
    setSkillsLoader(true);
    axios
      .post(
        `${isLive ? productionUrl : ''
        }/noSessionViewMyBioSkills?userCode=${userCode}`
      )
      .then((res) => {
        setSkills(res?.data?.result?.[0]);
        setSkillsLoader(false);
      })
      .catch((error) => {
        //console.log(error);
        setSkillsLoader(false);
      });
  }, [isLive, productionUrl, userCode]);

  return { skills, skillsLoader };
};

// Example usage:
// const { skills, skillsLoader } = useFetchSkills(true, 'https://production-url.com', 'user123');

export default useFetchSkills;
