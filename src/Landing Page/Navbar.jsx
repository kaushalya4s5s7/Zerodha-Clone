import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#"  to="/">
          <img
            src="Media/logo.svg"
            style={{ width: "auto", height: "19px" }}
            className="mx-5"
           
          ></img>
        </Link>

        <div
          className="collapse navbar-collapse mx-8 p-1"
          style={{ textAlign: "right", margin: "0" }}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto" style={{ marginLeft: "40px" }}>
            <li className="nav-item active">
              <Link className="nav-link p-3" to="/signup">
                Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link p-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link p-3" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link p-3" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link p-3" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
