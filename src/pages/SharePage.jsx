import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ShareOption from "../components/ShareOption";
import { lang } from "../res/strings";
import {
  downloadShare,
  emailShare,
  viberShare,
  printShare,
} from "../res/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SharePage.css";
import { languageStore } from "../redux/store/store";
import { changeLanguage } from "../redux/action/languageActions";

const { default: axios } = require("axios");

const SharePage = () => {
  const [languageCode, setLanguageCode] = useState(languageStore.getState());
  const page = lang[languageCode].sharepage;
  const { imageId, language } = useParams();
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    // finish this fix | when use move directly to drawer
    // if (['en', 'uk'].includes(language)) {
    //   window.location.replace("http://localhost:3000/share/en/" + imageId)
    // }
    setLanguageCode(language);
    changeLanguage(language);
    localStorage.setItem("imageId", imageId);
  }, [])

  useEffect(() => {
    const reqBody = {
      id: imageId,
    };

    const fetchData = async () => {
      const res = await axios.post(`http://165.232.112.117:8000/geturl`, reqBody);
      console.log(res.data);
      setDownloadLink(res.data.downloadUrl);
      localStorage.setItem("imageUrl", res.data.downloadUrl);
    };

    fetchData();
  }, []);

  const link =
    "viber://forward?text=" +
    encodeURIComponent(
      "Check this out: " +
        localStorage.getItem('imageUrl')
    );

  return (
    <div className="background">
      <div className="share-page-body">
        <Header currentLanguage={language} elementLanguageSetState={setLanguageCode}/>
        <div className="share-page-main">
          <div className="share-page-title">
            {page.ctaTitle()}
            {page.message()}
            <div className="share-page-options">
              <ShareOption
                icon={downloadShare}
                text={page.download}
                onClick={() => window.location.replace(downloadLink)}
              />
              <Link to="/email">
                <ShareOption icon={emailShare} text="Email" />
              </Link>
              <Link to="/print" state={{ imageUrl: downloadLink }}>
                <ShareOption icon={printShare} text={page.print} />
              </Link>
              <a href={ "viber://forward?text=" + encodeURIComponent("Check this out: " + downloadLink) }>
                <ShareOption icon={viberShare} text="Viber" />
              </a>
            </div>
          </div>
          <img className="share-page-drawing" src={downloadLink} />
        </div>
        <div className="share-page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SharePage;
