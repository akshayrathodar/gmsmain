import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./PrintDataPage.css";
import { lang } from "../res/strings";
import InputField from "../components/InputField";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import { languageStore } from "../redux/store/store";
const { serverPrefixes } = require("../config.js");
const { default: axios } = require('axios');



const PrintDataPage = () => {
  const [languageСode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageСode].printDataPage;
  let history = useHistory(); // for further redirect
  const { imageUrl } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // Change handlers for InputField`s
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitPrintForm = () => {
    console.log(imageUrl);

    // Current date and time
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    // get downloadUrl from local storage

    // change ImgUrl: imgUrl to DownloadUrl: downloadUrl
    // To write in Google Sheets
    const newRow = {
      FirstName: firstName,
      LastName: lastName,
      Address: address,
      City: city,
      ZIP: zip,
      Email: email,
      DateTime: dateTime,
      ImgUrl: localStorage.getItem("imageUrl"),
    };
    if (firstName && lastName && address && city && zip && email) {
      const reqBody = {
        postcardData: newRow,
      };

      axios
        .post(`http://165.232.112.117:8000/addrecord`, reqBody)
        .then((response) => {
          console.log(response);
        });

      history.push("/success");
    } else {
      alert("Field can not be empty 🙃");
    }
  };

  return (
    <div className="background">
      <div className="print-data-page-body">
        <Header elementLanguageSetState={setLanguageCode}/>
        <div className="print-data-page-main">
          <div className="print-data-page-title">
            <h1>{page.ctaTitle}</h1>
            <p>{page.message()}</p>
            <BackButton text={page.back} redirectTo={`/share/${languageСode}/${localStorage.getItem("imageId")}`}/>
          </div>
          <div className="print-data-page-form">
            <div className="print-data-page-double-row">
              <InputField
                type="text"
                placeholder={page.firstName}
                onChange={handleFirstNameChange}
              />
              <InputField
                type="text"
                placeholder={page.lastName}
                onChange={handleLastNameChange}
              />
            </div>

            <div className="print-data-page-single-row">
              <InputField
                state="long"
                type="text"
                placeholder={page.address}
                onChange={handleAddressChange}
              />
            </div>

            <div className="print-data-page-double-row">
              <InputField
                type="text"
                placeholder={page.city}
                onChange={handleCityChange}
              />
              <InputField
                type="text"
                placeholder={page.zip}
                onChange={handleZipChange}
              />
            </div>

            <div className="print-data-page-double-row">
              <InputField
                type="email"
                placeholder={page.email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="print-data-page-cta-button">
              <CTAButton text={page.submit} onClick={() => submitPrintForm()} />
            </div>
          </div>
        </div>
        <div className="print-data-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PrintDataPage;
