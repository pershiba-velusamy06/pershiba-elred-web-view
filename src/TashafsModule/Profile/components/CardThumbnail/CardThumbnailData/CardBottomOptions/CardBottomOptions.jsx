import React from 'react'
import S from '../../../../../../assets/images/S.svg'
import call from '../../../../../../assets/images/call.svg'
import globe from '../../../../../../assets/images/globe.svg'
import map from '../../../../../../assets/images/location.svg'
import mail from '../../../../../../assets/images/mail.svg'


const CardBottomOptions = () => {
    return (
        <div className="bottomBar">
            <div className="wrapper">
                <img src={S} alt="" />
            </div>
            <div className="wrapper">
                <img src={mail} alt="" />
            </div>
            <div className="wrapper">
                <img src={call} alt="" />
            </div>
            <div className="wrapper">
                <img src={map} alt="" />
            </div>
            <div className="wrapper">
                <img src={globe} alt="" />
            </div>
        </div>
    )
}

export default CardBottomOptions
