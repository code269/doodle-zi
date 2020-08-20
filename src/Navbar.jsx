import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        doodle <img className="icon" src="../images/favicon.png" alt="icon" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/Submit">
              Submit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Grades">
              Grades
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
