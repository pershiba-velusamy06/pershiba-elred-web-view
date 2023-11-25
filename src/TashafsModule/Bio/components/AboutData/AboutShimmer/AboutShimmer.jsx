import React from 'react'
import Skeleton from 'react-loading-skeleton'
import shimmer from '../../../../../assets/images/shimmer.png'

const AboutShimmer = ({color}) => {
  return (
    <div style={{margin:'0 20px', marginTop:'8px'}}>
      <Skeleton width={72} height={17} borderRadius={13} baseColor={color} style={{marginBottom:"10px"}}/>
      <Skeleton width={325} height={10} borderRadius={6} baseColor={color}/>
      <Skeleton width={276} height={10} borderRadius={6} baseColor={color}/>
      <Skeleton width={325} height={10} borderRadius={6} baseColor={color}/>
      <Skeleton width={303} height={10} borderRadius={6} baseColor={color} style={{marginBottom:"30px"}}/>

      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Skeleton width={84} height={17} borderRadius={13} baseColor={color}/>
        <Skeleton width={84} height={10} borderRadius={13} baseColor={color}/>
      </div>
      <div className='resume-shimmer'>
        <Skeleton width={48} height={48} baseColor={color} circle style={{marginRight:"20px"}}/>
        <Skeleton width={72} height={8} baseColor={color}/>
      </div>
      <hr className='full-hr'/>
    </div>
  )
}

export default AboutShimmer
