import React, { useState } from "react";
import "./CircleMenu.css";
import {
  FaFacebook,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import {
  FB_URL,
  INSTA_URL,
  PHONE_URL,
  WHATSAPP_URL,
} from "../../constants/ContactUsConstants";
const CircleMenu = () => {
  const [show, setShow] = useState(false);
  const handler = () => {
    setShow(!show);
    return autoOff();
  };
  let autoOff = () => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <div
      id="circularMenu"
      className={show ? "circular-menu active" : "circular-menu"}
      onMouseLeave={() => setShow(false)}>
      <div className="floating-btn" onClick={handler}>
        <RiCustomerService2Fill />
      </div>

      <menu className="items-wrapper">
        <a
          target="_blank"
          rel="noreferrer"
          href={PHONE_URL}
          className="menu-item  fas fa-phone">
          <FaPhone />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={FB_URL}
          className="menu-item fab fa-facebook-f">
          <FaFacebook />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={WHATSAPP_URL}
          className="menu-item fab fa-whatsapp">
          <FaWhatsapp />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={INSTA_URL}
          className="menu-item fab fa-instagram">
          <FaInstagram />{" "}
        </a>
      </menu>
    </div>
  );
};

export default CircleMenu;
