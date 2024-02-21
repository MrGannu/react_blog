import React from "react";
import "../style/component.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="footer_container">
        <div className="footer_semi_div">
          <p>Copyright © 2023. Made by Manish Thapa Magar.</p>
        </div>
        <div className="footer_semi_div">
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
