import React, { useContext, useState } from "react";
import Badges from "../Badges/Badges";
import BottomOptions from "../BottomOptions/BottomOptions";
import CardDataProfile from "./CardDataProfile/CardDataProfile";
import CardBottomBranding from "./CardBottomBranding/CardBottomBranding";
import { Spinner } from "react-bootstrap";
import { calcTextLength } from "../../../globalFunctions";
import BackgroundFilter from "../../Profile/components/BackgroundFilter/BackgroundFilter";
import SaveButton from "../../ShareCard/components/SaveButton/SaveButton";
import { AadharPopupContext } from "../../Profile/components/AadhaarVerifiedPopup/AadharPopupContext";

const CardDataContainer = ({
  firstname,
  handleClose,
  close,
  tint,
  cardInfo,
  share,
  dpURL,
  lastname,
  title,
  newAddress,
  data,
  wholeData,
  setEnable,
  setLocationEnable,
  setOpen,
  setOpenMail,
  setPop,
  setWebEnable,
  logo,
  cardUser,
}) => {
  const [closeLoader, setcloseLoader] = useState(true);
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  return (
    <>
    <div className="card-parent-div">
      <div className="check">
        <div className="user-title">
          {calcTextLength(13, firstname, "name")}'s Personal Card
        </div>
        <div className="close-button-div" onClick={handleClose}>
          <Spinner
            animation="border"
            variant="danger"
            size="sm"
            className={
              closeLoader
                ? "showing-img-loader close-button-loader"
                : "hiding-img-loader"
            }
          />
          <img
            src={close}
            alt=""
            className={
              !closeLoader ? "showing-img-loader" : "hiding-img-loader"
            }
            onLoad={() => setcloseLoader(false)}
          />
        </div>
      </div>

      <div className="card-div-wrapper">
        <div className="card-wrapper">
          <div
            className="main-card"
            style={{
              backgroundImage: tint
                ? cardInfo?.[0]?.cardShortBgURL !== ""
                  ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cardInfo?.[0]?.cardShortBgURL})`
                  : `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL})`
                : `url(${cardInfo?.[0]?.cardShortBgURL})`,
              backgroundPosition:
                cardInfo?.[0].cardShortBgURL == "" ? "center" : null,
            }}
          >
            <div className="bg-filter-card-data-container"></div>
            <CardDataProfile
              share={share}
              dpURL={dpURL}
              firstname={firstname}
              lastname={lastname}
              title={title}
              newAddress={newAddress}
              data={data}
              setShowVerifiedPopup={setShowVerifiedPopup}
            />
            <Badges
              data={data?.awards}
              count={wholeData?.userSpecificAwardsCount}
            />
            <BottomOptions
              setOpen={setOpen}
              setEnable={setEnable}
              setOpenMail={setOpenMail}
              setLocationEnable={setLocationEnable}
              setWebEnable={setWebEnable}
              setPop={setPop}
            />
            <CardBottomBranding
              logo={logo}
              cardUser={cardUser}
              handleClose={handleClose}
            />

            {cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.length !==
            0 ? (
              <BackgroundFilter
                filterValues={cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.toString()}
              />
            ) : null}
          </div>
        </div>
        {showVerifiedPopup ? null : <SaveButton userDetail={wholeData?.result?.[0]} cardButton="miniCard" />}
      </div>
    </div>
    </>
  );
};

export default CardDataContainer;
