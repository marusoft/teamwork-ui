import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { loggedInUrl } from "../../apis";
import { getToken } from "../../auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useHistory } from "react-router-dom";

import "./dasboard.css";

const Dashboard = () => {
  // const history = useHistory();

  const [name, setName] = useState("");

  const getLoggedInUser = async () => {
    const token = getToken();
    try {
      const loggedInUser = await fetch(loggedInUrl, {
        method: "GET",
        headers: { Authorization: token },
      });
      const loggedUserResult = await loggedInUser.json();
      const { username } = loggedUserResult.data;
      setName(username);
      toast.success("Welcome back your login was successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const logOut = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   history.push("/login");
  // };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <ToastContainer />
      <div classme="dashboard">
        
        <div className="dashboard-welcome">
          <Sidebar />
          <h3>Hello</h3>
          <span>{name}</span>
        </div>
        {/* <button onClick={(e) => logOut(e)} className="logout-btn">Sign Out</button> */}
      </div>
    </>
  );
};

export default Dashboard;
