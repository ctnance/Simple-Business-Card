import React from "react";
import ProfileImage from "../images/profile-img.png";

export default function Header() {
  return (
    <header>
      <img src={ProfileImage} alt="profile photo" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <small>laurasmith.website</small>
    </header>
  );
}
