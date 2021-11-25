import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";
import { backArrow } from "../res/icons";

const BackButton = (props) => {
  return (
    <Link to={props.redirectTo}>
    <div className="back-arrow" onClick={props.onClick}>
      {backArrow} {props.text}
    </div>
    </Link>
  );
};

export default BackButton;
