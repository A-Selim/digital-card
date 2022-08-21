import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import DarkMoodBtn from "./components/DarkMoodBtn";

export default function App() {
  return (
    <div className="container">
      <LeftSide />
      <RightSide />
      <DarkMoodBtn />
    </div>
  );
}
