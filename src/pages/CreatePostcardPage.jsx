import React from "react";
import { Link } from "react-router-dom";
import "./CreatePostcardPage.css";

const CreatePostcardPage = () => {
  return (
    <div className="background">
      CreatePostcardPage ->
      <Link to="/share">
        <button>SHARE</button>
      </Link>
    </div>
  );
};

export default CreatePostcardPage;
