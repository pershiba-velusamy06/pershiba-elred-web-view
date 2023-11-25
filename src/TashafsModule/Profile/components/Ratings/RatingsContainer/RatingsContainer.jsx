import { Offcanvas } from 'react-bootstrap'
import RatingsPopUp from '../RatingsPopUp/RatingsPopUp'
import closeButton from '../../../../../assets/images/closeBg.svg'

const RatingsContainer = ({ showEthical, showMet, data1, data2, pagingData1, pagingData2, setShowEthical, setShowMet, 
    hasMore, isMore, fetchNextPage, fetchMorePage,meetfetchLoader,loader,meetLoader, ethicalloader, setLoading, meetSetLoading, deBoundeEthical,
     deBoundeMeet,isSearchEthical, isSearchMeet, ratingsDataSearch, virtuallyMetDataSearch, closeMeetpopUp,closeEthicalPopup,meetSearchMore,ethicalSearchMore }) => {

    return (
        <>
        <Offcanvas show={showEthical || showMet} className="ratingsPop" placement="bottom"onHide={() => { setShowEthical(false); setShowMet(false); }}>
            {showEthical && (
                <RatingsPopUp
                    count={data1?.ethicalCodeYesCount}
                    closeBtn={closeButton}
                    close={setShowEthical}
                    msg={"Say has ethical code of conduct"}
                    data={isSearchEthical ? ratingsDataSearch : pagingData1}
                    more={hasMore}
                    fetchMoreData={fetchNextPage}
                    searchHandler={deBoundeEthical}
                    setLoading={setLoading}
                    loading={ethicalloader}
                    type='ethical'
                    isSearch={isSearchEthical}
                    loader={loader}
                    closePopUp={closeEthicalPopup}
                    searchMore={ethicalSearchMore}
                />
            )}
            {showMet && (
                <RatingsPopUp
                    count={data2?.virtuallyMetYesCount}
                    closeBtn={closeButton}
                    close={setShowMet}
                    msg={"Have met In real life/Video call"}
                    data={isSearchMeet ? virtuallyMetDataSearch : pagingData2}
                    more={isMore}
                    fetchMoreData={fetchMorePage}
                    searchHandler={deBoundeMeet}
                    setLoading={meetSetLoading}
                    loading={meetLoader}
                    type='Meet'
                    isSearch={isSearchMeet}
                    loader={meetfetchLoader}
                    closePopUp={closeMeetpopUp}
                    searchMore={meetSearchMore}
                />
            )}
        </Offcanvas>
    </>
    )
}
export default RatingsContainer
