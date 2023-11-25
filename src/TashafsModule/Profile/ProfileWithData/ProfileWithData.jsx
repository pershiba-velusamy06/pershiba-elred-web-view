import React, { useContext, useEffect, useState } from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import UpperProfileData from './UpperProfileData/UpperProfileData'
import LowerProfileData from './LowerProfileData/LowerProfileData'
import BackgroundFilter from '../components/BackgroundFilter/BackgroundFilter'
import AadhaarVerifiedPopup from '../components/AadhaarVerifiedPopup/AadhaarVerifiedPopup'
import { AadharPopupContext } from '../components/AadhaarVerifiedPopup/AadharPopupContext'
import { ProfileShimmer } from '../ImportsProfile'

const ProfileWithData = ({ data, rgba, tint, designTypeC, secondaryColor, baseColor, primaryColor, textColor,
  superSkillsIcon, isLive, productionUrl, miniCardData, wholeData, ratingsData, ratingsWholeData, hasMore, fetchMorePage, meetSearchMore, ethicalSearchMore,
  needsData, needsAvailable, metWholeData, virtuallyMetData, isMore, userCode, fetchNextPage, meetfetchLoader, loader, closeMeetpopUp, closeEthicalPopup,
  deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading, ratingsDataSearch, virtuallyMetDataSearch, isSearchEthical, isSearchMeet,
  leadsData, leadsAvailable, leadsLoading, getCOuntofLeads}) => {
    const [isLoading, setIsLoading] = useState(true);
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  const upperProfileDataProps = {
    data, miniCardData, baseColor, secondaryColor, tint, wholeData, rgba, userCode,
    leadsData, leadsAvailable, isLive, productionUrl, leadsLoading, getCOuntofLeads, setShowVerifiedPopup
  }

  const lowerProfileDataProps = {
    rgba, ratingsWholeData, metWholeData, ratingsData, virtuallyMetData, hasMore, isMore,
    fetchNextPage, fetchMorePage, isLive, productionUrl, userCode, superSkillsIcon, needsAvailable, needsData,
    deBoundeEthical, deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading, ratingsDataSearch, virtuallyMetDataSearch,
    isSearchEthical, isSearchMeet, meetfetchLoader, loader, closeMeetpopUp, closeEthicalPopup, meetSearchMore, ethicalSearchMore, setShowVerifiedPopup
  }


  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.src = data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL;

  }, []);
  
  return (
    <>
      {isLoading ? <ProfileShimmer color={"#D6DAE5"} /> :
        <>
          <div className="parent-profile"
            style={
              {
                backgroundImage: tint ? `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL})` :
                  `url(${data?.result?.[0]?.profileDesignInfo?.profileBannerImageURL})`,
                // height: designTypeC == "ptypeC" ? "auto" : "",
                backgroundSize: designTypeC == "ptypeC" ? "contain" : "cover",
                backgroundPosition: designTypeC == "ptypeC" ? "100% 0%" : '50% 0%',
                backgroundColor: designTypeC == "ptypeC" ? `#${secondaryColor}` : "",
                height: designTypeC === 'ptypeC' ? 'auto' : '100vh',
                overflow: designTypeC === 'ptypeC' ? '' : 'auto',
              }}
          >

            <div className="profile" style={{ background: `#${primaryColor}` }}>
              <TopHeader color={`#${textColor}`} />
            </div>
            {/* <div className="profile-body bg-filter-profile-with-data" style={{ background: tint ? "rgba(0,0,0,0.4)" : null }}> */}
            <div className="profile-body bg-filter-profile-with-data">
              <UpperProfileData {...upperProfileDataProps} />
              <LowerProfileData {...lowerProfileDataProps} />
            </div>
            {data?.result[0]?.customImageCardDesignInfo?.colorFilter.length !==
              0 ? (
              <BackgroundFilter
                filterValues={data?.result[0]?.customImageCardDesignInfo?.colorFilter?.toString()}
              />
            ) : null}
          </div>
          <AadhaarVerifiedPopup showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />
        </>}
    </>
  );
};

export default ProfileWithData
