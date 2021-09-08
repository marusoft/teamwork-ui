import React, { useState } from "react";
import { Menu, Close, ExitToApp } from "@material-ui/icons/";
import { Link } from "@material-ui/core";
import { SidebarData } from "./SidebarData";
import { useHistory } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login");
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <div className="sidebar-menu-bar">
        <Link to="#">
          <Menu onClick={showSidebar} className="menu-bars" />
        </Link>
      </div>
      <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <ul className="sidebar-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="#">
              <Close className="menu-bars" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li onClick={(e) => logOut(e)} className="sidebar-text">
          <Link>
             <ExitToApp />
             <span>SignOut</span>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
