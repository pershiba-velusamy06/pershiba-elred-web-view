import React from 'react'
import Skeleton from 'react-loading-skeleton'

const NeedsCardBottomShimmer = ({color}) => {
  return (
    <div className='needscard'>
        <div className='top_needscard'>
          <div className='left_side'>
            <div className='dp'>
              <Skeleton circle width={38} height={38} baseColor={color} />
            </div>
            <div className='name_designation'>
              <Skeleton width={78} height={11} baseColor={color} className='name_shimmer' />
              <Skeleton width={114} height={7} baseColor={color} className='designation_shimmer' />
            </div>
          </div>
          <div className='right_side'>
            <Skeleton width={78} height={20} baseColor={color} borderRadius={20} />
          </div>
        </div>

        <hr id='shimmer_hr_needs' />

        <div className="needs_content_shimmer">
          <div className='top_shim'>
            <Skeleton width={89} height={22} borderRadius={40} baseColor=' #e1e4eb' />
          </div>
          <div>
            <Skeleton width={187} height={11} borderRadius={40} baseColor={color} />
            <Skeleton width={231} height={11} borderRadius={40} baseColor={color} />
            <Skeleton width={254} height={11} borderRadius={40} baseColor={color} />
            <Skeleton width={254} height={11} borderRadius={40} baseColor={color} />
            <Skeleton width={187} height={11} borderRadius={40} baseColor={color} />
            <Skeleton width={231} height={11} borderRadius={40} baseColor={color} />
          </div>
        </div>
      </div>
  )
}

export default NeedsCardBottomShimmer
