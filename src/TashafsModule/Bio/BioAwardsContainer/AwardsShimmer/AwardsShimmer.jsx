import React from 'react'
import './AwardsShimmer.scss'
import Skeleton from 'react-loading-skeleton'

const AwardsShimmer = () => {
  return (
    <div className='awards_shimmer'>
      <InnerShimmer width={166}/>
      <InnerShimmer width={166}/>
      <InnerShimmer width={209}/>
    </div>
  )
}

const InnerShimmer = ({width}) => {
    return(
        <div className="innerAwardsShimmer">
            <Skeleton width={44} height={44} circle baseColor={'#CFD4DF'} style={{marginRight:"10px"}}/>
            <div className="linner">
                <Skeleton width={width} height={10}  baseColor={'#CFD4DF'} borderRadius={13}/>
                <Skeleton width={158} height={7} borderRadius={13} baseColor={'#CFD4DF'}/>
            </div>

        </div>
    )
}

export default AwardsShimmer
