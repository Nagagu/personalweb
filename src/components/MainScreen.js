import React from "react";
import { Link } from "react-router-dom";

export const MainScreen = () => {
  return (
    <>
      {/* <div className="header"></div> */}
      {/* <div className="container"> */}
      <div className="section main">
        <div className="logo"></div>
        <div className="name">
          Natalia Garrido
          <p>Full Stack Developer - Creative designer</p>
        </div>
        <div className="buttons-main">
          <button>
            <Link className="nav-item nav-link" to="/personalweb/about">
              About
            </Link>
          </button>
          <button>
            <Link className="nav-item nav-link" to="/personalweb/projects">
              Projects
            </Link>
          </button>
          <button>
            <Link className="nav-item nav-link" to="/personalweb/contact">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
