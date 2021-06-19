import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/lurk.lk/">
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/lurk.lk_official">
            <FaTelegram />
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/94772421363">
            <FaWhatsapp />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/lurk.lk_official">
            <FaInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+94 77 242 1363">
            <FaPhoneAlt />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="#">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">FAQ</a>

            <a href="#">Contact</a>
          </p>

          <p>lepton &copy; 2021</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
