import React from 'react'
import { Spinner } from 'react-bootstrap'

const SignupButton = ({sending, getOtp, getOtpProps, signupInputsProps}) => {
    const { formData } = getOtpProps;
  const isInstaValid = !formData?.website1 || formData?.website1 && /^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(formData.website1);
  const isLinkedinValid = !formData?.website2 || formData?.website2 && /^(https?:\/\/)?([\w-]+(\.[\w-]+){1,}\w{1,}(:\d+)?(\/\S*)?)$/.test(formData.website2);   
    const isButtonDisabled = sending || 
        formData?.f_name?.trim().length<3||
        formData?.f_name?.charAt(0) === ' ' ||
        formData?.phone_number?.length < 10 || signupInputsProps?.phoneError ||
        !isInstaValid || 
        !isLinkedinValid;

    return (
        <div className="customSubmit" >
            <div className={isButtonDisabled ? 'disabled' : 'buttonText'} onClick={isButtonDisabled ? null : () => getOtp(getOtpProps)}>
                {sending ? <Spinner animation="border" variant="light" size='sm' /> : "Get OTP"}
            </div>
        </div>
    )
}

export default SignupButton
