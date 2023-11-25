import React, { useContext, useState } from 'react'
import { openProfile } from '../../ratingsFunctions'
import { calcTextLength } from '../../../UserDetails/ImportsUserDetail'
import DesignationListProfileForRatings from '../../DesignationListProfile/DesignationListProfile'
import defaultDpURL from '../../../../../../assets/images/avatar.png'
import { AadharPopupContext } from '../../../AadhaarVerifiedPopup/AadharPopupContext'
const RatingsDataInner = ({ item, bluetick, id, arr }) => {
    const { setShowVerifiedPopup } = useContext(AadharPopupContext);
    const [Srcimg, setSrcimg] = useState(false)
    return (
        <>

            <>
                <div
                    className="ratings-user"
                    onClick={() => openProfile(item.userCode)}
                >
                    <div className="avatar">
                        <img src={!Srcimg?item?.dpURL:defaultDpURL} alt=""  onError={()=>setSrcimg(true)}/>
                    </div>
                    <div className="profile1">
                        <div className='d-flex'>
                            <span className="name">
                                {calcTextLength(`${item?.firstname} ${item?.lastname}`.length, item?.firstname?.toLowerCase().concat(" " + item?.lastname?.toLowerCase()), '')}
                            </span>
                            <span onClick={(e) => {e.stopPropagation(); setShowVerifiedPopup(true)}} className="bluetick">
                                {item?.aadhaarVerifiedStatus && (
                                    <img src={bluetick} alt="" />
                                )}
                            </span>
                        </div>

                        <div className="designation">
                            {/* {item?.title?.[0]?.value} */}
                            <DesignationListProfileForRatings designation={item?.title} maxWidth={150} />
                        </div>
                    </div>
                </div>
                {id === arr.length - 1 ? "" : <hr id="user-hr" />}
            </>

        </>
    )
}

export default RatingsDataInner
