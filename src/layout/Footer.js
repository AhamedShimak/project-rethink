import React from 'react'
import './Footer.css'
import { FaFacebook, FaPhone,FaTelegram ,FaWhatsapp,FaInstagram} from "react-icons/fa";

function Footer() {
    return (
        <>
      
		<footer className="footer-distributed">

			<div className="footer-right">
				<a href="#"><FaPhone/></a>
				<a href="#"><FaFacebook/></a>
				<a href="#"><FaTelegram/></a>
				<a href="#"><FaWhatsapp/></a>
				<a href="#"><FaInstagram/></a>
			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="#">Home</a>


					<a href="#">About</a>

					<a href="#">FAQ</a>

					<a href="#">Contact</a>
				</p>

				<p>lepton &copy; 2021</p>
			</div>

		</footer>
        </>
    )
}

export default Footer
