import React from "react";
import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate= useNavigate();
  return (
    <div className="container p-5 mt-5">
      <p className="fs-5 text-muted text-center ">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" alt="Zerodha_tech">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <h2 className="text-center mt-5 p-3">The Zerodha Universe</h2>
      <p className="text-center fs-6">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>{" "}
      <div className="row mx-5 ml-5">
        <div
          className="col-3 mt-4 mx-4 my-2"
          style={{ margin: "0 15px 40px 15px" }}
        >
          <a
            href=""
            alt="Zerodha fund house"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
            }}
          >
            <img
              className=" d-flex justify-content-center mb-3 p-1 mx-4"
              src="Media\zerodhaFundhouse.png"
              style={{
                width: "200px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{
                userSelect: "none",
                fontSize: "13px",
                marginBottom: "80px",
              }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Our asset management venture<br></br> that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
          <a
            href=""
            alt="Streak"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
              marginTop: "20px",
            }}
          >
            <img
              className=" d-flex justify-content-center mb-3 p-1 mx-4"
              src="Media\streakLogo.png"
              style={{
                width: "200px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{ userSelect: "none", fontSize: "13px" }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div
          className="col-3 mt-4 mx-4 my-2"
          style={{ margin: "0 15px 40px 15px" }}
        >
          <a
            href=""
            alt="Sensibull"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
            }}
          >
            <img
              className=" d-flex justify-content-center mb-4 p-1 mx-4"
              src="Media\sensibullLogo.svg"
              style={{
                width: "220px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{
                userSelect: "none",
                fontSize: "13px",
                marginBottom: "80px",
              }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
          <a
            className="mt-5"
            href=""
            alt="SmallCase"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
              marginTop: "20px",
            }}
          >
            <img
              className=" d-flex justify-content-center mb-3 p-1 mx-4"
              src="Media\smallcaseLogo.png"
              style={{
                width: "220px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{ userSelect: "none", fontSize: "13px" }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div
          className="col-3 mt-4 mx-4 my-2"
          style={{ margin: "0 15px 40px 15px" }}
        >
          <a
            href=""
            alt="Tijori"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
            }}
          >
            <img
              className=" d-flex justify-content-center mb-3 p-1 mx-4"
              src="Media\zerodhaFundhouse.png"
              style={{
                width: "200px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{
                userSelect: "none",
                fontSize: "13px",
                marginBottom: "80px",
              }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Our asset management venture<br></br> that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
          <a
            href=""
            alt="Ditto"
            style={{
              textDecoration: "none", // Remove underline from link
              color: "black", // Set text color to black or your desired color
              // Use flexbox for layout
              alignItems: "center", // Center the items vertically
              marginTop: "20px",
            }}
          >
            <img
              className=" d-flex justify-content-center mb-3 p-1 mx-4"
              src="Media\dittoLogo.png"
              style={{
                width: "200px", // Adjust the width (change as needed)
                height: "auto", // Maintain aspect ratio
              }}
            ></img>
            <p
              className="text-center text-muted mt-1"
              style={{ userSelect: "none", fontSize: "13px" }}
            >
              {"   "}
              {/* Prevent text highlighting on select */}
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>
      <div className="text-center">
        <button type="button" class="btn btn-lg btn-primary " onClick={()=>{navigate('/signup')}}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
