import React from 'react'
import './WorkEducationShimmer.scss'
import Skeleton from 'react-loading-skeleton'

const WorkEducationShimmer = () => {
  return (
    <div className='we_shimmer'>
      <WEInnerShimmer/>
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
      <WEInnerShimmer/>
      </div>
    </div>
  )
}

const WEInnerShimmer = () => {
    return(
        <>
              <Skeleton width={84} height={17} borderRadius={13} baseColor={'#CFD4DF'} style={{marginBottom:"20px"}}/>
              <Skeleton width={303} height={10} borderRadius={13} baseColor={'#CFD4DF'} style={{marginRight:"10px"}}/>
              <Skeleton width={182} height={10} borderRadius={13} baseColor={'#CFD4DF'} style={{marginRight:"10px"}}/>
              <Skeleton width={93} height={10} borderRadius={13} baseColor={'#CFD4DF'} style={{marginRight:"10px"}}/>

        </>
    )
}
export default WorkEducationShimmer
