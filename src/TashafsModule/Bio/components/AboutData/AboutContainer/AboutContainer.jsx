import React, { useState } from 'react'
import NoDataText from '../../NoDataText/NoDataText'
import { navigateToResume } from '../../../bioGlobalFunctions'
import Skeleton from 'react-loading-skeleton'
import shimmer from '../../../../../assets/images/shimmer.png'
import { Spinner } from 'react-bootstrap'
const AboutContainer = ({ bio, logo, next, navigate, userCode }) => {
  const [resumeImg, setresumeImg] = useState(true)
  const [resumeBackImg, setresumeBackImg] = useState(true)

  return (
    <>
      <div className="about-me">
        <div className="title">About me</div>
        <div className="desc">{bio?.aboutUser}</div>
      </div>
      {(bio?.aboutUser == "  " || bio?.aboutUser == "") && (
        <NoDataText msg={"No about me added yet"} />
      )}
      <hr />
      <div className="blood-group">
        <div className="title">Blood group</div>
        <div className="desc">
          {bio?.bloodGroup !== "" ?
          bio?.bloodGroup?.slice(-1) == "+"
              ? `${bio?.bloodGroup?.slice(0, -1)} positive ` + `(${bio?.bloodGroup})`
              : `${bio?.bloodGroup?.slice(0, -1)} negative ` + `(${bio?.bloodGroup})`
          : "N/A"
          }

        </div>
      </div>
      <div className="resume-div" onClick={() =>
        navigateToResume(userCode, bio, navigate, '/my-bio/resume-view')}>
        <div className="resume">
     
         <Spinner animation="border" variant="dark" size="sm" className={resumeImg?'showing-img-loader resume-loader':"hiding-img-loader "}/>
          <img src={logo} alt="" onLoad={() => setresumeImg(false)} />
          <div className="title">Resume</div>
        </div>
        <Spinner animation="border" variant="dark" size="sm" className={resumeBackImg ?'showing-img-loader':"hiding-img-loader "}/>

        <div  className={!resumeBackImg?'icon showing-img-loader':"hiding-img-loader "}>

          <img src={next} alt="" onLoad={() => setresumeBackImg(false)} className="resume-right-icon" />
        </div>
      </div>
    </>
  )
}

export default AboutContainer
