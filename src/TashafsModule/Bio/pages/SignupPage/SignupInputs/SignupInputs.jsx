import React from "react";
import NameInputs from "./NameInputs";
import ContactInputs from './ContactInputs';
import SocialInputs from './SocialInputs'

const SignupInputs = ({
  firstNameError,
  phoneError,
  website1error,
  formData,
  setFormData,
  setPhoneError,
  setFirstNameError,
  setWebsite1error,
  website2error,
  setWebsite2error,
  logoSocial,
}) => {

  return (
    <>
      <NameInputs
        formData={formData}
        setFormData={setFormData}
        firstNameError={firstNameError}
        setFirstNameError={setFirstNameError}
      />

      <ContactInputs
        formData={formData}
        setFormData={setFormData}
        phoneError={phoneError}
        setPhoneError={setPhoneError}
      />

      <SocialInputs
        formData={formData}
        setFormData={setFormData}
        website1error={website1error}
        setWebsite1error={setWebsite1error}
        website2error={website2error}
        setWebsite2error={setWebsite2error}
        logoSocial={logoSocial}
      />
    </>
  );
};
export default SignupInputs;
