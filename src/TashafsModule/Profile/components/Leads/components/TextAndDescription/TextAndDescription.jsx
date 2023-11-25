import FormatTextForTitle from '../LeadsCards/FormatTextForTitle';
import {  Spinner, locationIcon, calcTextLength, formatPricing, handleMapClick, FormatText } from './ImportTextAndDescription'

const TextAndDescription = ({ data, locationLoader, setLocationLoader }) => {
  const formattedPricing = formatPricing(
    data?.pricingRange?.minValue,
    data?.pricingRange?.maxValue,
    data?.pricingRange?.currency
  );
 
  return (
    <div className="textanddesccontainer">
      {/* <div className="titletext"> */}
         <FormatTextForTitle data={data?.leadTitle?.trim()} classStyle={"titletext"}/>
         {/* </div> */}
      <div className={data?.leadsDescription === '' ? "" : "descriptiontext"}> <FormatText data={data?.leadsDescription?.trim()} /></div>
      <div className="locationandamountcontainer">
        <div className="leadslocation" >
          <Spinner animation="border" variant="#fff" size="sm" className={locationLoader ? 'show-img-loader-location' : 'hide-img-loader'} />
          <img
            className={ locationLoader ? 'hide-img-loader' : 'leadslocationicon'}
            src={locationIcon}
            alt="location"
            onLoad={()=>setLocationLoader(false)}
          />
          <span className={data?.pricingRange?.currency === '' ? 'leadsNoPrice' : "leadslocationtext"} onClick={() => handleMapClick(data?.location?.latitude, data?.location?.longitude)}>
            {typeof (data?.location) === 'string' ? calcTextLength(35, data?.location) : 
             ` ${calcTextLength(35, data?.location?.fullAddress)}`}
          </span>
        </div>
        <div className="pricecontainer">
          <span className= 'currencysign'>{data?.pricingRange?.currency}</span>
          <span className='leadsamount'>{formattedPricing}</span>
        </div>
      </div>
      <div className="leadscategory">{data?.industry?.value}</div>
    </div>
  );
};

export default TextAndDescription;
