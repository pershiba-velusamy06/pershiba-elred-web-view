import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ShareCardShimmerData = ({baseColor}) => {
    return (
        <div className='middle_section'>
            <Skeleton circle height={124} width={124} baseColor={baseColor} />
            <Skeleton height={10} width={154} baseColor={baseColor} style={{ marginTop: "40px" }} />
            <Skeleton height={7} width={70} baseColor={baseColor} style={{ marginTop: "15px" }} />
            <Skeleton height={7} width={79} baseColor={baseColor} style={{ marginTop: "35px" }} />
            <Skeleton height={7} width={121} baseColor={baseColor} style={{ marginTop: "12px", marginBottom: "10px" }} />
            <div className="circle_icons">
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
            </div>
            <div className="circle_icons">
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
                <Skeleton circle height={30} width={30} baseColor={baseColor} />
            </div>
            <Skeleton height={7} width={101} baseColor={baseColor} style={{ marginTop: "35px" }} />
            <div className="square_icons">
                <Skeleton height={30} width={30} baseColor={baseColor} />
                <Skeleton height={30} width={30} baseColor={baseColor} />
                <Skeleton height={30} width={30} baseColor={baseColor} />
                <Skeleton height={30} width={30} baseColor={baseColor} />
                <Skeleton height={30} width={30} baseColor={baseColor} />
            </div>
        </div>
    )
}

export default ShareCardShimmerData
