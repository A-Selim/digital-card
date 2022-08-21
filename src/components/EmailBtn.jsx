import React from "react";
import emailIcon from "../assets/email-icon.png";

export default function EmailBtn() {
  return (
    <button className="email-btn btn">
      <img src={emailIcon} alt="" className="icon" />
      Email
    </button>
  );
}
