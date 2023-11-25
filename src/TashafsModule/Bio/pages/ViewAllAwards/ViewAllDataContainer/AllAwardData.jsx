import React from 'react'
import RedLoader from '../../../../Profile/components/RedLoader/RedLoader'
import InfiniteScroll from 'react-infinite-scroll-component'
import { calcTextLength } from '../../../../../globalFunctions'

function AllAwardData({data,fetchMoreData,hasMore,searchHasMore,paginateLoader,viewAward,userCode,navigate,bluetick}) {
      return (
    <>
        <InfiniteScroll
                        dataLength={data.length}
                        next={fetchMoreData}
                        hasMore={hasMore||searchHasMore}
                        loader={paginateLoader&&<RedLoader />}
                         height={"93vh"}
                        className="awards-scrolling" >
                            
                        {data?.map((item, id) => (
                            <>
                                <div
                                    className="list-item"
                                    onClick={() => viewAward(item, userCode, navigate)}
                                    key={id} >
                                    <div className="logo-div">
                                        <img src={item?.awardIconURL} alt="" />
                                    </div>
                                    <div className="description-div">
                                        <div className="title-des">{calcTextLength(item?.awardTitle.length, item?.awardTitle, 'name')}</div>
                                        <div className="subtitle-div">
                                            <div className={item?.issuedOrgVerifiedStatus?"subtitle":'subtitle subtitle_withoutBlue'}>Issued by : {calcTextLength(item?.issuedBy.length, item?.issuedBy)}</div>
                                            <div className="bluetick">
                                                {item?.issuedOrgVerifiedStatus && (
                                                    <img src={bluetick} alt="" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className={data?.length - 1 === id ? "hr-last" : "hr-middle"} />
                            </>
                        ))}
                    </InfiniteScroll>
    </>
  )
}

export default AllAwardData
