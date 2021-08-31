import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://res.cloudinary.com/marusofteamwork/image/upload/v1630245337/5278_vsrotp.jpg"
        alt="logo"
        className="header-img"
      />
      <span className="header-title">Teamwork</span>
    </div>
  );
};

export default Header;
