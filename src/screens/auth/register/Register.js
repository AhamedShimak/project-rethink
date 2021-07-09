import React from 'react';
import './Register.css';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaUserAlt,
  FaSchool,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLock
} from 'react-icons/fa';
import BackButton from '../../../components/buttons/back_button/BackButton'
const RegisterPage = () => {
  function onClicksign_up() {
    const sign_up_btn = document.querySelector('#sign_up_btn');
    const container = document.querySelector('.register_container');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign_up_mode');
    });
  }
  function onClicksign_in() {
    const sign_in_btn = document.querySelector('#sign_in_btn');
    const container = document.querySelector('.register_container');
    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign_up_mode');
    });
  }

  return (
    <div>
      <div className="register_container">
        <div className="register_content_back_button">
          <BackButton/>
        </div>
        <div className="register_content_logo">
        <img
              src={process.env.PUBLIC_URL + "/assets/logo.svg"}
              className="register_content_logo_image"
              alt=""
            />
        </div>
        <div className="register_forms_container">
          <div className="register_signin_signup">
            <form action="#" className="register_sign_in_form">
              <h2 className="register_title">Sign in</h2>
              <div className="register_input_field">
              <FaUserAlt className="fas fa_user" />
                <input  type="text" placeholder="Username" />
              </div>
              <div className="register_input_field">
              <FaLock className="fas" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="register_btn solid" />
              <p className="social_text">Or Sign in with social platforms</p>
              <div className="social_media">
                <a href="#" className="social_icon">
                  <FaFacebookF className="fab fa_facebook_f" />
                </a>
                <a href="#" className="social_icon">
                  <FaTwitter className="fab fa_twitter" />
                </a>
                <a href="#" className="social_icon">
                  <FaGoogle className="fab fa_google" />
                </a>
                <a href="#" className="social_icon">
                  <FaLinkedinIn className="fab fa_linkedin_in" />
                </a>
              </div>
            </form>
            <form action="#" className="register_sign_up_form">
              <h2 className="register_title">Sign up</h2>
              <div className="register_form_height_container">
                <div className="register_input_field">
                  <FaUserAlt className="fas fa_user" />
                  <input type="text" placeholder="Username" />
                </div>

                <div className="register_input_field">
                  <FaSchool className="fas" />
                  <input type="text" placeholder="Institute" />
                </div>

                <div className="register_input_field">
                  <FaPhone className="fas" />
                  <input type="text" placeholder="Phone No" />
                </div>

                <div className="register_input_field">
                  <FaWhatsapp className="fas" />
                  <input type="text" placeholder="Whatsapp No" />
                </div>

                <div className="register_input_field">
                  <FaEnvelope className="fas" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="register_input_field">
                  <select className="register_input_field_select" name="plan" id="plan">
                    <option selected disabled>Select a Plan</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                

                <div className="register_input_field">
                <FaLock className="fas" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="register_input_field">
                <FaLock className="fas" />
                  <input type="password" placeholder="Confirm Password" />
                </div>
              </div>
             

              <p className="social_text">
                <input type="checkbox" /> Accept All Terms and Condition
              </p>

              <input type="submit" className="register_btn" value="Sign up" />
              <p className="social_text">Or Sign up with social platforms</p>
              <div className="social_media">
                <a href="#" className="social_icon">
                  <FaFacebookF className="fab fa_facebook_f" />
                </a>
                <a href="#" className="social_icon">
                  <FaTwitter className="fab fa_twitter" />
                </a>
                <a href="#" className="social_icon">
                  <FaGoogle className="fab fa_google" />
                </a>
                <a href="#" className="social_icon">
                  <FaLinkedinIn className="fab fa_linkedin_in" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels_container">
          <div className="panel left_panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="register_btn transparent"
                id="sign_up_btn"
                onClick={onClicksign_up}
              >
                Sign up
              </button>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/assets/rocket.svg'}
              className="image"
              alt="rocket"
            />
          </div>
          <div className="panel right_panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="register_btn transparent"
                id="sign_in_btn"
                onClick={onClicksign_in}
              >
                Sign in
              </button>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/assets/play.svg'}
              className="image"
              alt="play"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
