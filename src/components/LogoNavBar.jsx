import React from "react";
import { Link } from "react-router-dom";

const LogoNavbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="assets/Guvi-blog-logo.png" alt="Logo" />{" "}
        </Link>
        <div
          className="d-flex align-items-center"
          style={{ marginRight: "16px" }}
        >
          <Link
            className="courses nav-link me-3"
            to="/Courses"
            aria-current="page"
          >
            Courses
          </Link>
          <Link
            className="courses nav-link me-3"
            to="/Courses"
            aria-current="page"
          >
            Live Classes
          </Link>
          <Link
            className="courses nav-link me-3"
            to="/Courses"
            aria-current="page"
          >
            Pratices
          </Link>
          <Link
            className="courses nav-link me-3"
            to="/Courses"
            aria-current="page"
          >
            Our Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LogoNavbar;
