import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Header from "../../layouts/header/Header";
import "./register.css";

const Register = () => {
  return (
    <>
      <Header />
      <div className="register">
        <div className="register-description">
          <img
            src="https://res.cloudinary.com/marusofteamwork/image/upload/v1629890652/tw-ui/6308_z8us2l.jpg"
            alt=""
            className="register-img"
          />
          <p className="register-info">
            Teamwork is an ​ internal social network for employees of an
            organization. The goal of this application is to facilitate more
            interaction between colleagues and promote team bonding.
          </p>
          <Link to="/register">
            <button className="register-button-get">Get Started</button>
          </Link>
        </div>
        <div className="register-form-wrapper">
          <div className="register-form-header">
            {" "}
            <LockOutlinedIcon className="lock" />
            <span className="register-form-title">Admin Create Employee</span>
          </div>
          <div className="register-form">
            <form className="register-form-field">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
              <input type="text" placeholder="Department" required />
              <input
                type="text"
                placeholder="Address"
                className="span-input"
                required
              />
              <input type="text" placeholder="Jobrole" required />
              <select className="gender">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
            </form>
          </div>
          <div className="register-account">
            <span className="text">
              Got an account?{" "}
              <Link to="/login" className="signin-link">
                {" "}
                Sign in
              </Link>
            </span>
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
