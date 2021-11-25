import React, { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { lang } from "../res/strings";
import "./SuccessPage.css";
import { languageStore } from "../redux/store/store";



const SuccessPage = () => {
  const [languageCode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageCode].successPage;
  return (
    <div className="background">
      <Header elementLanguageSetState={setLanguageCode}/>
      <div className="success-page-main">
        <div className="success-page-text">
          <h1>{page.title}</h1>
          <p>{page.message}</p>
        </div>
        <Link to="/">
          <CTAButton text={page.ctaText} />
        </Link>
      </div>
      <div className="success-page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SuccessPage;
