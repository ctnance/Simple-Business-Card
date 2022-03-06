import React from "react";
import EmailIcon from "../images/Email Icon.svg";
import LinkedInIcon from "../images/LinkedIn Icon.svg";

export default function ContactContainer() {
  return (
    <div className="contact-container">
      <button className="contact-container--button">
        <img src={EmailIcon} />
        Email
      </button>
      <button className="contact-container--button">
        <img src={LinkedInIcon} />
        LinkedIn
      </button>
    </div>
  );
}
