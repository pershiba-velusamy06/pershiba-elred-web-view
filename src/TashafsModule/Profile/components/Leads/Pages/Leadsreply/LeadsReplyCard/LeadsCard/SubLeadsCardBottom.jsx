import React from 'react'
import { handleShareProfile } from '../../../../LeadsGlobalFunctions'
import { Spinner } from 'react-bootstrap'
import FormatText from '../../../../components/LeadsCards/FormatText'
import ShareIcon from "../../../../../../../../assets/images/share-arrow.svg";
import LeadsCardLocation from './LeadsCardLocation'
import FormatTextForTitle from '../../../../components/LeadsCards/FormatTextForTitle';


function SubLeadsCardBottom({ data, shareLoader, locationLoader, setlocationLoader, formattedPricing, setshareLoader }) {
  
    return (
        <>
            <div className="subcard-header">
                <span className="subcard-header-left">{data?.industry?.value}</span>
                <span className="subcard-header-right" onClick={() => handleShareProfile(data)}>
                    <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'show-img-loader subcard-share-iconloader' : 'hide-img-loader'} />
                    <img className={!shareLoader ? 'show-img-loader subcard-share-icon' : "hide-img-loader "} src={ShareIcon} alt="share" onLoad={() => setshareLoader(false)} />
                    <span className="subcard-header-right-text">Share </span>
                </span>
            </div>

            <LeadsCardLocation locationLoader={locationLoader}
                setlocationLoader={setlocationLoader} data={data}
                formattedPricing={formattedPricing} />

            {/* <div className="subcard-title">{data?.leadTitle}</div> */}
            <FormatTextForTitle  data={data?.leadTitle} classStyle='subcard-title' />
            <div className="subcard-text-content">
                <FormatText data={data?.leadsDescription} />

            </div>
        </>
    )
}

export default SubLeadsCardBottom
