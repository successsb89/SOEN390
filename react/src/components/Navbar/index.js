import "./style.css";
import { Link, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";

import { IconContext } from "react-icons";

const logout = () => {};

const NavCustomer = () => {
  return (
    <div>
      <nav className="navbar2">
        <h3>Logo</h3>
        <ul className="nav-link">
          <Link to="/account/shop">
            <li>Shop</li>
          </Link>
          <Link to="/account/carte">
            <li>Carte</li>
          </Link>
          <Link to="/account/info">
            <li>Info</li>
          </Link>
          <Link>
            <button onClick={logout}>Logout</button>
          </Link>
        </ul>
      </nav>

      <Switch>
        <Route path="/account/shop"> </Route>
        <Route path="/account/carte"> </Route>
        <Route path="/account/info"> </Route>
      </Switch>
    </div>
  );
};
const NavAdmin = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export { NavCustomer, NavAdmin };
