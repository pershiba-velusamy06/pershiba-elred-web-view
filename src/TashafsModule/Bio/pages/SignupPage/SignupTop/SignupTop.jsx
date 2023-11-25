import React, { useContext, useState } from 'react'
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import back from '../../../../../assets/images/backpage.svg'
import { GlobalData } from '../../../../../App'
import { naviagteToLeadOrNeeds } from '../../../../../globalFunctions'

const SignupTop = ({ navigate, userCode }) => {
    const { formData, setFormData } = useContext(GlobalData)
    let [searchParams, setSearchParams] = useSearchParams();
    const needId = searchParams.get("needId") ?? "";
    const leadId = searchParams.get("leadId") ?? "";
    const [backLoader, setBackLoader] = useState(true)

    return (
        <>
            <div className='signup_header'>
                <Spinner animation="border" variant="dark" size="sm" className={backLoader ? 'show-img-loader-signup' : 'hide-img-loader'}/>
                <img src={back} alt="" onClick={() => naviagteToLeadOrNeeds(needId,setFormData,navigate,userCode,leadId)} className={!backLoader? 'show-img-loader' : "hide-img-loader"} onLoad={() => setBackLoader(false)}/>
                <span className='title'>Your Information</span>
            </div>
        </>
    )
}

export default SignupTop
