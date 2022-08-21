import React from "react";
import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

export default function RightSideFooter() {
  return (
    <footer className="footer">
      <a href="#" className="social-link">
        <img src={twitterIcon} alt="" className="link-icon" />
      </a>
      <a href="#" className="social-link">
        <img src={facebookIcon} alt="" className="link-icon" />
      </a>
      <a href="#" className="social-link">
        <img src={instagramIcon} alt="" className="link-icon" />
      </a>
      <a href="#" className="social-link">
        <img src={linkedinIcon} alt="" className="link-icon" />
      </a>
      <a href="#" className="social-link">
        <img src={githubIcon} alt="" className="link-icon" />
      </a>
    </footer>
  );
}
