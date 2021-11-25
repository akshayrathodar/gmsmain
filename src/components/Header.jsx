import React, { useState, useEffect } from "react";
import { logo } from "../res/icons";
import "./Header.css";
import { languageStore } from "../redux/store/store";
import {
  changeLanguage
} from "../redux/action/languageActions";


const Header = (props) => {
  const [lang, setLang] = useState(languageStore.getState());

  useEffect(() => {
    if (props.currentLanguage) {
      setLang(props.currentLanguage)
    }
  }, [])

  const handleLangChange = (languageСode) => {
    setLang(languageСode);
    changeLanguage(languageСode)
    props.elementLanguageSetState(languageСode)
  };


  return (
    <div className="header">
      <div className="logo">{logo}</div>
      <div className="lang-switcher">
        <button
          onClick={() => handleLangChange("en")}
          className="lang"
          style={{
            color: lang === "en" ? "#56b763" : "#7d8985",
            fontWeight: lang === "en" ? "bold" : "normal",
          }}
        >
          ENG
        </button>
        <p
          className="lang"
          style={{
            color: "#7d8985",
          }}
        >
          &nbsp;/&nbsp;
        </p>
        <button
          onClick={() => handleLangChange("uk")}
          className="lang"
          style={{
            color: lang === "uk" ? "#56b763" : "#7d8985",
            fontWeight: lang === "uk" ? "bold" : "normal",
          }}
        >
          UKR
        </button>
      </div>
    </div>
  );
};

export default Header;
