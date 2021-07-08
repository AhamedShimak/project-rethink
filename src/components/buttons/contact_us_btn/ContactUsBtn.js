import React from "react";
import Button from '@material-ui/core/Button';
import { ImWhatsapp } from "react-icons/im";
import './ContactUsBtn.css';
const ContactUsBtn = () => {
  return (
    <>
   
    <Button
    size="small"
        variant="contained"
       
        startIcon={<ImWhatsapp/>}
        className='ContactUsBtn'
      >
       <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/94772421363"
        >
        Contact Us
      </a>
      </Button>
    </>
  );
};

export default ContactUsBtn;
