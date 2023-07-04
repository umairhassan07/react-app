import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner_section layout_padding">
      <div className="container">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-12">
                  <div className="banner_taital">
                    <h1 className="outstanding_text">Outstanding</h1>
                    <h1 className="coffee_text">Coffee Shop</h1>
                    <p className="there_text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour,{" "}
                    </p>
                    <div className="learnmore_bt">
                      <Link to="/#">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Other carousel items */}
          </div>
          <Link
            className="carousel-control-prev"
            to="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </Link>
          <Link
            className="carousel-control-next"
            to="#main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
