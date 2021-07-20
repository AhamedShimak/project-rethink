import emailjs from "emailjs-com";
export default function sendEmail(
  e,

  formState,
  setFormState
) {
  e.preventDefault();
  console.log(e.target);
  console.log("sendEmail");
  setFormState({ ...formState, sending: true });
  emailjs
    .sendForm(
      "service_ygm2dpo",
      "template_m6p8wnu",
      e.target,
      "user_1hYoJ7THCA9SGHN5mDmO8"
    )
    .then(
      (result) => {
        setFormState({ error: false, sending: false, success: true });

        console.log(result);
      },
      (error) => {
        setFormState({ success: true, sending: false, error: true });
        console.log(error);
      }
    );

  e.target.reset();
}
