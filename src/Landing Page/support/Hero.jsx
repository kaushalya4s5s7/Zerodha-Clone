import React from "react";
function Hero() {
  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row p-5">
        <div className="col-6">
          {" "}
          <h1 className="fs-5">Support Portal</h1>
          <h2 className="fs-4 mt-5">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            placeholder="Ex: how do i activate my F&O, why is my ,why is my order is getting rejected ..."
            style={{ width: "600px", height: "50px" }}
          />
          <div className="container mt-4">
            <div className="row justify-content-between">
              <div className="col-3">
                <a
                  href=""
                  alt="open"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  Track account opening
                </a>
              </div>
              <div className="col-3">
                <a
                  href=""
                  alt="segment"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  Track account segment
                </a>
              </div>
              <div className="col-3">
                <a
                  href=""
                  alt="margin"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  Intraday Margins
                </a>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-3">
                <a
                  href=""
                  alt="manual"
                  style={{
                    color: "inherit",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  Kite user manual
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <a
            className="d-flex justify-content-end"
            href=""
            alt=" track Ticket"
            style={{
              color: "inherit",
              textDecoration: "underline",
              whiteSpace: "nowrap",
              marginLeft: "500px",
            }}
          >
            Track Tickets
          </a>
          <h1
            className="fs-4 d-flex justify-content-center mt-5
          "
          >
            Featured
          </h1>
          <div
            className="fs-4 d-flex justify-content-center mt-5 mx-4
          "
          >
            {" "}
            <div>
              <a
                href=""
                alt="suspend"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                  marginLeft: "100px",
                  display: "block", // Ensure the link takes the full width and appears on a new line
                }}
              >
                1. Suspension of Trading
              </a>
              <a
                href=""
                alt="suspend"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                  marginLeft: "100px",
                  display: "block", // Ensure the link takes the full width and appears on a new line
                }}
              >
                2. Rights Enlightment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
