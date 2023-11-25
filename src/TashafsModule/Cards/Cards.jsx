import {useState, Offcanvas, close, cardUser, logo, share, CardDataContainer, CardBottomPopups} from './ImportsCards'

const Cards = ({ show, handleClose, data, tint, wholeData, userCode, isLive, productionUrl }) => {

  const { firstname, lastname, location, title, dpURL, cardInfo } = data;
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  const [webEnable, setWebEnable] = useState(false);
  const [locationEnable, setLocationEnable] = useState(false);
  const [pop, setPop] = useState(false);

  const newAddress = `${location?.city?.length > 0 ? location?.city + "," : ""} ${location?.country}`

  const cardDataContainerProps = {
    firstname, handleClose, close, tint, cardInfo, share, dpURL, lastname, title, newAddress,
    data, wholeData, setEnable, setLocationEnable, setOpen, setOpenMail, setPop, setWebEnable, logo, cardUser, 
    userCode, isLive, productionUrl
  }

  const CardBottomPopupsProps = {
    open, setOpen, data, enable, setEnable, openMail, setOpenMail, locationEnable, setLocationEnable,
    webEnable, setWebEnable
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} 
        className={`${enable || openMail || webEnable || locationEnable ? "popup-filter-bg test" : "test"}`} id="canvas">
        <CardDataContainer {...cardDataContainerProps} />
      </Offcanvas >
      <CardBottomPopups {...CardBottomPopupsProps} />
    </>
  );
};

export default Cards;
