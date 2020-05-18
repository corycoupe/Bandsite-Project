import React from "react";
import logo from "../assets/logo/Logo-brainflix.png";
import upload from "../assets/icons/SVG/Icon-upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} className="header__logo-brainflix" alt="brainflix" />
      </div>
      <div className="header__search">
        <input
          className="header__search-bar"
          type="string"
          placeholder="Search"
        />
        <button className="header__search-button">
          <img
            className="header__search-button--img"
            src={upload}
            alt="upload"
          ></img>
          <p className="header__search-button--text">UPLOAD </p>
        </button>
        <img
          src="./images/Mohan-muruge.jpg"
          className="header__search-mohan mohan-image"
          alt=""
        ></img>
      </div>
    </header>
  );
}

export default Header;
