import React from "react";
import TopNavigation from "../../TopNavigation/TopNavigation";
import ProfileTop from "../../ProfileTop/ProfileTop";
import InnerContentDiv from "../../InnerContentDiv/InnerContentDiv";
import BackgroundFilter from "../../../../BackgroundFilter/BackgroundFilter";

const NeedsCardFixedTop = ({needData}) => {
  return (
    <div className="fixed_top">
      <TopNavigation downloadUrl={needData?.needDetails?.downloadNeedURL} />
      <div
        className="card_wrapper"
        style={{
          background: `linear-gradient( rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${needData?.needDetails?.profileBannerImageURL})`,
        }}
      >
        <div className="bg-images-filter" >
          <ProfileTop data={needData?.needDetails} />
          <div className="divider-padding-top"></div>
          <hr className="line" />
          <div className="divider-padding-bottom"></div>
          <InnerContentDiv data={needData?.needDetails} />
        </div>

          {needData?.needDetails?.needOwnerDetails?.colorFilter?.length !== 0 ? (
              <BackgroundFilter filterValues={needData?.needDetails?.needOwnerDetails?.colorFilter?.toString()} />
          ) : null}
      </div>
    </div>
  );
};

export default NeedsCardFixedTop;
