import React from "react";
import TwitterIcon from "../images/Twitter Icon.svg";
import FacebookIcon from "../images/Facebook Icon.svg";
import InstagramIcon from "../images/Instagram Icon.svg";
import GithubIcon from "../images/GitHub Icon.svg";

export default function Footer() {
  return (
    <footer>
      <img src={TwitterIcon} alt="Twitter icon" />
      <img src={FacebookIcon} alt="Facebook icon" />
      <img src={InstagramIcon} alt="Instagram icon" />
      <img src={GithubIcon} alt="GitHub icon" />
    </footer>
  );
}
