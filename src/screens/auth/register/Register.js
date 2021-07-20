import React, { useEffect, useState } from "react";
import "./Register.css";

import BackButton from "../../../components/buttons/back_button/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../features/auth/authSlice";
import { register } from "../../../actions/authActions";
import sendEmail from "../../../functions/emailJs";
import RegisterFrom from "./RegisterForm";
import SuccessRegister from "./SuccessRegister";
const RegisterPage = () => {
  const dispatch = useDispatch();
  //const [subjectList, setSubjectList] = useState([]);
  // const { regReq, loading, errors } = useSelector(authSelector);

  useEffect(() => {}, []);
  const [formState, setFormState] = useState({
    sending: false,
    success: false,
    error: false,
  });

  const [regInfo, setRegInfo] = useState({
    name: "",
    emailId: "",
    contact: "",

    whatsApp: "",
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    console.log("registering");

    if (
      regInfo.name !== null &&
      regInfo.emailId !== null &&
      regInfo.contact !== null &&
      regInfo.whatsapp !== null
    ) {
      await sendEmail(
        e,

        formState,
        setFormState
      );
    }
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
            {formState.success ? (
              <SuccessRegister />
            ) : (
              <RegisterFrom
                registerHandler={registerHandler}
                formState={formState}
                setFormState={setFormState}
              />
            )}

            <form action="#" className="register_sign_in_form">
              {/* //confirmation message here        */}
            </form>
          </div>
        </div>

        <div className="panels_container">
          <div className="panel left_panel"></div>
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
