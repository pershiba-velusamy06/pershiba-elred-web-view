import React from "react";
import InputField from "../../../components/InputField/InputField";
import { handleBlur } from "../../../bioGlobalFunctions";

const NameInputs = ({
  formData,
  setFormData,
  firstNameError,
  setFirstNameError,
}) => {

  return (
    <>
      <InputField
        label={"First Name"}
        placeholder={"Enter your first name"}
        required={true}
        value={formData?.f_name}
        onChange={(e) => {
          const input = e.replace(/[^A-Za-z\s]/ig, '');
          setFormData({ ...formData, f_name: input.slice(0, 12) })
        }}
        error={firstNameError && (!formData?.f_name || formData?.f_name?.charAt(0) === ' '|| formData?.f_name?.length<3 )}
        errorMsg={firstNameError || (formData?.f_name?.charAt(0) === ' ' ? "First letter should be an alphabet" :  formData?.f_name?.length<3? "Name should be of minimum 3 letters":   "Enter valid name")}
        max={12}
        onBlur={() => handleBlur(formData?.f_name, firstNameError, setFirstNameError)}
        inputBlur={() => formData?.f_name?.charAt(0) === ' ' ? setFirstNameError("First letter should be an alphabet") :  formData?.f_name?.length < 3 ? setFirstNameError("Name should be of minimum 3 letters") : setFirstNameError("")}
      />
      <div className="name_word_count">{formData?.f_name?.length}/12</div>
      <InputField
        label={"Last Name (optional)"}
        placeholder={"Enter your last name"}
        required={false}
        value={formData?.l_name}
        onChange={(e) => {
          const input = e.replace(/[^A-Za-z\s]/ig, '');
          setFormData({ ...formData, l_name: input })
        }}      
        max={45}
        onBlur={() => handleBlur(formData?.l_name, firstNameError, setFirstNameError)}
      />
    </>
  );
};
export default NameInputs;
