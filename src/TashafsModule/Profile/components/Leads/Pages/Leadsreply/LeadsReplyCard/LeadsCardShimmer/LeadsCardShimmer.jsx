import React from 'react'
import './leadscardshimmer.scss'
import Skeleton from 'react-loading-skeleton'
import back from '../../../../../../../../assets/images/backpage.svg'
import downloadIcon from '../../../../../../../../assets/images/downloads.svg'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'





const LeadsCardShimmer = () => {
  const [downloadLoader, setdownloadLoader] = useState(true)
  const [backLoader, setBackLoader] = useState(true)
  const color = "#D6DAE5";
  return (
    <div className='leads_card_shimmer'>
      <div className='leads_card_shimmer_title'>
        <span className='left_title'>
        <Spinner animation="border" variant="dark" size="sm" className={backLoader ? 'show-img-loader spiner-margin1' : 'hide-img-loader'}/>

          <img src={back} alt=""  
                   className={!backLoader? 'show-img-loader leads-reply-back1' : "hide-img-loader"}
            onLoad={() => setBackLoader(false)}/>
          <span className='send'>Send a reply</span>
        </span>
        <div className='right_title'>
        <Spinner animation="border" variant="light" size="sm" className={downloadLoader ? 'show-img-loader download-elred-Spinner' : 'hide-img-loader'} />

          <img src={downloadIcon}   className={!downloadLoader ? 'show-img-loader download-elred-icon' : "hide-img-loader"} alt=""   onLoad={() => setdownloadLoader(false)}/>
          <span className='download'>Download elRed</span>
        </div>

      </div>

      <div className='leadscard'>
        <div className='top_leadscard'>
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

        {/* BORDER */}
        <hr id='shimmer_hr_leads' />

        {/* MAIN CONTENT BOX */}
        <div className="leads_content_shimmer">
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
      {/* <div className={`input_wrapper`}>
        <div className={`input_comp`}>
          <div className="input_emoji">
            <img src={emoji} alt="" />
            <input type="text" placeholder="Type here..." disabled />
          </div>
          <img
            src={sendDisable}
            alt=""
          />
        </div>
      </div> */}
    </div>
  )
}

export default LeadsCardShimmer
