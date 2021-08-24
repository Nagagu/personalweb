import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    menuIsOpen && (
      <div className="modal-menu">
        <div className="menu">
          <Link
            className="nav-item nav-link"
            onClick={(e) => {
              // e.preventDefault();
              // history.push("/portfolio/all");
              setMenuIsOpen(false);
            }}
            to="/personalweb/home"
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/personalweb/about"
          >
            About
          </Link>
          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/personalweb/projects"
          >
            Projects
          </Link>

          <Link
            className="nav-item nav-link"
            onClick={() => setMenuIsOpen(false)}
            to="/personalweb/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    )
  );
};
