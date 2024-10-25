import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  // Use the useNavigate hook
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1>Open a Zerodha Account</h1>
      <p className="text-muted">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/signup")}>
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
