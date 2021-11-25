import React from "react";
import "./ShareOption.css";

const ShareOption = (props) => {
  return (
    <div className="share-option" onClick={props.onClick}>
      <div className="icon">{props.icon}</div>
      <p className="share-cta">{props.text}</p>
    </div>
  );
};

export default ShareOption;
