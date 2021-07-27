import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const SuccessRegister = () => {
  return (
    <form className="register_sign_up_form">
      <div className="register_sign_up_form_image">
      <img
                src={process.env.PUBLIC_URL + "/assets/success.png"}
                alt="success"
                className="register_sign_up_form_image_success"
               
              />
      </div>
      <h2 className="register_sign_up_form_title">
        {" "}
        THANK YOU!
      </h2>
      <p className="register_sign_up_form_text">
       Your submission has been sent. We will contact you soon. Best wishes from Lepton
      </p>
      <Link to="/">
      <button className="register_sign_up_form_button">Start Exploring</button>
      </Link>
      
    </form>
  );
};

export default SuccessRegister;
