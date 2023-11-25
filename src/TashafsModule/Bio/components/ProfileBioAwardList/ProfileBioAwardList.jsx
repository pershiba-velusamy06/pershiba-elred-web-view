import bluetick from "../../../../assets/images/blue_tick.svg"
import { calcTextLength } from "../../../../globalFunctions"

const ProfileBioAwardList = ({ item, viewAward, userCode, navigate }) => {
    return (
        <div className="list-item"
            onClick={() => viewAward(item, userCode, navigate)} >
            <div className="logo-div">
                <img src={item?.awardIconURL} alt="" />
            </div>
            <div className="description-div">
                <div className="title1">{item?.awardTitle}</div>
                <div className="subtitle-div">
                    <div className={item?.issuedOrgVerifiedStatus ? "subtitle1" : "subtitle1 subtitle_withoutBlue1"}>Issued by : {calcTextLength(item?.issuedBy.length, item?.issuedBy)}</div>
                    <div className="bluetick">
                        {item?.issuedOrgVerifiedStatus && (
                            <img src={bluetick} alt="" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBioAwardList