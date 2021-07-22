import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import {
  FB_URL,
  INSTA_URL,
  PHONE_URL,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from "../constants/ContactUsConstants";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href={PHONE_URL}>
            <FaPhone />
          </a>
          <a href={FB_URL}>
            <FaFacebook />
          </a>
          <a href={TELEGRAM_URL}>
            <FaTelegram />
          </a>
          <a href={WHATSAPP_URL}>
            <FaWhatsapp />
          </a>
          <a href={INSTA_URL}>
            <FaInstagram />
          </a>
        </div>

        <div className="footer-left">
          {/* <p className="footer-links">
            <a className="link-1" href="#">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">FAQ</a>

            <a href="#">Contact</a>
          </p> */}

          <p>Lepton Inc. &copy; 2021</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
