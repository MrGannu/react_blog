import React from "react";
import { Link } from "react-router-dom";
import "../style/pages.css";

const Error = () => {
  return (
    <div className="error">
      <div className="error_container">
        <img src={`./404-error.png`} alt="404-logo" />
        <p>Page not found!</p>
        <Link to="/" className="link">
          Return to home page. <b>Home Page</b>
        </Link>
      </div>
    </div>
  );
};

export default Error;
