import React from "react";

function onClick() {
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mood");
}

export default function DarkMoodBtn() {
  return (
    <button className="dark-mood-btn material-icons-outlined" onClick={onClick}>
      tungsten
    </button>
  );
}
