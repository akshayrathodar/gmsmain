import React, { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { lang } from "../res/strings";
import "./NotFoundPage.css";
import { languageStore } from "../redux/store/store";


const NotFoundPage = () => {
  const [languageСode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageСode].notFoundPage;
  return (
    <div className="background">
      <Header elementLanguageSetState={setLanguageCode}/>
      <div className="not-found-page-main">
        <div className="not-found-page-text">
          <h1>{page.title}</h1>
          <p>{page.message}</p>
        </div>
        <Link to="/">
          <CTAButton text={page.ctaText} />
        </Link>
      </div>
      <div className="not-found-page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default NotFoundPage;
