import React from "react";
import { TextField, Select, InputLabel, MenuItem } from "@material-ui/core";
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
          <button className="register-button">Get Started</button>
        </div>
        <div className="register-form-wrapper">
          <span className="register-form-title">Create Employee</span>
          <div className="register-form">
            <form className="register-form-field">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="lastname"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Department"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Job role"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <Select id="outlined-basic" label="Gender" className="span-input">
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className="span-input"
                size="small"
                InputProps={{
                  style: { borderRadius: "10px" },
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
