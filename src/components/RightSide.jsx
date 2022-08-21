import React from "react";
import Header from "./Header";
import EmailBtn from "./EmailBtn";
import LinkedInBtn from "./LinkedinBtn";
import CardMain from "./CardMain";
import RightSideFooter from "./RightSideFooter";

export default function RightSide() {
  return (
    <div className="wrapper">
      <div className="card">
        <Header />
        <div className="btns-wrapper right-side">
          <EmailBtn />
        </div>
        <CardMain />
        <RightSideFooter />
      </div>
    </div>
  );
}
