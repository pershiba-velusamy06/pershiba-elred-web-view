import React from "react";
import InputField from "../../../components/InputField/InputField";
import InputFieldDisabled from "../../../components/InputFieldDisabled/InputFieldDisabled";
import { handleNumberChange } from "../../../../../globalFunctions";
import { handleInputBlur } from "../../../../../globalFunctions";

const PhoneInput = ({ formData, setFormData, phoneError, setPhoneError }) => {

  const handlePhoneChange = (value) => {
    handleNumberChange(value, setPhoneError, formData, setFormData);
  }

  return (
    <>
      <div className="phone-label">Phone Number</div>
      <div className="phone-field">
        <div className={`${phoneError ? "phone-country-code country-code-with-error" : "phone-country-code"}`}>
          <InputFieldDisabled
            value="+91"
            disabled={true}
          />
        </div>
        <div className="phone-number-field">
          <InputField
            type="number" 
            pattern="[0-9]*"
            inputMode="numeric" 
            placeholder={"Enter phone number"}
            required={true}
            value={formData?.phone_number}
            onChange={handlePhoneChange}
            error={phoneError}
            errorMsg={"Enter valid phone number"}
            onBlur={() => handleNumberChange(formData?.phone_number, setFormData, phoneError, setPhoneError)}
            inputBlur={() => formData?.phone_number.length < 10 ? setPhoneError("Enter valid phone number") : setPhoneError("")}
            inputType="phone"
          />
        </div>
      </div>
    </>
  );
};
export default PhoneInput;
