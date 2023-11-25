import React, {  useState } from 'react'
import closeIcon from '../../../../../../assets/images/x.svg'
import {searchRatinghandler,closePopUphandler, SearchHandler} from '../../ratingsFunctions'
import { Spinner } from 'react-bootstrap'
import search from '../../../../../../assets/images/search.svg'
const RatingsPopupSearchbar = ({ close, closeBtn, count, msg, borderLine, type, searchHandler, setLoading, setSearchText, searchText, closePopUp }) => {
    const [closeIconLoader, setCLoseIconLoader] = useState(true)
    const [searchIconLoader, setSearchIconLoader] = useState(true)

    return (
        <div className="ratings-header">
            <div className="ethical">
                <div className="count-div">
                    <span className="count">{count}</span> {msg}
                </div>
                <Spinner animation="border" variant="danger" size="sm" className={closeIconLoader ? 'showing-img-loader close-icon-loader' : 'hiding-img-loader'} />
                <div onClick={() => closePopUphandler(close,setSearchText,closePopUp)} className="close-button">
                    <img src={closeBtn} alt=""
                        className={!closeIconLoader ? 'showing-img-loader' : "hiding-img-loader"}
                        onLoad={() => setCLoseIconLoader(false)} />
                </div>
            </div>
            {count !== 0 && (
                <div className="search-ratings">
                    <Spinner animation="border" variant="secondary" size="sm" className={searchIconLoader ? 'showing-img-loader close-icon-loader' : 'hiding-img-loader'} />
                    <img  src={search} alt=""    className={!searchIconLoader ? 'showing-img-loader SearchIconsvg' : "hiding-img-loader"}  onLoad={() => setSearchIconLoader(false)}  />
                    <img src={borderLine} alt="" />
                    <input type="text" value={searchText}
                        placeholder="Search by Name/Title" onChange={(e) => SearchHandler(e,setSearchText,setLoading,searchHandler,type,searchText)} />
                    {searchText.length > 0 && <img className='close-img' src={closeIcon} alt=""
                        onClick={() => searchRatinghandler("",setSearchText,setLoading,searchHandler,type,true)} />
                    }
                </div>
            )}
        </div>
    )
}

export default RatingsPopupSearchbar
