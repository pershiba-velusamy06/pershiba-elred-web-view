import React from 'react'
import SkillsPopupData from './SkillsPopupData/SkillsPopupData'
import PhonePopupData from './PhonePopupData/PhonePopupData'
import EmailPopupData from './EmailPopupData/EmailPopupData'
import AddressPopupData from './AddressPopupData/AddressPopupData'
import WebsitePopupData from './WebsitePopupData/WebsitePopupData'

const CardBottomPopups = ({open, setOpen, data, enable, setEnable, openMail, 
    setOpenMail, locationEnable, setLocationEnable, webEnable, setWebEnable
}) => {
    return (
        <>
           <SkillsPopupData open={open} setOpen={setOpen} data={data}/>
           <PhonePopupData enable={enable} setEnable={setEnable} data={data}/>
           <EmailPopupData openMail={openMail} setOpenMail={setOpenMail} data={data}/>
           <AddressPopupData locationEnable={locationEnable} setLocationEnable={setLocationEnable} data={data}/>
           <WebsitePopupData webEnable={webEnable} setWebEnable={setWebEnable} data={data} />
        </>
    )
}

export default CardBottomPopups
