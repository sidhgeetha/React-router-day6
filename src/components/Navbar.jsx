import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light " >
      <div
        className="container"
        style={{ boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" aria-current="page">
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/fullstack"
              aria-current="page"
            >
              Full Stack
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/datascience" aria-current="page">
              Data Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cybersecurity" aria-current="page">
              Cyber Security
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career" aria-current="page">
              Career
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
