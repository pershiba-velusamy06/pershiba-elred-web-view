import React, { createContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { getBrowserType, isProductionEnvironment } from "./globalFunctions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnsupportedBrowser from "./TashafsModule/components/UnsupportedBrowser/UnsupportedBrowser";
import { AadharPopupContextProvider } from "./TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";

export const GlobalData = createContext();

function App() {
  const isLive = isProductionEnvironment();
  const productionUrl = "https://dev.elred.io";

  const [formData, setFormData] = useState({
    message: "",
    f_name: '',
    l_name: '',
    phone_number: '',
    website1: '',
    website2: '',
    contact_type: 'whatsapp'
  });
  const [isOffline, setisOffline] =  useState(false)
  const BROWSER_TYPE = getBrowserType();

  window.addEventListener("offline", (event) => {
   
    setisOffline(true)
  });

  window.addEventListener("online", (event) => {
    
    setisOffline(false)
  });


  if(BROWSER_TYPE!=='Google Chrome'){
    return <UnsupportedBrowser/>
  }
  return (
    <AadharPopupContextProvider>
      <Container className="main-container">
        <GlobalData.Provider value={{ formData, setFormData  }}>
          <Routing isLive={isLive} productionUrl={productionUrl} isOffline={isOffline} setisOffline={setisOffline}/>
          <ToastContainer position="top-center" />
        </GlobalData.Provider>
      </Container>
    </AadharPopupContextProvider>
  );
}

export default App;
