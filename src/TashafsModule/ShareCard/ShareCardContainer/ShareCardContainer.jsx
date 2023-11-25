import { useContext, useEffect, useState } from 'react';
import AadhaarVerifiedPopup from '../../Profile/components/AadhaarVerifiedPopup/AadhaarVerifiedPopup';
import { UserDetails, Badges, SaveButton, ShareBottomOptions, caps, BackgroundFilter } from './ImportsShareCardContainer'
import { AadharPopupContext } from '../../Profile/components/AadhaarVerifiedPopup/AadharPopupContext';
import { ShareCardShimmer } from '../ImportsShareCard';

const ShareCardContainer = ({ userDetail, cardDetail, data, setOpen, setEnable, setOpenMail,
    setLocationEnable, setWebEnable, logo, cardUser }) => {
    const shareBottomOptionsProps = {
        setOpen, setEnable, setOpenMail, setLocationEnable, setWebEnable,
        logo, cardUser, userDetail
    }
    const [isLoading, setIsLoading] = useState(true);
    const { firstname, lastname } = userDetail;
    const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);
    useEffect(() => {
        let imgUrl = cardDetail?.cardDesignType !== "typeA" &&
            cardDetail?.cardDesignType !== "typeB"
            ? cardDetail?.cardShortBgURL !== ""
                ? cardDetail?.cardShortBgURL
                : cardDetail?.customImageCardDesignInfo?.profileBannerImageURL
            : cardDetail?.cardShortBgURL !== ""
                ? cardDetail?.cardShortBgURL
                : cardDetail?.customImageCardDesignInfo?.profileBannerImageURL
        if (imgUrl) {
            const img = new Image();
            img.onload = () => {
                setIsLoading(false);
            };
            img.src = imgUrl;
        }

    }, []);

    return (
        <>
            {isLoading ? <ShareCardShimmer /> :
                <>
                    <div className="username">
                        {caps(userDetail?.firstname) + `'s Personal Card`}
                    </div>
                    <div className="card-div">
                        <div className="card-container"
                            style={{
                                backgroundImage: cardDetail?.cardDesignType !== "typeA" &&
                                    cardDetail?.cardDesignType !== "typeB"
                                    ? cardDetail?.cardShortBgURL !== ""
                                        ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${cardDetail?.cardShortBgURL})`
                                        : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${cardDetail?.customImageCardDesignInfo?.profileBannerImageURL})`
                                    : cardDetail?.cardShortBgURL !== ""
                                        ? `url(${cardDetail?.cardShortBgURL})`
                                        : `url(${cardDetail?.customImageCardDesignInfo?.profileBannerImageURL})`,
                                backgroundPosition: cardDetail?.cardShortBgURL == "" ? "center" : null,
                            }} >
                            <div className="bg-filter-sharecard" >
                                <UserDetails userDetail={userDetail} firstname={firstname} lastname={lastname} setShowVerifiedPopup={setShowVerifiedPopup} />
                                <div className="badges-div">
                                    <Badges data={userDetail?.awards} count={data?.userSpecificAwardsCount} />
                                </div>
                            </div>
                            <ShareBottomOptions {...shareBottomOptionsProps} />
                        </div>
                        {cardDetail?.customImageCardDesignInfo?.colorFilter?.length !== 0 ?
                            <BackgroundFilter filterValues={cardDetail?.customImageCardDesignInfo?.colorFilter?.toString()} /> : null}
                    </div>
                    <SaveButton userDetail={userDetail} cardButton="shareCard" />
                    <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />

                </>}
        </>
    )
}

export default ShareCardContainer
