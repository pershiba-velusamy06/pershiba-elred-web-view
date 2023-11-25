import {useState, logo, cardUser, useSearchParams, ShareCardShimmer, ErrorPage, useShareCardFetch, 
  ShareCardContainer, ShareCardPopups} from './ImportsShareCard'

const ShareCard = ({ productionUrl, isLive }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [webEnable, setWebEnable] = useState(false);
  const [locationEnable, setLocationEnable] = useState(false);

  const { loading, userDetail, cardDetail, data, error } = useShareCardFetch(isLive, productionUrl, userCode);

  const shareCardContainerProps = {
    userDetail, cardDetail, data, setEnable, setOpen, setOpenMail,
    setLocationEnable, setWebEnable, logo, cardUser
  }
  const shareCardPopupsProps = {
    open, setOpen, userDetail, enable, setEnable, openMail,
    setOpenMail, locationEnable, setLocationEnable, webEnable, setWebEnable
  }

  return (
    <div className="share-card">
      {
        loading ? <ShareCardShimmer /> : (error == false ? <ErrorPage /> :
          <>
            <ShareCardContainer {...shareCardContainerProps} />
            <ShareCardPopups {...shareCardPopupsProps} />
          </>)
      }
    </div>
  );
};

export default ShareCard;
