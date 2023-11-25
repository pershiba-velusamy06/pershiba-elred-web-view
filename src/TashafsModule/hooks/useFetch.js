import { useState, useEffect } from "react";
import axios from "axios";
import instance from "../helpers/axios";
import { convertToRgbColor } from "../../globalFunctions";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState(null);
  const [opacity, setOpacity] = useState(null);
  const rgba = `rgba(${color?.[0]},${color?.[1]},${color?.[2]},${opacity}%)`;
  const [tint, setTint] = useState(false);
  const [designTypeC, setDesignType] = useState("");
  const [secondaryColor, setSecondaryColor] = useState(null);
  const [baseColor, setBaseColor] = useState(null);
  const [primaryColor, setPrimaryColor] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [superSkillsIcon, setSuperSkillsIcon] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(url, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
        setData(response.data);
        setOpacity(
          response?.data?.result?.[0]?.profileDesignInfo?.opacity?.secondary
        );
        setColor(
          convertToRgbColor(
            response?.data?.result?.[0]?.profileDesignInfo?.secondaryColor
          )
        );
        setSecondaryColor(
          response?.data?.result?.[0]?.profileDesignInfo?.secondaryColor
        );
        setTint(response?.data?.result?.[0]?.profileDesignInfo?.tint);
        setDesignType(
          response?.data?.result?.[0]?.profileDesignInfo?.designType
        );
        setBaseColor(response?.data?.result?.[0]?.profileDesignInfo?.baseColor);
        setPrimaryColor(
          response?.data?.result?.[0]?.profileDesignInfo?.primaryColor
        );
        setTextColor(response?.data?.result?.[0]?.profileDesignInfo?.textColor);
        setSuperSkillsIcon(response?.data?.result?.[0]?.superSkillsIconURL);


      } catch (error) {
        setError(true);
        setIsSuccess(error?.response?.data?.success);
        // navigate('/page-not-found')
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true)
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
    rgba,
    tint,
    designTypeC,
    secondaryColor,
    baseColor,
    primaryColor,
    textColor,
    isSuccess,
    superSkillsIcon,
  };
};

export default useFetch;
