import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { LeadsviewCardBottom, navigateToRespondingLeads, noImageLeads, mapIcon, LeadsShimmer } from '../../LeadsViewImports'

const LeadsData = ({ userCode, isLive, productionUrl, data }) => {
  const navigate = useNavigate();
  const [locationLoader, setlocationLoader] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(data){
      const promises = data?.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.src =  item?.backgroundImages?.length !== 0?item?.backgroundImages[0]:noImageLeads;
        });
      });
  
      Promise.all(promises).then(() => {
        setIsLoading(false);
      });
    }
   
  }, []);
  return (
    <>
      {isLoading ?
        <LeadsShimmer />
        : <Row className="leads-div-1">
          {data?.map((item, id) => (
            <Col
              sm={6}
              key={id}
              className={`dynamic-div-1 ${id % 2 === 1 ? "even-div box" : "odd-div box"}`}
              onClick={() => navigateToRespondingLeads(item?.leadId, navigate, userCode, isLive, productionUrl)}
              style={{
                backgroundImage: item?.backgroundImages?.length !== 0
                  ? `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${item?.backgroundImages[0]})`
                  : `url(${noImageLeads})`
              }}>

              <LeadsviewCardBottom locationLoader={locationLoader} mapIcon={mapIcon} setlocationLoader={setlocationLoader} item={item} />

            </Col>
          ))}
        </Row>}
    </>
  );
};

export default LeadsData;
