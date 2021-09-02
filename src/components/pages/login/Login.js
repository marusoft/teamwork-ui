import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signinUrl } from "../../apis";
import { saveUser, loggedIn } from "../../auth";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Header from "../../layouts/header/Header";
import "./login.css";

const Login = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      const login = await fetch(signinUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const loginResult = await login.json();
      console.log("logindata", loginResult);
      const { error } = loginResult;
      if (error) {
        toast.error(error);
      } else {
        saveUser(loginResult);
        toast.success("Register Successfully");
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      {loggedIn() === true ? <Redirect to="/dashboard" /> : null}
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
            <form onSubmit={onSubmitForm} className="login-form-field">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                required
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => onChange(e)}
              />
              <div className="login-bottom">
                <p className="forgot-password">
                  <Link to="/forgotpassword" className="link">
                    Forgot Password?
                  </Link>
                </p>
                <div className="login-account">
                  <span className="account-info">
                    Just joining us here? Contact Admin for account registration
                    or login with the credentials provided by the Admin.
                  </span>
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
