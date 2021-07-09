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

const RegisterPage = () => {
  function onClicksign_up() {
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });
  }
  function onClicksign_in() {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const container = document.querySelector('.container');
    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });
  }

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
              <FaUserAlt className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
              <FaLock className="fas" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebookF className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="form_container">
                <div className="input-field">
                  <FaUserAlt className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div>

                <div className="input-field">
                  <FaSchool className="fas" />
                  <input type="text" placeholder="Institute" />
                </div>

                <div className="input-field">
                  <FaPhone className="fas" />
                  <input type="text" placeholder="Phone No" />
                </div>

                <div className="input-field">
                  <FaWhatsapp className="fas" />
                  <input type="text" placeholder="Whatsapp No" />
                </div>

                <div className="input-field">
                  <FaEnvelope className="fas" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <select className="input-field-select" name="plan" id="plan">
                    <option selected disabled>Select a plan</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>

                <div className="input-field">
                <FaLock className="fas" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-field">
                <FaLock className="fas" />
                  <input type="password" placeholder="Confirm Password" />
                </div>
              </div>
             

              <p className="social-text">
                <input type="checkbox" /> Accept All Terms and Condition
              </p>

              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebookF className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={onClicksign_up}
              >
                Sign up
              </button>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/assets/rocket.svg'}
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={onClicksign_in}
              >
                Sign in
              </button>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/assets/play.svg'}
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
