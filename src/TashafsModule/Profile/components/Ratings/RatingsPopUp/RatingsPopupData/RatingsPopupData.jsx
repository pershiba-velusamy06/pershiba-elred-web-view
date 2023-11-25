import InfiniteScroll from 'react-infinite-scroll-component'
import RedLoader from '../../../RedLoader/RedLoader'
import bluetick from "../../../../../../assets/images/ic_round-verified.svg";

import RatingsDataInner from './RatingsDataInner';
const RatingsPopupData = ({ data, fetchMoreData, more,  loader,searchMore }) => {

    return (
        <InfiniteScroll
            dataLength={data?.length}
            next={fetchMoreData}
            hasMore={more||searchMore}
            loader={ loader && <div className="rating-loader"><RedLoader /></div>}
            scrollableTarget="ratingsMember"
        >
            <div className="scrollingDiv" id="ratingsMember">
                {data?.map((item, id, arr) => (
                   <RatingsDataInner  
                   item={item}
                   bluetick={bluetick}
                   id={id}
                   arr={arr}
                   />
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default RatingsPopupData
