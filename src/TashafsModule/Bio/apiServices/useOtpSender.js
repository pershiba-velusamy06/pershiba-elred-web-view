import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useOtpSender = (isLive, productionUrl) => {
  const [sending, setSending] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState('');
  const [contactMethod, setContactMethod] = useState('whatsapp');
  const [message, setMessage] = useState('');
  const [needId, setNeedId] = useState('');
  const [show, setShow] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const navigate = useNavigate()

  const getOtp = () => {
    setSending(true);
    if (phone !== '' && firstName !== '') {
      axios
        .post(`${isLive ? productionUrl : ''}/webViewSignUp`, {
          phoneNumber: phone,
          hashId: 'elRed',
        })
        .then((res) => {
          navigate(`/validate-otp?needId=${needId}`, {
            state: {
              data: {
                firstname: firstName,
                lastname: lastName,
                phoneNumber: phone,
                socialMediaLinks: socialMediaLinks,
                contactMethod: contactMethod,
                responseDescription: message,
                transactionId: res?.data?.result[0]?.transactionId,
              },
            },
          });
          setSending(false);
        })
        .catch((error) => {
          if (error?.response?.data?.errorCode === -1) {
           // console.log(error)
          } else if (error?.response?.data?.errorCode === 2) {
            setShow(true);
          }
          setSending(false);
        });
    } else if (firstName === '') {
      toast.error('Enter the First Name');
      setFirstNameError(true);
      setSending(false);
    } else if (phone === '') {
      toast.error('Enter the Phone Number');
      setPhoneError(true);
      setSending(false);
    } else {
      setPhoneError(false);
      setFirstNameError(false);
      setSending(false);
    }
  };

  return {
    sending,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    socialMediaLinks,
    setSocialMediaLinks,
    contactMethod,
    setContactMethod,
    message,
    setMessage,
    needId,
    setNeedId,
    show,
    setShow,
    firstNameError,
    phoneError,
    getOtp,
  };
};

export default useOtpSender;
