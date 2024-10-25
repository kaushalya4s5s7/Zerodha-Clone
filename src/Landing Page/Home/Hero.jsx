import React from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="Media/homeHero.png"
          alt="Hero image"
          className="mb-5 w-75 mx-auto d-block img-fluid"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-2 mb-5"
          style={{ width: "28%", margin: "0 auto" }}
          onClick={()=>{navigate("/signup")}}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
