import axios from "axios";
import moment from "moment";
import _ from "lodash";
import { Link } from "react-router-dom";
import { handleChange } from "./TashafsModule/Bio/bioGlobalFunctions";
import toast, { toastConfig } from "react-simple-toasts";

export function convertToRgbColor(hexNumber) {
  // Convert the hex number to a string and remove leading zeros
  const hexString = String(hexNumber).replace(/^0+/, "");

  // Pad the hex string with zeros if it's less than 6 characters
  const paddedHexString = hexString.padStart(6, "0");

  // Extract the R, G, B components from the hex string
  const r = parseInt(paddedHexString.substr(0, 2), 16);
  const g = parseInt(paddedHexString.substr(2, 2), 16);
  const b = parseInt(paddedHexString.substr(4, 2), 16);

  // Return the RGB color as a string
  return [r, g, b];
}

export function formatCommentTimestamp(timestamp) {
  const currentDate = new Date();
  const commentDate = new Date(timestamp);
  const timeDifferenceInSeconds = Math.floor(
    (currentDate - commentDate) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} s`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} m`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} h`;
  } else if (timeDifferenceInSeconds < 2592000) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} d`;
  } else if (timeDifferenceInSeconds < 31104000) {
    const months = Math.floor(timeDifferenceInSeconds / 2592000);
    return `${months} mon`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / 31104000);
    return `${years} yr`;
  }
}

export const gradientColors = [
  ["rgba(0,0,0,0)", "rgba(0,73,89,1)"],
  ["rgba(0,0,0,0)", "rgba(141,105,57,1)"],
  ["rgba(0,0,0,0)", "rgba(201,104,98,1)"],
  ["rgba(0,0,0,0)", "rgba(162,98,201,1)"],
  ["rgba(0,0,0,0)", "rgba(98,201,158,1)"],
  ["rgba(0,0,0,0)", "rgba(139,1,35,1)"],
];

export const gradientSolidColors = [
  ["rgba(255,152,178,1)", "rgba(139,1,35,1)"],
  ["rgba(84,224,255,1)", "rgba(0,73,89,1)"],
  ["rgba(255,224,182,1)", "rgba(173,109,23,1)"],
  ["rgba(123,240,191,1)", "rgba(98,201,158,1)"],
  ["rgba(255,198,195,1)", "rgba(201,104,98,1)"],
  ["rgba(216,152,255,1)", "rgba(162,98,201,1)"],
];

export const getRandomColor = (colors) =>
  colors[Math.floor(Math.random() * colors.length)];

export function isProductionEnvironment() {
  return false;
}

export function getUserCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("userCode");

  return myParam;
}

export const shareURL = "https://test.elred.io/shareProfile";

export const getCurrentTime = () => {
  const currentDate = new Date();
  const currentTimeInSeconds = Math.floor(currentDate.getTime() / 1000);
  return currentTimeInSeconds;
};

// export const onProfileClick = (e, userCode) => {
//   const url = `${shareURL}/?userCode=${userCode}&t=${getCurrentTime()}`;
//   window.open(url, "_blank");
//   e.stopPropagation();
// };

export function colorMatrixToRGBA(colorMatrix) {
  // Extract the individual values from the color matrix
  const [r, g, b, a] = colorMatrix.slice(0, 4);

  // Calculate the RGBA values
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  const alpha = Math.round(a * 255);

  // Construct the RGBA string
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`;

  return rgba;
}

// export const handleMapClick = (lat, lon) => {
//   const url = `https://www.google.com/maps/search/${lat},${lon}`;
//   window.open(url, "_blank");
// };

export const handleMapClick = (lat, lon) => {
  // Check if the user agent indicates an iOS device
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    // Open the location in the default Apple Maps app
    const url = `http://maps.apple.com/maps?q=${lat},${lon}`;
    window.open(url, "_blank");
  } else {
    // Open the location in Google Maps for other devices
    const url = `https://www.google.com/maps/search/${lat},${lon}`;
    window.open(url, "_blank");
  }
};


export const handleShare = (data) => {
  const time = new Date().getTime().toString().slice(-6);

  (async () => {
    if (navigator.share) {

      const date = new Date()
      const currentDate = moment(date).format("ddd, DD MMM YYYY")
      try {
        await navigator.share({
          text: `${currentDate}\nHello, \nI would need help with the following Lead. It's important. Will be great if you can response.\n`,
          url: data?.cardInfo?.[0]?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {
      }
    } else {
      toast('Web share not supported by MacOS Chrome')
    }
  })();
};


export const handleShareProfile = (data) => {
  const time = new Date().getTime().toString().slice(-6);

  (async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: `Hello, \n\nCheck out this personal card at elRed.\n\nURL:`,
          url: data?.cardInfo?.[0]?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {
      }
    } else {
      toast('Web share not supported by MacOS Chrome')
    }
  })(); // Add parentheses here to call the function immediately
};

export const navigateToPath = (navigate, userCode, path) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?userCode=${userCode}&t=${time}`);
};

export const navigateToPathWithState = (
  navigate,
  userCode,
  path,
  navigateState
) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?userCode=${userCode}&t=${time}`, {
    state: navigateState,
  });
};

export const navigateToLeadsWithState = (
  navigate,
  userCode,
  leadId,
  path,
  navigateState,
  setFormData, e
) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    website1: '',
    website2: '',
    contact_type: "whatsapp",
  });
  e.stopPropagation()
  const time = new Date().getTime().toString().slice(-6);
  navigate(`${path}?leadId=${leadId}&userCode=${userCode}&t=${time}`, {
    state: navigateState,
  });
};

// functions to format pricing in a price range
function formatPricing(minValue, maxValue, currency) {
  if (!maxValue && !minValue) {
    return "";
  }
  // let min = "";
  // let max = "";
  let min =
    currency === "₹"
      ? formatIndianCurrency(minValue)
      : formatInternationalCurrency(minValue);
  let max =
    currency === "₹"
      ? formatIndianCurrency(maxValue)
      : formatInternationalCurrency(maxValue);
  let pricingData;
  if (maxValue === "") {
    pricingData = min;
  } else if (minValue === "") {
    pricingData = max;
  } else {
    const showDash = min !== "" && max !== "" ? "-" : "";
    pricingData = `${min} ${showDash} ${max}`;
  }

  return pricingData;
}

const formatIndianCurrency = (value) => {
  const format = IndianCountFormat.find((format) => value < format.limit);
  value = (1000 * value) / format.divident;
  value = Math.round(value * 10) / 10;
  //if (value.toString().length > 4)
  value = Math.round(value);
  return value + format.letter;
};

function formatInternationalCurrency(value) {
  const format = internationalCountFormat.find(
    (format) => value < format.limit
  );
  value = (1000 * value) / format.divident;
  value = Math.round(value * 10) / 10;
  // if (value.toString().length > 4)
  value = Math.round(value);
  return value + format.letter;
}

const IndianCountFormat = [
  {
    letter: "",
    limit: 1000,
    divident: 1000,
  },
  {
    letter: "K",
    limit: 100000,
    divident: 1000000,
  },

  {
    letter: "L",
    limit: 10000000,
    divident: 100000000,
  },
  {
    letter: "C",
    limit: Infinity,
    divident: 10000000000,
  },
];
const internationalCountFormat = [
  {
    letter: "",
    limit: 1e3,
    divident: 1000,
  },
  {
    letter: "K",
    limit: 1e5,
    divident: 1000000,
  },

  {
    letter: "M",
    limit: 1e9,
    divident: 1000000000,
  },
  {
    letter: "B",
    limit: 1e12,
    divident: 1000000000000,
  },
];

export { formatPricing, formatIndianCurrency, formatInternationalCurrency };

// reset otp for EnterOTP.jsx
export const handleResetOtp = (props) => {
  const {
    setStartTimer,
    resetTimer,
    setReqOtp,
    setIncorrectOtp,
    setOtp,
    isLive,
    productionUrl,
    data,
    toast,
    setTrn,
  } = props;
  setStartTimer(true);
  resetTimer();
  setReqOtp(false);
  setIncorrectOtp(false);
  axios
    .post(`${isLive ? productionUrl : ""}/webViewSignUp`, {
      // axios.post(`${isLive ? productionUrl : ""}/webViewDummyFail`, {

      phoneNumber: data?.phoneNumber,
      hashId: "elRed",
    })
    .then((res) => {
      setTrn(res?.data?.result?.[0]?.transactionId);
    })
    .catch((err) => { });
};

// verify otp for EnterOTP.jsx
export const verifyOtp = (
  props,
  setFormData,
  setShow,
  setOwnNeed,
  setValidationError
) => {
  const {
    otp,
    data,
    setSending,
    isLive,
    productionUrl,
    needId,
    navigate,
    setIncorrectOtp,
    toast,
    trn,
    userCode,
    setOtp,
    setOtpError
  } = props;

  setValidationError(false);
  if (
    data?.contactMethod === "" ||
    data?.firstname?.trim() === "" ||
    data?.phoneNumber?.trim() === "" ||
    data?.responseDescription?.trim() === ""
  ) {
    setValidationError(true);
    toast("Crucial fields cannnot be empty", 2000);
    return;
  }

  const trimmedFirstname = capitalizeEachWord(data?.firstname?.trim());
  const trimmedLastname = capitalizeEachWord(data?.lastname?.trim());
  if (otp.length === 6) {
    if (data?.data?.responseDescription !== "") {

      let otpObject = {
        contactMethod: data?.contactMethod,
        phoneNumber: data?.phoneNumber,
        responseDescription: data?.responseDescription,
        socialMediaLinks: data?.socialMediaLinks,
        otp: otp,
        needId: needId,
        transactionId: trn,
        firstname: trimmedFirstname,
        lastname: trimmedLastname
      }
      setSending(true);
      axios
        .post(`${isLive ? productionUrl : ""}/webViewVerifyOtp`, otpObject)
        .then((res) => {
          localStorage.setItem("loggedInUserCode", res?.data?.userCode);
          const time = new Date().getTime().toString().slice(-6);
          localStorage.setItem(
            "accessToken",
            res?.data?.result?.[0]?.accessToken
          );
          navigate(
            `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
          );
          setFormData({
            message: "",
            f_name: "",
            l_name: "",
            phone_number: "",
            website1: '',
            website2: '',
            contact_type: "whatsapp",
          });
          setSending(false);
        })
        .catch((err) => {

          if (err?.response?.data?.errorCode === 5) {
            setIncorrectOtp(true);
            setOtp("");
            setSending(false);
            setOtpError('Invalid OTP entered')
          } else if (err?.response?.data?.errorCode === 8) {
            setIncorrectOtp(true);
            setOtp("");
            setSending(false);
            setOtpError('OTP expired')
          } else if (err?.response?.data?.errorCode === 2) {
            setShow(true);
            setSending(false);
          } else if (err?.response?.data?.errorCode === 3) {
            setOwnNeed(true);
          } else if (err?.response?.data?.errorCode === -1) {
            toast(
              "Something went wrong with backend. Please refresh page to continue"
            );
            setSending(false);
          }
        });
    } else {
      toast.error("Message should not be empty");
    }
  }
};

// clearing the global data
export const clearData = (setFormData) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    website1: '',
    website2: '',
    contact_type: "whatsapp",
  });
};

export const goHome = (navigate, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/?userCode=${userCode}&t=${time}`);
  // localStorage.setItem("accessToken","")
  // localStorage.setItem("loggedInUserCode","")
};
export const goToLeadsList = (navigate, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/my-bio/leads?userCode=${userCode}&t=${time}`);
  // localStorage.setItem("accessToken","")
  // localStorage.setItem("loggedInUserCode","")
};

export const downloadElred = (downloadUrl) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS) {
    // Redirect to the App Store URL for iOS
    window.open('https://apps.apple.com/us/app/instagram/id389801252');
  } else {
    // Redirect to the Play Store URL for Android
    window.open('https://play.google.com/store/apps/details?id=com.instagram.android');
  }

  // window.open(downloadUrl, "_blank");
};

//Fri, 18 Aug 2023
//D MMMM YYYY
export const byDate = (Conversation) => {
  let data = Conversation.reduce((obj, item) => {
    let date = moment(item.responseCreatedAt).format("ddd, DD MMM YYYY");
    let today = moment().format("ddd, DD MMM YYYY");
    let yesterDay = moment().subtract(1, "days").format("ddd, DD MMM YYYY");
    date = date === today ? "Today" : date === yesterDay ? "Yesterday" : date;
    if (obj[date]) {
      obj[date].push(item);

      return obj;
    }
    obj[date] = [{ ...item }];

    return obj;
  }, {});
  return data;
};

// PAGE REFRESH
export const reload = () => {
  window.location.reload();
};

export const naviagteToLeadOrNeeds = (
  needId,
  setFormData,
  navigate,
  userCode,
  leadId
) => {
  const time = new Date().getTime().toString().slice(-6);
  if (needId !== "") {
    // clearData(setFormData)
    navigate(
      `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
    );
  } else {
    // clearData(setFormData)
    navigate(
      `/my-bio/leads/leads-reply?leadId=${leadId}&userCode=${userCode}&t=${time}`
    );
  }
};

export const ScrollToTop = _.debounce((id, responseId) => {
  const responseIdDiv = document.getElementById(responseId)
  responseIdDiv.scrollIntoView({ behavior: "auto", block: 'start' })
}, 100)



export const handleEnable = (
  idx,
  setEnable,
  enable,
  setOverLay,
  selectedChat,
  setTopOverLay,
  zChat
) => {
  setEnable(!enable);
  setOverLay(true);

  setTopOverLay(true);
  if (zChat !== "") {
    selectedChat("");
  } else {
    selectedChat(idx);
  }
};

export const OffLineRetry = (toast, setisOffline, setIsButton) => {
  if (!navigator.onLine) {
    toast("Still internet is not back!.");
    setIsButton(true);
    debouncebutton(setIsButton);
    // setTimeout(()=>{
    //   setIsButton(false)
    // },3000)
  } else {
    setisOffline(false);
    setIsButton(false);
  }
};
let debouncebutton = _.debounce((setIsButton) => {
  setIsButton(false);
}, 3000);

export const checkAccess = (setAccessEmpty, setAccessToken, setUser) => {
  if (localStorage.getItem("accessToken")) {
    if (localStorage.getItem("accessToken") === "") {
      setAccessEmpty(true);
    } else {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  } else {
    setAccessEmpty(true);
    localStorage.setItem("accessToken", "");
  }

  if (localStorage.getItem("loggedInUserCode")) {
    setUser(localStorage.getItem("loggedInUserCode"));
  } else {
    localStorage.setItem("loggedInUserCode", "");
  }
};

// CONTACT TYPE SELECTION
export const contactType = (setFormData, type, formData) => {
  setFormData({ ...formData, contact_type: type });
};

// GLOBAL FUNCTION FOR STRING CONVERSTION

// stringType: name, capitalize ()

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calcTextLength = (length, text, stringType) => {
  const firstLetter = text?.[0]?.toUpperCase() || "";
  const bodyLetter = text?.slice(1)?.toLowerCase() || "";
  const joinedText = firstLetter + bodyLetter;
  let finalText = "";

  if (stringType === "name") {
    const words = joinedText.split(" ");
    const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
    const string = titleCaseWords.join(" ");
    const finalLength = length + 1;
    if (string.length <= finalLength) {
      finalText = string;
    } else {
      finalText = string?.slice(0, finalLength - 1) + "...";
    }
  } else if (stringType === "capitalize") {
    if (joinedText?.length <= length) {
      finalText = joinedText;
    } else {
      finalText = joinedText?.slice(0, length) + "...";
    }
  } else {
    if (text?.length <= length) {
      finalText = text;
    } else {
      finalText = text?.slice(0, length) + "...";
    }
  }

  return finalText;
};

// export const needsCardName = (text)=>{
//   const firstLetter = text?.[0]?.toUpperCase() || '';
//   const bodyLetter = text?.slice(1)?.toLowerCase() || '';
//   const joinedText = firstLetter + bodyLetter;
//   let finalText = "";

//     const words = joinedText.split(" ");
//     const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
//     const string = titleCaseWords.join("");
//     if (string?.length <= length) {
//       finalText = string;
//     } else {
//       finalText = string?.slice(0, length-1) + "...";
// }}

export const capitalNames = (text) => {
  const textLower = text?.toLowerCase();

  const firstLetter = textLower?.[0]?.toUpperCase();
  const bodyLetter = textLower?.slice(1)?.toLowerCase();
  let joinedText = firstLetter + bodyLetter;

  const words = joinedText.split(" ");
  const titleCaseWords = words.map((word) => capitalizeFirstLetter(word));
  const string = titleCaseWords.join(" ");
  return string;
};

export const onEmojiClickvalue = (
  formData,
  currentPosition,
  value,
  setFormData,
  setopenEmoji,
  inputRef,
  id,
  setCurrentPosition,
  inputHandlerChatProps
) => {
  const { toaster, toast, setToaster } = inputHandlerChatProps;
  let formtext = formData.message + value;

  if (formtext.length > 500) {

    if (toaster === true) {
      toast("Oops! You have reached the maximum character limit.");
      setToaster(false);
      setTimeout(() => {
        setToaster(true);
      }, 3000);
    }
  } else {
    setFormData({ ...formData, message: formtext });
    inputRef.current.focus();
    setCurrentPosition(formtext.length);
  }
};

// function for making first letter capital only
// export const makeFirstCapital = (text) => {
//   let firstLetter = text?.[0].toUpperCase();
//   let body = text?.slice(1);
//   const final = firstLetter + body;
//   return final;
// };
export const makeFirstCapital = (text) => {
  if (!text) return ""; // Return empty string if text is falsy

  const words = text.split(" ");

  const processedWords = words.map((word) => {
    if (word.length === 0) return ""; // Handle empty words

    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase(); // Convert the rest to lowercase
    return firstLetter + restOfWord;
  });

  return processedWords.join(" ");
};

export const capitalizeNameString = (str) => {
  if (str) {
    const letter = str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });

    return letter;
  }

  return "";
};

// FUNCTION FOR BROWSER DETECT
export function getBrowserType() {
  const test = (regexp) => {
    return regexp.test(navigator.userAgent);
  };



  if (test(/opr\//i) || !!window.opr) {
    return "Opera";
  } else if (test(/edg/i)) {
    return "Microsoft Edge";
  } else if (test(/chrome|chromium|crios/i)) {
    return "Google Chrome";
  } else if (test(/firefox|fxios/i)) {
    return "Mozilla Firefox";
  } else if (test(/safari/i)) {
    return "Apple Safari";
  } else if (test(/trident/i)) {
    return "Microsoft Internet Explorer";
  } else if (test(/ucbrowser/i)) {
    return "UC Browser";
  } else if (test(/samsungbrowser/i)) {
    return "Samsung Browser";
  } else {
    return "Unknown browser";
  }
}

// function for making first letter capital and rest small
export const caps = (text) => {
  let firstLetter = text?.[0].toUpperCase();
  let body = text?.slice(1).toLowerCase();
  const final = firstLetter + body;
  return final;
};

export const preText = (text) => {
  // Use a regular expression to replace \n with actual line breaks
  return text.replace(/\n/g, "\n");
};

export function capitalizeEachWord(sentence) {
  // Convert the sentence to lowercase and split it into words
  const words = sentence.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back into a sentence
  return capitalizedWords.join(" ");
}

// GET THE URL EXTENSION FROM THIS FUNCTION
export function getFileExtension(url) {
  const parts = url.split(".");
  if (parts.length > 1) {
    return parts[parts.length - 1];
  }
  return null;
}

//TO MAKE THE TAPPABLE LINKS AND EMAIL IN MYSKILLS
export const parseParagraph = (text) => {

  const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

  // Split the text into words while preserving URLs and email addresses
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      return (
        <Link
          key={index}
          to={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {word}
        </Link>
      );
    } else if (emailRegex?.test(word)) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {word}
        </a>
      );
    }
    return word;
  });

  return parsedText;
};

export const parseParagraphLead = (text) => {
  if (!text) return null;

  const createLink = (url, content) => (
    <a onClick={(e) => e.stopPropagation()} key={url} href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );

  const words = text.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words.map((word, index) => {
    if (word.startsWith("http://") || word.startsWith("https://")) {
      return createLink(word, word);
    } else if (word.includes("@")) {
      return createLink(`mailto:${word}`, word);
    } else if (word.match(/^www\./)) {
      return createLink(`http://${word}`, word);
    }
    return word;
  });

  return parsedText;
};

export const handleNumberChange = (
  value,
  setPhoneError,
  formData,
  setFormData
) => {
  const modifiedValue = value?.replace(/[^\d+]/g, "");
  let truncatedValue = modifiedValue?.replace(/^0+/, "");

  if (truncatedValue?.startsWith("+91") && truncatedValue?.length > 12) {
    truncatedValue = truncatedValue?.slice(3);
  } else if (truncatedValue?.startsWith("91") && truncatedValue?.length >= 12) {
    truncatedValue = truncatedValue?.slice(2);
  }
  truncatedValue = truncatedValue?.slice(0, 10);
  handleChange(truncatedValue, setPhoneError, formData, setFormData);
};

export const handleChangeOTP = (value, setOtp) => {
  const updatedOTP = value?.replace(/\D/g, "");
  setOtp(updatedOTP);
};

export const handleInputBlur = (
  value,
  setFormData,
  phoneError,
  setPhoneError
) => {
  if (value.length < 10) {
    setPhoneError("Enter valid phone number");
  } else {
    setPhoneError("");
  }
};

// To open playstore
export const openPlaystore = () => {
  // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);   

  // if(isIOS){

  // }
  // window.open(
  //   "https://play.google.com/store/search?q=instagram&c=apps",
  //   "_blank"
  // );

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS) {
    // Redirect to the App Store URL for iOS
    window.open('https://apps.apple.com/us/app/instagram/id389801252');
  } else {
    // Redirect to the Play Store URL for Android
    window.open('https://play.google.com/store/apps/details?id=com.instagram.android', "_blank");
  }
};

//to open website on popup click
export const handleUrlClick = (url) => {
  if (url.includes("http://") || url.includes("https://")) {
    window.open(url, "_blank");
  } else {
    window.open(`https://${url}`, "_blank");
  }
};

export const viewProfile = (data) => {
  const time = new Date().getTime().toString().slice(-6);
  window.open(`${data?.shareProfileURL}&t=${time}`, "_blank");
};

export const cancelDelete = (
  deleteCancelProps,
  setTopOverLay,
  setDeletePopup
) => {
  const { closePopup, setOverLay, setEnable, selectedChat } = deleteCancelProps;
  closePopup(setOverLay, setEnable);
  setTopOverLay(false);
  selectedChat("");
  setDeletePopup(false);
};

export const handleScroll = (
  scrollDivRef,
  setScrollheight,
  setScrollPosition
) => {
  const scrollDiv = scrollDivRef.current;
  const divHeight = scrollDiv.offsetHeight;
  // setScrollheight(divHeight);
  // setScrollPosition(scrollDiv.scrollTop);
};

export const updateProgress = (setProgress, currentIndex, isPaused) => {
  return setInterval(() => {
    if (!document.hidden && !isPaused) {
      setProgress((prevProgress) =>
        prevProgress?.map((value, i) =>
          i === currentIndex || (i === 0 && currentIndex === 0)
            ? value + 1
            : value
        )
      );
    }
  }, 50);
};

export const scrollDiv = (scrollPosition, scrollDivRef) => {
  if (scrollPosition && scrollDivRef?.current) {
    scrollDivRef.current.scrollTop = scrollPosition;
  }
};
export const onProfileClick = (e, shareURL, userCode) => {
  const url = `${shareURL}/?userCode=${userCode}&t=${getCurrentTime()}`;
  window.open(url, "_blank");
  e.stopPropagation();
};

export const calcWidthAnimation = (myDivRef, setCalculateWidth) => {
  if (myDivRef.current) {
    const width = myDivRef?.current?.offsetWidth;
    setCalculateWidth(width);
  }
};

export const parseParagraphItalic = (text) => {

  const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

  // Split the text into words while preserving URLs and email addresses
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:))/);

  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      return (
        <Link
          key={index}
          to={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>
            <i>{word}</i>
          </u>
        </Link>
      );
    } else if (emailRegex?.test(word)) {
      return (
        <a
          key={index}
          href={`mailto:${word}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>
            <i>{word}</i>
          </u>
        </a>
      );
    }
    return word;
  });

  return parsedText;
};



// -----------------------------------------------------
// Define regular expressions to match URLs and email addresses
const urlRegex = /((https?:\/\/)?(www\.)?([^\s]+(\.[^\s]+)+))/g;
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g;

// Define a function to parse and format text
export function parseText(text) {
  // Split the text into words while preserving URLs, email addresses, and line breaks
  const words = text?.split(/(\s+|(?=https?:\/\/)|(?=mailto:)|\n)/);

  // Map the words to format URLs, email addresses, and line breaks
  const parsedText = words?.map((word, index) => {
    if (urlRegex?.test(word)) {
      const formattedUrl = word?.startsWith("http") ? word : `http://${word}`;
      // Format URLs using a Link component and add a space after it
      return (
        <>
          <Link
            key={index}
            to={formattedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </Link>
          &nbsp; {/* Add a space after the link */}
        </>
      );
    } else if (emailRegex?.test(word)) {
      // Format email addresses using an anchor tag and add a space after it
      return (
        <>
          <a
            key={index}
            href={`mailto:${word}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word}
          </a>
          &nbsp; {/* Add a space after the email address */}
        </>
      );
    } else if (word === "\n") {
      // Preserve line breaks using a line break element
      return <br key={index} />;
    }
    // Return the word as is if it's not a URL, email, or line break
    return word;
  });

  // Return the formatted and parsed text
  return parsedText;
}



export const getURlValid = async (url) => {

  let isValid;

  if (url.includes('gmail')) {
    isValid = false
    return isValid;
  } else {
    try {
      await fetch(url, { mode: 'no-cors' }).then((rows) => {
        if (rows.status === 404) { isValid = false }
        else if (rows.status === 0) { isValid = true }
        else { isValid = false }
      }).catch((e) => {
        isValid = false
      })
      return isValid
    } catch (error) {
      isValid = false
      return isValid
    }
  }



}


export const getURlValidcopy = (title, setfinalUrl, setshowFavIcon) => {

  //const faviconFetchLink = `https://logo.clearbit.com/`

  let imgTitle = title;
  let finalUrla;

  imgTitle = (title?.includes('www.')) ? title?.replaceAll('www.', '') : title;
  let cleanedUrl = imgTitle.includes("https")
    ? imgTitle?.replaceAll('https://', '')
    : imgTitle.includes("http") ? imgTitle?.replaceAll('http://', '') : imgTitle;

  cleanedUrl = cleanedUrl.includes("/") ? cleanedUrl.split("/")[0] : cleanedUrl;

  // finalUrla = `${faviconFetchLink}${cleanedUrl}?size=32`
  const faviconFetchLink = 'https://www.google.com/s2/favicons?domain='
  finalUrla = `${faviconFetchLink}${imgTitle}&sz=32`

  // fetch(`https://${cleanedUrl}`,{mode:'no-cors'}).then((res)=>{
  //   setshowFavIcon(true)

  // }).catch((e)=>{
  //   setshowFavIcon(false)

  // })
  setfinalUrl(finalUrla)


}



export const getFavicon = (title, setshowFavIcon, setfinalUrl, callback) => {
  let imgTitle = (title?.includes('www.')) ? title?.replaceAll('www.', '') : title;
  let cleanedUrl = imgTitle.includes("https")
    ? imgTitle?.replaceAll('https://', '')
    : imgTitle.includes("http") ? imgTitle?.replaceAll('http://', '') : imgTitle;

  cleanedUrl = cleanedUrl.includes("/") ? cleanedUrl.split("/")[0] : cleanedUrl;

  const faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  faviconLink.href = `https://${cleanedUrl}/favicon.ico`; // Assuming the favicon is at the standard location

  setfinalUrl(faviconLink.href)
  faviconLink.onload = function () {
    callback(faviconLink.href);
    setshowFavIcon(true)
  };

}

export const preventZoom = (deviceinfo) => {


  if (deviceinfo?.deviceDetect()?.os === "iOS") {
    document.body.style.zoom = 1.0

  }
}


export const dateFormatter = (value) => {
  let timestampMs = parseInt(value);
  // Create a Moment object from the timestamp (in milliseconds)
  let dateObject = moment(timestampMs);
  let formattedDate = dateObject.format("ddd, DD MMM YYYY");
  return formattedDate;
}