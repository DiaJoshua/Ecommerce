import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import visa_icon from "../Assets/visa_icon.png";
import mastercard_icon from "../Assets/mastercard_icon.png";
import maya_icon from "../Assets/maya_icon.png";
import gcash_icon from "../Assets/gcash_icon.png";

const Footer = () => {
  const navigate = useNavigate();
  const [aboutUsClicked, setAboutUsClicked] = useState(false);

  const handleAboutUsClick = () => {
    setAboutUsClicked(true);
    navigate("/about-us");
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <p>TIENDA</p>
      </div>

      <ul className="footer-links">
        <li
          onClick={handleAboutUsClick}
          className={aboutUsClicked ? "clicked" : ""}
        >
          About Us
        </li>

        <li>
          <h3>Payment</h3>
          <div className="footer-payment-list">
            <img src={visa_icon} alt="Visa" />
            <img src={mastercard_icon} alt="Mastercard" />
            <img src={maya_icon} alt="Maya" />
            <img src={gcash_icon} alt="Gcash" />
          </div>
        </li>

        <li>
          <h3>Contact</h3>
          <div className="footer-contact-info">
            <span>
              Location: Sunnymede IT Center, 1614 Quezon Ave, Quezon City,
              Philippines
            </span>
            <span>Email: chairperson@ncip.gov.ph</span>
          </div>
        </li>
      </ul>

      <div className="footer-social-icon">
        {/* Add social icons here if needed */}
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
