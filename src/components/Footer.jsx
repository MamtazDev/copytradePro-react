import React from "react";
import twitter from "../assets/images/twitter.png";
import talegram from "../assets/images/telegram.png";
import email from "../assets/images/email.png";
import rightArrow from "../assets/images/right_arrow.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 foo_mr">
            <div className="foo_inner">
              <ul>
                <li>Quick links</li>
                <li>
                  <a href="#presale_live">Presale</a>
                </li>
                <li>
                  <a href="#key__feature">Key Features</a>
                </li>
                <li>
                  <a href="#the_platform">The Platform</a>
                </li>
                <li>
                  <a href="#road_map">Road Map</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 foo_mr">
            <div className="foo_inner foo_p ">
              <ul>
                <li>contact</li>
                <li>
                  <a href="#">
                    <img className="me-2" src={twitter} alt="Twitter" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="me-2" src={talegram} alt="" /> Telegram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="me-2" src={email} alt="" />{" "}
                    admin@copytradepro.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="foo_inner foo_p">
              <span>Newsletter</span>
              <p className="mb-4">
                Subscribe to our newsletter to get the latest announcements and
                offers{" "}
              </p>
              <div className="footer_form mx-auto">
                <form
                  action=""
                  className="d-flex justify-content-between align-items-center"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit">
                    <img src={rightArrow} alt="Button" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
