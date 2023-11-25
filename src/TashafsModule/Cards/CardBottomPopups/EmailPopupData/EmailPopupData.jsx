import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import EmailPopup from '../../EmailPopup/EmailPopup'

const EmailPopupData = ({openMail, setOpenMail, data}) => {
    return (
        <Offcanvas show={openMail} className="bottomPopSmall" placement="bottom" onClick={() => setOpenMail(false)}>
            <EmailPopup
                email={data?.email}
                setOpenMail={setOpenMail}
                status={data?.cardInfo?.[0]?.alternateEmailDisplayStatus}
            />
        </Offcanvas>
    )
}

export default EmailPopupData
