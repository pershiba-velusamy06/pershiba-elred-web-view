import Skeleton from 'react-loading-skeleton'
import React from 'react'
import styles from './LeadViewShimmer.module.scss'
export const LeadViewShimmer = () => {
    return (
        <div className={styles.skeleton_wrapper}>
            <div >
                <Skeleton baseColor="#FFFFFF66" highlightColor="#D6DAE5" className={styles.headerLinvisible} width={349} height={3} />     
            </div>
            <div className={styles.skeleton_sub_container}>
                <div className={styles.circle_style} >
                    <div>
                        <Skeleton circle width={30} height={30} />
                        <div className={styles.line1}>
                            <Skeleton borderRadius={40} width={78} height={11} />
                        </div>
                        <div className={styles.line2}>
                            <Skeleton borderRadius={40} width={114} height={7} />
                        </div>
                    </div>
                </div>
                <div className={styles.line3}>
                        <Skeleton className={styles.border_skel} baseColor ='#E1E4EB' borderRadius={20} width={52} height={33} />
                    </div>
                <div>
                    <div className={styles.line_Wrapper}>
                        <div className={styles.big_line}>
                            <Skeleton borderRadius={40} width={224} height={17} />
                        </div>
                        <div className={styles.Big_line2}>
                            <Skeleton borderRadius={40} width={251} height={17} />
                        </div>
                        <div className={styles.Big_line3}>
                            <Skeleton borderRadius={40} width={328} height={7} />
                            <Skeleton borderRadius={40} width={328} height={7} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



