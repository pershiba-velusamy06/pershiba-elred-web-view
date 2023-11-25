import {useState, back, searchRed, searchIcon, closeIcon, useNavigate, Spinner } from './ImportsAwardsHeader';
import { goBackfromSearch, searchAwards, searchClearAwards } from '../AwardsFunction';

export const AwardsHeader = ({ SearchFunction, searchText, setSearchText, setStartLoad, isOpenSearch,openandCloseSearch }) => {
    const [sendBlueLoader, setSendBlueLoader] = useState(true)
    const [searchRedLoader, setSearchRedLoader] = useState(true)
    const navigate = useNavigate();


    return (
        <>
            <div className={isOpenSearch ? "header-without_Border" : " view-all-header"}>
                <Spinner animation="border" variant="dark" size="sm" className={sendBlueLoader ? 'show-img-loader back-icon-awar-spinner' : 'hide-img-loader'} />
                <div className="view-back1" onClick={() => goBackfromSearch(isOpenSearch, openandCloseSearch, navigate, setStartLoad, setSearchText, SearchFunction)}>
                    <img src={back} alt="" className={!sendBlueLoader ? 'show-img-loader' : 'hide-img-loader'} onLoad={() => setSendBlueLoader(false)} />
                </div>
                {!isOpenSearch ?
                    <>
                        <div className="title1">My awards & certificates</div>
                        <div className='search-icon' onClick={() => openandCloseSearch(!isOpenSearch)}>
                            <Spinner animation="border" variant="danger" size="sm" className={searchRedLoader ? 'show-img-loader' : 'hide-img-loader'} />
                            <img src={searchRed} className={!searchRedLoader ? 'show-img-loader' : 'hide-img-loader'} alt="" onLoad={() => setSearchRedLoader(false)} />
                        </div>
                    </>
                    : <>
                        <div className='searchbar-main'>
                            <img className='Search-img' src={searchIcon} alt="" />
                            <input type='text' value={searchText}
                                placeholder='Search by Title/Issued date/Issued by' onChange={(e) => searchAwards(e, setSearchText, setStartLoad, SearchFunction, searchText)} />
                            {searchText.length > 0 && <img className='close-img' src={closeIcon} alt="" onClick={(e) => searchClearAwards("", setSearchText, setStartLoad, SearchFunction)} />}
                        </div>
                    </>}
            </div>
        </>

    )
}
