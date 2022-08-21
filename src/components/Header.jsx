import React from "react";
import cardPhoto from "../assets/card-photo.png";

export default function Header() {
  return (
    <div className="card-header">
      <img src={cardPhoto} className="card-img" />
      <h1 className="card-name">Laura Smith</h1>
      <h2 className="card-title">Frontend Developer</h2>
      <a href="#" className="card-website">
        laurasmith.website
      </a>
    </div>
  );
}
