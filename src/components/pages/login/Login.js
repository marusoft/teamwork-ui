import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Header from "../../layouts/header/Header";
import "./login.css";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login-description">
          <img
            src="https://res.cloudinary.com/marusofteamwork/image/upload/v1629890652/tw-ui/6308_z8us2l.jpg"
            alt=""
            className="login-img"
          />
          <p className="login-info">
            Teamwork is an ​ internal social network for employees of an
            organization. The goal of this application is to facilitate more
            interaction between colleagues and promote team bonding.
          </p>
          <Link to="/register">
            <button className="login-button-get">Get Started</button>
          </Link>
        </div>
        <div className="login-form-wrapper">
          <div className="login-form-header">
            {" "}
            <LockOutlinedIcon className="lock" />
            <span className="login-form-title">Employee Login</span>
          </div>
          <div className="login-form">
            <form className="login-form-field">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
            </form>
          </div>
          <div className="login-bottom">
            <p className="forgot-password">
              <Link to="/forgotpassword" className="link">
                Forgot Password?
              </Link>
            </p>
            <div className="login-account">
              <span className="account-info">
                Just joining us here? Contact Admin for account registration or
                login with the credentials provided by the Admin.
              </span>
              <button className="login-button">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
