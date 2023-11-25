import {UserDetails, CardThumbnail, Share, Leads, NoLeads} from './ImportsUpperProfileData'

const UpperProfileData = ({data, miniCardData, baseColor, secondaryColor, tint, wholeData, rgba, userCode,
    leadsData, isLive, productionUrl ,getCOuntofLeads, setShowVerifiedPopup }) => {
     
    return (
        <>
            <UserDetails
                profileImg={data?.result?.[0]?.dpURL}
                firstName={data?.result?.[0]?.firstname}
                lastName={data?.result?.[0]?.lastname}
                designation={data?.result?.[0]?.title}
                location={data?.result?.[0]?.location}
                adhaar={data?.result?.[0]?.aadhaarVerifiedStatus}
                setShowVerifiedPopup={setShowVerifiedPopup}
                userCode={data?.result?.[0]?.userCode}
            />
            <CardThumbnail
                data={miniCardData}
                baseColor={baseColor}
                secondaryColor={secondaryColor}
                tint={tint}
                wholeData={wholeData}
                profileData={data}
                userCode={userCode}
                isLive={isLive}
                productionUrl={productionUrl}
            />
            <Share rgba={rgba} url={data?.result?.[0]?.shareProfileURL}/>
           {getCOuntofLeads>0? <Leads rgba={rgba} userCode={userCode} leadsData={leadsData} isLive={isLive} productionUrl={productionUrl}/> 
           : <NoLeads rgba={rgba} />}
        </>
    )
}

export default UpperProfileData
