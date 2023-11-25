import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { navigateToLeadsWithState } from "../../../../../../globalFunctions";
import { useState } from "react";
import noImageLeads from '../../../../../../assets/images/leads-no-img-background.png'
import LeadsCardBottomInView from "./LeadsCardBottomInView";
import Skeleton from "react-loading-skeleton";
const LeadsCards = ({ leadsData, userCode, isLive, productionUrl, setFormData, handleDragStart, handleDragEnd, handleDrag, MoveEventprops, slider }) => {
  const navigate = useNavigate();
  const navigateState = { isLive, productionUrl };
  const [locationLoader, setlocationLoader] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (leadsData) {
      const promises = leadsData?.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.src = item?.backgroundImages?.length !== 0 ? item?.backgroundImages[0] : noImageLeads;
        });
      });

      Promise.all(promises).then(() => {
        setIsLoading(false);
      });
    }

  }, []);
  return (
    <div className={"leads-cards"} id='profile-leads-list'
      onMouseDown={(e) => handleDragStart(slider, MoveEventprops, e)}
      onMouseUp={(e) => handleDragEnd(slider, MoveEventprops, e)}
      onMouseLeave={(e) => handleDragEnd(slider, MoveEventprops, e)}
      onMouseMove={(e) => handleDrag(slider, MoveEventprops, e)}>
      {leadsData.length !== 0 && leadsData?.map((item) => (
        <div
          onClick={(e) =>
            navigateToLeadsWithState(navigate, userCode, item?.leadId, "/my-bio/leads/responding-leads", navigateState, setFormData, e)}
          key={item?.leadId}
          className="card"
          style={isLoading ? { backgroundColor: '#d6dae5' } : {
            backgroundImage: item?.backgroundImages?.length !== 0 ?
              `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${item?.backgroundImages[0]})`
              : `url(${noImageLeads})`
          }} >

          {isLoading ? <div className="inner-shimmer">
            <Skeleton
              width={50}
              height={7}
              borderRadius={6}
              baseColor={"#CFD4DF"}
            />
            <Skeleton
              width={100}
              height={7}
              borderRadius={6}
              baseColor={"#CFD4DF"}
            />
            <Skeleton
              width={110}
              height={7}
              borderRadius={6}
              baseColor={"#CFD4DF"}
            />

            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor="#cfd4df"
                borderRadius={6}
              />
            </div>
            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor="#cfd4df"
                borderRadius={6}
              />
            </div>
            <div style={{ lineHeight: "10px" }}>
              <Skeleton
                width={150}
                height={4}
                baseColor="#cfd4df"
                borderRadius={6}
              />
            </div>
          </div> : <LeadsCardBottomInView locationLoader={locationLoader} item={item} setlocationLoader={setlocationLoader} />}
        </div>
      ))}
    </div>
  );
};

export default LeadsCards;
