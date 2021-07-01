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
const CircleMenu = () => {
  const [show, setShow] = useState(false);
  const handler = () => {
    setShow(!show);
    autoOff();
  };
  let autoOff = () => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
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
          href="tel:+94 77 242 1363"
          className="menu-item  fas fa-phone">
          <FaPhone />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/lurk.lk/"
          className="menu-item fab fa-facebook-f">
          <FaFacebook />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/94772421363"
          className="menu-item fab fa-whatsapp">
          <FaWhatsapp />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/lurk.lk_official"
          className="menu-item fab fa-instagram">
          <FaInstagram />{" "}
        </a>
      </menu>
    </div>
  );
};

export default CircleMenu;
