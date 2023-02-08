import React from "react";
// import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

export const NavBar = ({ setMenuIsOpen, menuIsOpen }) => {
  return (
    <>
      <div className="navbar-nav second">
        <div className="nav-left">
          {" "}
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/personalweb/home"
          >
            Natalia Garrido
          </NavLink>
        </div>
        <div className="nav-right">
          {" "}
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/personalweb/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/personalweb/projects"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/personalweb/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <label for="menu" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {" "}
        <i className="fas fa-bars"></i>
      </label>
    </>
  );
};
