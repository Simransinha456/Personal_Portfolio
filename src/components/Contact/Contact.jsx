import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q03sei3',
        'template_6003xzn',
        form.current,
        'rUBYH4ksmrCZLtLUS'
      )
      .then(
        (result) => {
          // console.log(result.text);
          console.log("message send")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      {/* <div className="c-right"> */}
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" />
      <input type="email" name="user_email" />
      <input type="text" name="user_name" />
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      {/* </div> */}
    </div>
  );
};

export default Contact;
