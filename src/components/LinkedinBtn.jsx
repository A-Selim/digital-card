import React from "react";
import linkedinBtnIcon from "../assets/linkedin-btn-icon.png";

export default function LinkedInBtn() {
  return (
    <button className="linkedin-btn btn">
      <img src={linkedinBtnIcon} alt="" className="icon" />
      LinkedIn
    </button>
  );
}
