import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://res.cloudinary.com/marusofteamwork/image/upload/v1630245337/5278_vsrotp.jpg"
        alt="logo"
        className="header-img"
      />
      <span className="header-title">
        {" "}
        <Link to="/login" className="title-name">Teamwork</Link>
      </span>
    </div>
  );
};

export default Header;
