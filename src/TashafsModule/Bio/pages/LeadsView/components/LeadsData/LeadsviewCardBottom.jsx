import React from 'react'
import moment from "moment";
import { Spinner } from 'react-bootstrap'
import { calcTextLength } from '../../../../../../globalFunctions'
import FormatTextForTitle from '../../../../../Profile/components/Leads/components/LeadsCards/FormatTextForTitle'

const LeadsviewCardBottom = ({ locationLoader, mapIcon, setlocationLoader, item }) => {
    return (
        <>
            <div className="leadstitledate">
                {moment(item?.leadCreatedAt).format("DD MMM YYYY")}
            </div>
            <div className="title-card">
                <div className="locate">
                    <div>
                        <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader shimmer-location1' : 'hide-img-loader'} />

                        <img className={!locationLoader ? 'show-img-loader' : "hide-img-loader"} src={mapIcon} alt="" onLoad={() => setlocationLoader(false)} />
                    </div>
                    <div className="name-place">
                        {typeof (item?.location) === 'string' ? <span>{calcTextLength(15, item?.location)}</span> : <span>
                            {`${calcTextLength(15, item?.location?.fullAddress)}`}
                        </span>}
                    </div>
                </div>
            </div>
            {item?.leadTitle !== "" && <div className="Description-leads">
                <FormatTextForTitle data={calcTextLength(item?.leadTitle.length, item?.leadTitle)} classStyle="title-Description-leads-view " />
            </div>}
        </>
    )
}

export default LeadsviewCardBottom
