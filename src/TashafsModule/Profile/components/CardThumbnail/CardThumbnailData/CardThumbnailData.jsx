import React, { useEffect, useState } from 'react'
import Badges from '../../../../Cards/Badges/Badges'
import CardBottomOptions from './CardBottomOptions/CardBottomOptions'
import DesignationListProfile from '../../../../components/DesignationListProfile/DesignationListProfile'
import { calcTextLength } from '../../../../../globalFunctions'
import BackgroundFilter from '../../BackgroundFilter/BackgroundFilter'
import avatar from '../../../../../assets/images/avatar.png'
import blueTick from "../../../../../assets/images/blue_tick.svg"
import Skeleton from 'react-loading-skeleton'

const CardThumbnailData = ({ cardInfo, tint, handleShow, dpURL, firstname, lastname, title, newAddress,
    data, wholeData, profileData, designType
}) => {
    const baseColor = '#CFD4DF';
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoading(false);
        };
        img.src = cardInfo?.[0]?.customImageCardDesignInfo !== null
            ? cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL
            : cardInfo?.[0]?.cardShortBgURL

    }, []);
    return (
        <>

            {isLoading ? <Skeleton height={85} width={55} className="card" baseColor={baseColor} /> :

                <div className="mini-card"
                    style={{
                        backgroundImage:
                            cardInfo?.[0]?.customImageCardDesignInfo !== null
                                ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${cardInfo?.[0]?.customImageCardDesignInfo?.profileBannerImageURL})`
                                : `${tint ? `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${cardInfo?.[0]?.cardShortBgURL})`
                                    : `url(${cardInfo?.[0]?.cardShortBgURL})`}`,
                        backgroundPosition: designType === "ptypeC" ? "100% 0%" : "50% 50%",
                        // backgroundColor: tint ? "rgba(0,0,0,0.4)" : null,
                    }}
                    onClick={handleShow}>
                    <div className="bg-filter-mini-card-thumbnail">
                        <div className="profileImg">

                            <img src={dpURL == "" ? avatar : dpURL} alt="" />
                        </div>
                        {profileData.result[0].aadhaarVerifiedStatus && <img src={blueTick} className="blue-tick-verified-icon" alt="" />}
                        <div className="name">{calcTextLength(12, firstname, 'name')}</div>
                        <div className="name2">{calcTextLength(19, lastname, 'name')}</div>
                        <div className="designation"><DesignationListProfile designation={title} maxWidth={150} /></div>
                        <div className="location">
                            {newAddress?.length <= 28 ? newAddress : newAddress?.slice(0, 28) + '...'}
                        </div>
                        {data?.awards?.length !== 0 && (
                            <div className="mini-badges">
                                <Badges
                                    data={data?.awards}
                                    count={wholeData?.userSpecificAwardsCount}
                                />
                            </div>
                        )}
                        <CardBottomOptions />
                    </div>
                    {cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.length !== 0 ? (
                        <BackgroundFilter filterValues={cardInfo?.[0]?.customImageCardDesignInfo?.colorFilter?.toString()} />
                    ) : null}
                </div>}
        </>
    )
}

export default CardThumbnailData
