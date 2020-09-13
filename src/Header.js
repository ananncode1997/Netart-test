import React from "react";
import "./Header.css";
import image from "./logo.png";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="cannot display" />
    </div>
  );
}
export default Header;
