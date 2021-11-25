import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./EmailSendPage.css";
import { lang } from "../res/strings";
import InputField from "../components/InputField";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import TextareaField from "../components/TextareaField";
import { languageStore } from "../redux/store/store";
const { default: axios } = require("axios");

const EmailSendPage = () => {
  const [languageCode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageCode].emailSendPage;
  let history = useHistory(); // for further redirect

  const [sendTo, setSendTo] = useState("");
  const [message, setMessage] = useState("");

  // Change handlers for InputField`s
  const handleSendToChange = (event) => {
    setSendTo(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitEmailForm = (sendTo, message) => {
    if (sendTo && message) {
      console.log(sendTo, message);

      const reqBody = {
        to: sendTo,
        imgUrl: localStorage.getItem("imageUrl"),
        message: message,
      };

      axios
        .post(`http://165.232.112.117:8000/sendpostcard`, reqBody)
        .then((response) => {
          window.location.href = `http://165.232.112.117/#/success`
          console.log(response);
        });

    } else {
      alert("Field can not be empty 🙃");
    }
  };

  return (
    <div className="background">
      <div className="email-send-body">
        <Header elementLanguageSetState={setLanguageCode}/>
        <div className="email-send-main">
          <div className="email-send-title">
            <h1>{page.ctaTitle}</h1>
            <p>{page.message()}</p>
            <BackButton text={page.back} redirectTo={`/share/${languageCode}/${localStorage.getItem("imageId")}`}/>
          </div>
          <div className="email-send-form">
            <div className="email-send-single-row">
              <InputField
                state="long"
                type="email"
                placeholder={page.sendTo}
                onChange={handleSendToChange}
              />
            </div>

            <div className="email-send-single-row">
              <TextareaField
                type="text"
                placeholder={page.messageText}
                onChange={handleMessageChange}
              />
            </div>

            <div className="email-send-cta-button">
              <CTAButton
                text={page.submit}
                onClick={() => submitEmailForm(sendTo, message)}
              />
            </div>
          </div>
        </div>
        <div className="email-send-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EmailSendPage;
