import React, { useState, useEffect } from "react";
import "./GreetingPage.css";
import { lang } from "../res/strings";
import CTAButton from "../components/CTAButton";
import Header from "../components/Header";
import { lights1, lights2, stclaus, circle } from "../res/icons";
import Footer from "../components/Footer";
import { languageStore } from "../redux/store/store";

const GreetingPage = () => {
  const [languageCode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageCode].greeting;

  const [lights, setLights] = useState(lights1);

  useEffect(() => {
    const interval = setInterval(
      lights === lights1 ? () => setLights(lights2) : () => setLights(lights1),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  });


  return (
    <div className="background">
      <div className="lights">{lights}</div>
      <Header elementLanguageSetState={setLanguageCode}/>
      <div className="greeting-body">
        <div className="content">
          <div className="text-inf">
            {page.greetingTitle()}
            <div className="greetings">
              <p className="small-greeting">{page.greetingText1}</p>
              <p className="small-greeting">{page.greetingText2}</p>
            </div>
            <CTAButton text={page.greetingCTA} onClick={() => document.location.href = `http://165.232.112.117/drawer/#/${languageCode}`}/>
            <Footer className="footer" />
          </div>
          {stclaus}
        </div>
      </div>
      <div className="circles">
        <div id="circle1">{circle}</div>
        <div id="circle2">{circle}</div>
      </div>
    </div>
  );
};

export default GreetingPage;
