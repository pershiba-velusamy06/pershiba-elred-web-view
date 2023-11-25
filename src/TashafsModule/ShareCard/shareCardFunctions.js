import toast, { toastConfig } from "react-simple-toasts";


export const handleOpenNewUrl = (userDetail) => {
  const time = new Date().getTime().toString().slice(-6);
  const url = `${userDetail?.shareProfileURL}&t=${time}`;
  window.open(url, "_blank");
};

export const handleShareCard = (userDetail) => {
  const time = new Date().getTime().toString().slice(-6);
  (async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: `Hello, \n\nCheck out this personal card at elRed.\n\nURL:`,
          url: userDetail?.shareCardURL + `&t=${time}`,
        });
      } catch (error) {
        // console.error("Error Sharing:", error);
      }
    } else {
      toast('Web share not supported by MacOS Chrome')    
    }
  })();
};
