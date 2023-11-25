import React, { useEffect, useState } from 'react'
import { goBackToNeeds } from '../../needsGlobalFunctions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import back from '../../../../../../assets/images/backpage.svg'
import downloadIcon from '../../../../../../assets/images/downloads.svg'
import {downloadElred} from '../../../../../../globalFunctions'
import { Spinner } from 'react-bootstrap';

const TopNavigation = ({goBack, downloadUrl }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const userCode = searchParams.get("userCode");
    const [logoLoader, setLogoLoader] = useState(true)
    const [backLoader, setBackLoader] = useState(true)

    const navigate = useNavigate()
     return (
        <div className='needsCard_header'>
            <div className='left'>
                <Spinner animation="border" variant="dark" size="sm" className={backLoader ? 'show-img-loader needs-top-margin-loader' : 'hide-img-loader'} />
                <img src={back} alt="" onClick={()=>goBackToNeeds(navigate, userCode)} className={backLoader ? 'hide-img-loader' : 'show-img-loader needs-top-margin'} onLoad={()=>setBackLoader(false)}/>
                <div className='title'>Send a reply</div>
            </div>
            <div className='right' onClick={downloadElred}>
                <Spinner animation="border" variant="light" size="sm" className={logoLoader ? 'show-img-loader' : 'hide-img-loader'} id='spinner'/>
                <img src={downloadIcon} className={logoLoader ? 'hide-img-loader' : 'show-img-loader'}  alt="" onLoad={()=>setLogoLoader(false)}/>
                <div className='title'>Download elRed</div>
            </div>
        </div>
    )
}

export default TopNavigation
