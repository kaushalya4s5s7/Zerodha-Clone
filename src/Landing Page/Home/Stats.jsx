import React from "react";
function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="row g-4">
        <div className="col-5 p-3">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <div>
            <h2 className="fs-4">Customer-first always</h2>
            <p className="mb-4 text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="mb-4 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
            </p>
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="mt-4 fs-4">Do better with money</h2>
            <p className="mb-4 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col-7 p-1">
          <img
            src="Media\ecosystem.png"
            style={{ width: "90%", cursor: "pointer" }}
          ></img>
          <div className="text-center p-5">
            <a href="" className="mx-4 " style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="mx-4" style={{ textDecoration: "none" }}>
              Try it now <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
