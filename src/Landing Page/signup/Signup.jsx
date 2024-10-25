import React, { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // Timer for 1 minute
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to check if OTP is sent

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/request-otp", { email });
      setIsOtpSent(true); // OTP is sent, show OTP field and start timer
      alert("OTP sent to your email!");

      // Start the countdown timer
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(countdown); // Stop the timer after 1 minute
          }
          return prevTimer - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  useEffect(() => {
    // Set timeout to create a fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before the animation starts, you can adjust this value

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div
      className="container mt-5 p-5"
      style={{ marginLeft: "50px", width: "auto", height: "auto" }}
    >
      <div className="row">
        <div
          className="col-6"
          style={{
            opacity: isVisible ? 1 : 0, // Fade effect
            transition: "opacity 1s", // Duration of the fade effect
          }}
        >
          <img src="Media/signup.png" alt="Signup" />
        </div>
        <div className="col-2"></div>
        <div
          className="col-4"
          style={{
            opacity: isVisible ? 1 : 0, // Fade effect
            transition: "opacity 1s", // Duration of the fade effect
          }}
        >
          <h1 className="fs-3 mt-4 mx-4 text-muted">
            {isOtpSent ? "Confirm OTP" : "Signup now"}
          </h1>
          <p className="fs-6 mt-4 mx-4" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
            {isOtpSent
              ? "Please enter the OTP sent to your email"
              : "Or track your existing application"}
          </p>
          <div className="form-group mt-4 mx-4">
            {!isOtpSent ? (
              <>
                {/* Email Input */}
                <label htmlFor="email" className="text-muted">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <p
                  className="mt-3"
                  style={{ color: "rgba(0, 0, 0, 0.4)", fontSize: "13px" }}
                >
                  You will receive an OTP
                </p>
                <button
                  className="btn btn-primary mx-1"
                  onClick={handleRequestOtp}
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Request OTP
                </button>
              </>
            ) : (
              <>
                {/* OTP Input */}
                <label htmlFor="otp" className="text-muted">
                  Enter OTP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
                <p
                  className="mt-3"
                  style={{ color: "rgba(0, 0, 0, 0.4)", fontSize: "13px" }}
                >
                  You have {timer} seconds to enter your OTP.
                </p>
                <button
                  className="btn btn-primary mx-1"
                  type="submit"
                  style={{ marginTop: "10px" }}
                  onClick={() => alert("OTP verified!")}
                >
                  Verify OTP
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
