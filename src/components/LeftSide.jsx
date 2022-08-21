import React from "react";
import Header from "./Header";
import EmailBtn from "./EmailBtn";
import LinkedInBtn from "./LinkedinBtn";
import CardMain from "./CardMain";
import Footer from "./Footer";

export default function LeftSide() {
  return (
    <div className="wrapper">
      <div className="card">
        <Header />
        <div className="btns-wrapper">
          <EmailBtn />
          <LinkedInBtn />
        </div>
        <CardMain />
        <Footer />
      </div>
    </div>
  );
}
