import React from 'react'
import { handleOptionChange } from '../../../../Profile/components/Needs/needsGlobalFunctions'
import { caps, contactType } from '../../../../../globalFunctions'

const SignupRadioOptions = ({ contactMethod, whatsapp, msg, setContactMethod, OwnerName, formData, setFormData}) => {

    return (
        <div className='signup_radio'>
            <div className="question_txt">
                Would you like to let {caps(OwnerName)} contact you?
            </div>
            <div className='answer_txt'>
                <span><input type="radio" name="contact_method" id="whatsapp" value={'whatsapp'} onChange={e=>handleOptionChange(e,setFormData, formData)} checked={formData?.contact_type === 'whatsapp'} /></span>
                <span className='radio_img' onClick={()=>contactType(setFormData,'whatsapp', formData)}><img src={whatsapp} alt="" /></span>
                <span className='title_radio' onClick={()=>contactType(setFormData,'whatsapp', formData)}>Contact via WhatsApp</span>
            </div>
            <div className='answer_txt'>
                <span><input type="radio" name="contact_method" id="text" value={'text'} onChange={e=>handleOptionChange(e,setFormData, formData)} checked={formData?.contact_type === 'text'} /></span>
                <span className='radio_img' onClick={()=>contactType(setFormData,'text', formData)}><img src={msg} alt="" /></span>
                <span className='title_radio' onClick={()=>contactType(setFormData,'text', formData)}>Contact via Text</span>
            </div>
            {/* <div className='answer_txt'>
                <span><input type="radio" name="contact_method" id="none" value={'none'} onChange={e=>handleOptionChange(e,setFormData, formData)} checked={formData?.contact_type === 'none'} /></span>
                <span className='title_radio' onClick={()=>contactType(setFormData,'none', formData)}>Neither of them</span>
            </div> */}
        </div>
    )
}

export default SignupRadioOptions
