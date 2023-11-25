import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import WebsitePopup from '../../WebsitePopup/WebsitePopup'

const WebsitePopupData = ({webEnable, setWebEnable, data}) => {
    return (
        <Offcanvas show={webEnable} className="bottomPopSmall" placement="bottom" onClick={() => setWebEnable(false)}>
            <WebsitePopup
                data={data}
                setWebEnable={setWebEnable}
                webStatus={data?.cardInfo?.[0]?.websiteDisplayStatus}
                socialStatus={data?.cardInfo?.[0]?.socialMediaDisplayStatus}
                website={data.websiteURL}
            />
        </Offcanvas>
    )
}

export default WebsitePopupData
