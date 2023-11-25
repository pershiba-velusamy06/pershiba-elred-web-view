import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import AddressPopup from '../../AddressPopup/AddressPopup'

const AddressPopupData = ({locationEnable, setLocationEnable, data}) => {
    return (
        <Offcanvas
            show={locationEnable}
            className="bottomPopSmall"
            placement="bottom"
            onClick={() => setLocationEnable(false)}
            
        >
            <AddressPopup
                data={data}
                setLocationEnable={setLocationEnable}
                status={data?.cardInfo?.[0]?.addressDisplayStatus}
            />
        </Offcanvas>
    )
}

export default AddressPopupData
