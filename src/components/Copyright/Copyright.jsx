import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="copyright_section">
      <div className="container">
        <p className="copyright_text">
          2020 All Rights Reserved. Design by{" "}
          <Link to="https://html.design">Free html Templates</Link>
        </p>
      </div>
    </div>
  );
}

export default Copyright;
