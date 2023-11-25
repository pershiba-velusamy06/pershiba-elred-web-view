import { useState } from 'react';
import {ProfileShimmer, useFetch, useSearchParams, ErrorPage, useRatings, useMiniCardFetcher, useFetchNeeds,
  ProfileWithData, useRatingSearch, useFetchLeads} from './ImportsProfile'

const Profile = ({ isLive, productionUrl }) => {
  let [searchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");

  const {data, error, isLoading: loading, rgba, tint, designTypeC, secondaryColor, baseColor, primaryColor, 
    textColor, superSkillsIcon } = useFetch(`${ isLive ? productionUrl : "" }/noSessionProfileDetails?userCode=${userCode}`);

  const { miniCardData, wholeData } = useMiniCardFetcher( isLive, productionUrl, userCode);

  const { wholeData: ratingsWholeData, data: ratingsData, hasMore, fetchNextPage,loader,fetchVirtualSearch } = useRatings(
    isLive, productionUrl, userCode, 'noSessionPreviewRatingsEthicalCode','ethical');
  const { wholeData: metWholeData, data: virtuallyMetData, hasMore: isMore, fetchNextPage: fetchMorePage, meetfetchLoader,fetchMeetNext } = useRatings(
    isLive, productionUrl, userCode, 'noSessionPreviewRatingsVirtuallyMet','Meet');

  const { deBoundeEthical, ethicalloader,data: ratingsDataSearch,isSearchEthical,setLoading,   closeEthicalPopup,ethicalSearchMore
   } = useRatingSearch(isLive, productionUrl, userCode, "ethical", "noSessionPreviewRatingsEthicalCode",fetchVirtualSearch)
  const { deBoundeMeet, meetLoader, data: virtuallyMetDataSearch,isSearchMeet,setLoading: meetSetLoading, closeMeetpopUp,meetSearchMore
  } = useRatingSearch(isLive, productionUrl, userCode, "Meet", "noSessionPreviewRatingsVirtuallyMet",fetchMeetNext)

  const { needsData, needsAvailable, fetchNeeds } = useFetchNeeds( isLive, productionUrl, userCode);
  const {leadsData, leadsAvailable, fetchLeads,leadsLoading,getCOuntofLeads } = useFetchLeads(isLive, productionUrl, userCode);

  const profileWithDataProps = {
    userCode, isLive, productionUrl, data, error, rgba, tint, designTypeC, secondaryColor, baseColor,
    primaryColor, textColor, superSkillsIcon, ratingsWholeData, ratingsData, hasMore, fetchNextPage, metWholeData,
    miniCardData, wholeData, needsData, needsAvailable, fetchNeeds, virtuallyMetData, isMore, fetchMorePage, deBoundeEthical,
    deBoundeMeet, meetLoader, ethicalloader, setLoading, meetSetLoading,ratingsDataSearch,virtuallyMetDataSearch,
    isSearchEthical,isSearchMeet,loader,meetfetchLoader, closeMeetpopUp,closeEthicalPopup,
    leadsData, leadsAvailable, fetchLeads, meetSearchMore,ethicalSearchMore,leadsLoading,getCOuntofLeads
  }

  return (
    <>
      {loading||leadsLoading  ? <ProfileShimmer color={"#D6DAE5"}/>
      : !error ? (
        <ProfileWithData {...profileWithDataProps} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default Profile;
