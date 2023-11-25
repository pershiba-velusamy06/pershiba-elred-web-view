import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
const InputField = ({ label, placeholder, required, logo, value, onChange, onBlur, error, errorMsg, max, inputBlur, validation, onFocus, inputType }) => {
    const validationError = validation && validation();
    const [logoLoader, setLogoLoader] = useState(true)
    return (
        <>
            <div className='inputField'>
                <div className="label">{label}</div>
                <div className="input_field_wrapper">
                    <input placeholder={placeholder} required={required} value={value} onBlur={inputBlur} inputMode={inputType === 'phone' ? 'numeric' : null} onChange={(e) => {
                        onChange(e.target.value);
                        // onBlur(e.target.value);
                    }} maxLength={max}>
                    </input>
                    {logo && <Spinner animation="border" variant="#000" size="sm" className={logoLoader ? 'show-img-loader-logo' : 'hide-img-loader'} />}
                    <img src={logo} alt="" className={logoLoader ? 'hide-img-loader' : 'show-img-loader-logo'} onLoad={()=>setLogoLoader(false)}/>
                </div>
            </div>
            {error && <div className='error_msg_signup_field'>{errorMsg}</div>}
            {validationError && <div className='error_msg_signup_field'>{validationError}</div>}
            </>
            
    )
}

export default InputField
