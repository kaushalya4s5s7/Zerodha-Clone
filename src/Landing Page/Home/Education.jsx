import React from "react";
function Education() {
  return (
    <div className="Container mt-5">
      <div className="row">
        <div className="col">
          <img src="Media\education.svg"></img>
        </div>
        <div className="col mt-5">
          <h1>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            className="  mb-4
            text-start "
            style={{ textDecoration: "none" }}
          >
            Varsity <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href=""
            className=" text-start "
            style={{ textDecoration: "none" }}
          >
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
