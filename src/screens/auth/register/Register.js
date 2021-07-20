import React, { useEffect, useState } from "react";
import "./Register.css";
import {
  FaUserAlt,
  FaSchool,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import BackButton from "../../../components/buttons/back_button/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../features/auth/authSlice";
import { register } from "../../../actions/authActions";
const RegisterPage = () => {
  const dispatch = useDispatch();
  //const [subjectList, setSubjectList] = useState([]);
  // const { regReq, loading, errors } = useSelector(authSelector);

  useEffect(() => {}, []);

  const [regInfo, setRegInfo] = useState({
    name: "",
    emailId: "",
    password: "",
    contact: "",
    confirmPassword: "",
    whatsApp: "",
  });

  const registerHandler = (e) => {
    e.preventDefault();

    dispatch(register(regInfo));
    // if (regReq) {
    //   const sign_up_btn = document.querySelector("#sign_up_btn");
    //   const container = document.querySelector(".register_container");

    //   sign_up_btn.addEventListener("click", () => {
    //     container.classList.add("sign_up_mode");
    //   });
    // }
  };

  // function onClicksign_in() {
  //   const sign_in_btn = document.querySelector("#sign_in_btn");
  //   const container = document.querySelector(".register_container");
  //   sign_in_btn.addEventListener("click", () => {
  //     container.classList.remove("sign_up_mode");
  //   });
  // }

  return (
    <div>
      <div className="register_container sign_up_mode">
        <div className="register_content_back_button">
          <BackButton />
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
            <form onSubmit={registerHandler} className="register_sign_up_form">
              <h2 className="register_title">Register</h2>
              <small
                style={{
                  color: "red",
                  textAlign: "right",

                  width: "70%",
                }}>
                * Required
              </small>
              <div className="register_form_height_container">
                <small
                  style={{
                    color: "red",
                    textAlign: "right",

                    width: "70%",
                  }}>
                  *
                </small>
                <div className="register_input_field">
                  <FaUserAlt className="fas fa_user" />

                  <input type="text" required placeholder="Username" />
                </div>
                <small
                  style={{
                    color: "red",
                    textAlign: "right",

                    width: "70%",
                  }}>
                  *
                </small>
                <div className="register_input_field">
                  <FaPhone className="fas" />

                  <input type="text" required placeholder="Phone No" />
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
                  <FaLock className="fas" />
                  <input type="password" required placeholder="Password" />
                </div>
                <small
                  style={{
                    color: "red",
                    textAlign: "right",

                    width: "70%",
                  }}>
                  *
                </small>
                <div className="register_input_field">
                  <FaLock className="fas" />

                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
                <small
                  style={{
                    color: "red",
                    textAlign: "left",

                    width: "70%",
                  }}>
                  *
                </small>
                <div className="register_input_field">
                  <FaSchool className="fas" />

                  <input type="text" placeholder="Institute" />
                </div>
              </div>

              <p className="social_text">
                <input type="checkbox" required /> Accept All Terms and
                Condition
              </p>

              <input type="submit" className="register_btn" value="Register" />
            </form>
            <form action="#" className="register_sign_in_form">
              {/* //confirmation message here        */}
            </form>
          </div>
        </div>

        <div className="panels_container">
          <div className="panel left_panel">
            <div className="content">
              <h3>Registeration Benifits</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/assets/rocket.svg"}
              className="image"
              alt="rocket"
            />
          </div>
          <div className="panel right_panel">
            <div className="content">
              <h3>Registeration Benifits</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/assets/play.svg"}
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
