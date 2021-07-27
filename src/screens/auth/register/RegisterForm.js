import React from "react";
import {
  FaUserAlt,
  FaSchool,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Register.css";
const RegisterForm = ({ registerHandler, formState }) => {
  return (
    <form onSubmit={registerHandler} className="register_sign_up_form">
      <h2 className="register_title">Register</h2>
      <small
        style={{
          color: "#acacac",
          textAlign: "right",

          width: "70%",
        }}>
        * Required
      </small>
      <div className="register_form_height_container">
       {/*<small
          style={{
            color: "red",
            textAlign: "right",

            width: "70%",
          }}>
          *
        </small>*/}
        <div className="register_input_field">
          <FaUserAlt className="fas fa_user" />

          <input type="text" required placeholder="Username*" name="name" />
        </div>
        {/*<small
          style={{
            color: "red",
            textAlign: "right",

            width: "70%",
          }}>
          *
        </small>*/}
        <div className="register_input_field">
          <FaPhone className="fas" />

          <input type="text" required placeholder="Phone No*" name="contact" />
        </div>

        <div className="register_input_field">
          <FaWhatsapp className="fas" />
          <input type="text" placeholder="Whatsapp No" name="whatsapp" />
        </div>

        <div className="register_input_field">
          <FaEnvelope className="fas" />
          <input type="email" placeholder="Email" name="emailId" />
        </div>

        {/* <div className="register_input_field">
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
                </div> */}
        {/* <small
                  style={{
                    color: "red",
                    textAlign: "left",

                    width: "70%",
                  }}>
                  *
                </small> */}
        <div className="register_input_field">
          <FaSchool className="fas" />

          <input type="text" placeholder="Institute" name="institute" />
        </div>
      </div>

      <p className="social_text">
        <input type="checkbox" required /> Accept All Terms and Condition
      </p>
      {formState.sending ? (
        <CircularProgress />
      ) : (
        <input type="submit" className="register_btn" value="Register" />
      )}
    </form>
  );
};

export default RegisterForm;
