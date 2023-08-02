import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="/src/assets/images/Logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-align-justify"></i>
          </button>

          <p className="ms-md-5 netAddress">
            BSC NETWORK: 0xa2966BAfE331D51477AfB2dE0321e5187BB78758
          </p>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#presale_live"
                >
                  Presale
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#key__feature"
                >
                  Key Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#the_platform">
                  The PLATFORM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#road_map">
                  Road Map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
