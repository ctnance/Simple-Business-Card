import React from "react";
import ProfileImage from "../images/profile-img.png";

export default function Header() {
  return (
    <header>
      <img className="header--img" src={ProfileImage} alt="profile photo" />
    </header>
  );
}
