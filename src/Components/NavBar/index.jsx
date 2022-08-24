import React from "react";
import { Link } from "react-router-dom"
import gifChellenge from "../../Assets/Multimedia/gifChellenge.webp"

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand" href="#">
              <img src={gifChellenge} style={{width: "100px", height: "60px"}} alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto display-5">
                <Link to="/" className="nav-link active text-white fs-5 pointerNa mx-1">
                  Home
                </Link>
                <Link to="/users" className="nav-link active text-white fs-5 pointerNa mx-1">
                  Lista De Usuarios
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
