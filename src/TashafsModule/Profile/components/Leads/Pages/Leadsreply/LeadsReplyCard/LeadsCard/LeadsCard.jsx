import React, { useState } from 'react'
import LeadscardBottom from './LeadscardBottom'
import LeadsCardProfile from './LeadsCardProfile'
import moment from 'moment'
import noImageLeads from '../../../../../../../../assets/images/leads-no-img-background.png'
import upArrow from '../../../../../../../../assets/images/upArrow.png';
import downArrow from '../../../../../../../../assets/images/downarrow.png';
function LeadsCard({ data, setShowVerifiedPopup }) {
  const [Collapse, setCollapse] = useState(false)

  return (
    <div className="leads-reply-card">
      <div
        className="card_wrapper"
        style={data?.backgroundImages.length > 0 ? {
          "background": ` linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 50%), url(${data?.backgroundImages?.[0]}),no-repeat`
        } : { "background": `url(${noImageLeads})` }}
      >
        <LeadsCardProfile data={data} setShowVerifiedPopup={setShowVerifiedPopup} />
      
          <div className="profile-card-border-bottom"></div>
          <div className='leadscreatedDate' >{`Posted on ${moment(data?.leadCreatedAt).format('ddd, DD MMM YYYY')}`}</div>
          <LeadscardBottom data={data} />
   

      </div>
      {/* <div className={Collapse?'collapse-img-collapse':'Collapse-img'}>
        <img  className='collapse-inner-image' src={Collapse ? upArrow : downArrow} alt='down' 
        // onClick={() => setCollapse(!Collapse)} 
        />
      </div> */}

    </div>
  )
}

export default LeadsCard
