import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid  text-center mb-5  p-5 my-5"
      style={{
        marginBottom: "20px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1>Zerodha Products</h1>
      <h2 className="fs-4">Sleek, modern, and intuitive trading platforms</h2>
      <p>
        Check out our{" "}
        <a href="">
          investment offering<i className="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
