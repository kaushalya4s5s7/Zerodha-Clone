import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid mt-5"
      style={{
        backgroundColor: "#fbfbfb",
        padding: "30px 0 5px 0",
        borderTop: "1px solid #eee",
      }}
    >
      <div className="row">
        {/* Logo and Social Media Section */}
        <div className="col-3 p-5">
          <img
            src="\Media\logo.svg"
            style={{ width: "auto", height: "20px" }}
            alt="Zerodha Logo"
          />
          <p className="text-start mt-4 mb-0 text-muted fs-6">
            © 2010 - 2024, Zerodha Broking Ltd.
            <br /> All rights reserved.
          </p>
          <div>
            <a
              className="fs-3 me-3 social-icon"
              target="_blank"
              href="https://instagram.com/zerodhaonline/"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a
              className="fs-3 me-3 social-icon"
              target="_blank"
              href="https://twitter.com/zerodhaonline"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a
              className="fs-3 social-icon"
              target="_blank"
              href="https://www.linkedin.com/company/zerodha"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-3 p-5">
          <h6 className="fw-bold text-muted">Quick Links</h6>
          <ul className="list-unstyled">
            <li className="mt-2">
              <a className="text-muted" href="/about">
                About Us
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/careers">
                Careers
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/help">
                Help & Support
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Information Section */}
        <div className="col-3 p-5">
          <h6 className="fw-bold text-muted">Legal</h6>
          <ul className="list-unstyled">
            <li className="mt-2">
              <a className="text-muted" href="/terms">
                Terms & Conditions
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/disclosures">
                Disclosures
              </a>
            </li>
            <li className="mt-2">
              <a className="text-muted" href="/security">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="col-3 p-5">
          <h6 className="fw-bold text-muted">Contact Us</h6>
          <p className="text-muted">
            Email: <a href="mailto:support@zerodha.com">support@zerodha.com</a>
          </p>
          <p className="text-muted">Phone: 080 4719 2020</p>
          <p className="text-muted">Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
