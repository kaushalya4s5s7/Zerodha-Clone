import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-start" style={{ textDecoration: "none" }}>
            See pricing
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-0 border w-50 h-25">
              <img
                src="Media\price0.svg"
                alt="0"
                className="img-fluid w-50 h-25"
              ></img>
              <p>
                Free equity delivery and<br></br> direct mutual funds
              </p>
            </div>
            <div className="col p-0 border w-50 h-25">
              <img
                src="Media\price20.svg"
                alt="20"
                className=" w-50 h-25"
              ></img>
              <p>
                Intraday & <br></br>Futures&Options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
