import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h3 className="useful_text">About</h3>
            <p className="footer_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation u
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="useful_text">Menu</h3>
            <div className="footer_menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="useful_text">Useful Link</h1>
            <p className="dummy_text">
              Adipiscing Elit, sed do Eiusmod Tempor incididunt{" "}
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="useful_text">Contact Us</h1>
            <div className="location_text">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Address : Loram Ipusm
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Call : +01 1234567890
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Email : demo@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
