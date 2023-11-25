import React from 'react'
import mobile from '../../../assets/images/mobile.png'
import googlePlay from '../../../assets/images/googlePlay.png'
import appleIOS from '../../../assets/images/appledownload.png'
import elred from '../../../assets/images/el.png'
import { Offcanvas } from 'react-bootstrap'
import { openPlaystore } from '../../../globalFunctions'

const AlreadyAccountPopup = ({ show, handleClose }) => { 
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);   
    return (
        <Offcanvas show={show} onHide={handleClose} placement='bottom' className='offerings_screen'>
            <div className='main_div_canvas'>
                <div className='top_canvas_section'>
                    <span className='skipOfferings' onClick={handleClose}>Skip</span>
                    <hr id='popup_hr' />
                    <img src={elred} alt="" />
                </div>
                <div className="wallpaper">
                    <img src={mobile} alt="" />
                </div>
                <div className='content_div_canvas'>
                    <div className='txt1'>
                        You already have an account!
                    </div>
                    <div className="description">
                        Please download elRED app to get the best experience.
                    </div>
                    <img src={isIOS ? appleIOS : googlePlay} alt="" onClick={openPlaystore}/>
                </div>
            </div>
        </Offcanvas>
    )
}

export default AlreadyAccountPopup
