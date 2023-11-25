import React from 'react'
import moment from "moment";
import { Spinner } from 'react-bootstrap'
import { calcTextLength, handleMapClick } from '../../../../../../globalFunctions'
import map from "../../../../../../assets/images/mapIcon.svg";
import FormatTextForTitle from './FormatTextForTitle';
function LeadsCardBottomInView({ locationLoader, item, setlocationLoader }) {
  return (
    <>
      <div className="leadsdate">
        {moment(item?.leadCreatedAt).format("DD MMM YYYY")}
      </div>
      <div className="title-card-leads-view">
        <div className="locate">
          <div>
            <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader location-loader-spinn' : 'hide-img-loader'} />

            <img src={map} alt="" className={!locationLoader ? 'show-img-loader' : "hide-img-loader"} onLoad={() => setlocationLoader(false)} />
          </div>

          <div className="name-place">

            {typeof (item?.location) === 'string' ?
              <span>
                {calcTextLength(26, item?.location)}
              </span>
              :
              <span>
                {` ${calcTextLength(20, item?.location?.fullAddress)}`}
              </span>
            }
          </div>
        </div>
        <div className="description-wrapper">
          {/* <div className="title-Description-leads"> */}
          <FormatTextForTitle data={calcTextLength(36, item?.leadTitle)} classStyle='title-Description-leads' />
          {/* </div> */}
        </div>

      </div>
    </>
  )
}

export default LeadsCardBottomInView
