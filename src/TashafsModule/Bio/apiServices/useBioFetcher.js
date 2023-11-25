import { useState, useEffect } from 'react';
import axios from 'axios';

const useBioFetcher = (isLive, productionUrl, userCode) => {
  const [bio, setBio] = useState(null);
  const [aboutLoader, setAboutLoader] = useState(false);

  const fetchBio = () => {
    setAboutLoader(true);
    axios
      .post(
        `${isLive ? productionUrl : ''}/noSessionViewMyBio?userCode=${userCode}`
      )
      .then((res) => {
        setBio(res?.data?.result?.[0]);
        setAboutLoader(false);
      });
  };

  useEffect(() => {
    fetchBio();
  }, [isLive, productionUrl, userCode]);

  return {
    bio,
    aboutLoader,
    fetchBio,
  };
};

export default useBioFetcher;
