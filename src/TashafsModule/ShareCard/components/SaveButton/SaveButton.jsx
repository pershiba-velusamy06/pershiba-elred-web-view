import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import './savebutton.scss'

const SaveButton = ({ userDetail , cardButton }) => {
  const linkRef = useRef(null);

  const cardSaved = () => {
    linkRef.current.click();
  }

  return (
    <div className= {cardButton === 'miniCard' ? "save_button_mini" :  "save_button no-cursor"}>
      <Button variant="outline" onClick={cardSaved}>Save card</Button>
      <a ref={linkRef} href={userDetail?.vCard} style={{ display: 'none' }}></a>
    </div>
  );
};

export default SaveButton;
