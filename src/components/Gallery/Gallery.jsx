import React from "react";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="gallery_taital">Our Gallery</h1>
            <p className="gallery_text">
              Lorem Ipsum is simply dummy text of printing typesetting ststry
              lorem Ipsum the industry'ndard dummy text ever since of the 1500s,
              when an unknown printer took a galley of type and scra make a type
              specimen book. It has
            </p>
          </div>
        </div>
        <div className="">
          <div className="gallery_section_2">
            <div className="row">
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-1.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-2.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-3.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery_section_2">
            <div className="row">
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-4.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-5.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="overlay">
                      <div className="text">
                        <Link to="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-6.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="overlay">
                      <div className="text">
                        <Link to="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery_section_2">
            <div className="row">
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-7.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-8.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="container_main">
                  <img src="assets/images/img-9.png" alt="Avatar" className="image" />
                  <div className="overlay">
                    <div className="text">
                      <Link to="#">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seemore_bt">
          <Link to="#">See More</Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
