import React from 'react'
import { Spinner } from 'react-bootstrap'
import locationIcon from "../../../../../../../../assets/images/location.svg";
import { calcTextLength, handleMapClick } from '../../../../../../../../globalFunctions';

function LeadsCardLocation({locationLoader,setlocationLoader,data,formattedPricing}) {
  return (
    <div className="subcard-location-price-container">
          <span className="subcard-location" onClick={() => handleMapClick(data?.location?.latitude, data?.location?.longitude)}>
            <span >
              <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader locationLoader' : 'hide-img-loader'} />
              <img
                className={!locationLoader ? 'show-img-loader subcard-location-icon' : "hide-img-loader"}
                src={locationIcon}
                alt="location"
                onLoad={() => setlocationLoader(false)}
              />
            </span>
            <span className={data?.pricingRange?.currency !== "" ? 'subcard-location-text' : 'subcard-location-text noCurrency'} >
              {typeof (data?.location) === 'string' ? calcTextLength(26, data?.location) : `${calcTextLength(26, data?.location?.fullAddress)}`}</span>
          </span>
          {data?.pricingRange?.currency !== "" && <span className={data?.pricingRange?.minValue !== "" && data?.pricingRange?.maxValue !== "" ? "subcard-amount" : "subcard-amount subcard-amount-margin"}>
            <span className="currency-value">{data?.pricingRange?.currency}</span><span className="subcard-currency-amount">{`${formattedPricing}`}</span>
          </span>}
        </div>
  )
}

export default LeadsCardLocation
