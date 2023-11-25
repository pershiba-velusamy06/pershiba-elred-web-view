import React from 'react'
import { calcTextLength, viewProfile } from '../../../../../../../../globalFunctions'
import bluetick from "../../../../../../../../assets/images/blue_tick.svg";
import defaultDpURL from '../../../../../../../../assets/images/defaultDp.png'

function LeadsCardProfile({ data, setShowVerifiedPopup }) {
    const name = `${data?.leadOwnerDetails?.firstname} ${data?.leadOwnerDetails?.lastname}`
  return (
    <>
      <div className="user-details-profile" >
        <div className='user-details-profile-inner-div' onClick={() => viewProfile(data)}>
          <span className="user-card-profile"  >
            <img
              className="user-card-profile-img"
              src={data?.leadOwnerDetails?.dpURL !=="" ?data?.leadOwnerDetails?.dpURL : defaultDpURL}
              alt="profile"
            />
            <span className="user-name-container">
              <span className='d-flex'>
                <span className="user-name" >{calcTextLength(18, name, 'name')} </span>
                {data?.leadOwnerDetails?.aadhaarVerifiedStatus && <span onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} className="bluetick-leadsProfile">
                  <img src={bluetick} alt="" />
                </span>}
              </span>

              <div className="location">
                {data?.leadOwnerDetails?.title.length > 0 && <div className={data?.leadOwnerDetails?.companyName?.length !== 0&& data?.leadOwnerDetails?.companyName!==null&&data?.leadOwnerDetails?.companyName?.length >6 ? 'designation' : 'designation-alone'} >
                  {calcTextLength(data?.leadOwnerDetails?.title[0]?.value?.length, data?.leadOwnerDetails?.title[0]?.value)}
                </div>}
                {(data?.leadOwnerDetails?.companyName!==null &&data?.leadOwnerDetails?.companyName?.length !== 0 && data?.leadOwnerDetails?.title?.length > 0) && <div className='divider-lead'>|</div>}
                {data?.leadOwnerDetails?.companyName!==null && (
                  <div className={data?.leadOwnerDetails?.title.length <4?'company-half' :data?.leadOwnerDetails?.title.length > 0 ? 'company' : 'company-only'}>
                    {calcTextLength(data?.leadOwnerDetails?.companyName?.length, data?.leadOwnerDetails?.companyName)}
                  </div>
                )}
              </div>
            </span>
          </span>
          <span className="view-profile-button" >View profile</span>
        </div>
      </div>
    </>
  )
}

export default LeadsCardProfile
