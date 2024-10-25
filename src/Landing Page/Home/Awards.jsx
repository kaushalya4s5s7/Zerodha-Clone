import React from "react";
function Awards() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-0 ">
          <img src="Media/largestBroker.svg"></img>
        </div>
        <div className="col-6">
          <h2>Largest Stock Broker in India</h2>
          <p className="mb-5">
            Zerodha with ₹4.5+ lakh crores of equity investments and contribute
            to 15% of daily retail exchange volumes in India.
          </p>
          <div className="row mb-5">
            <div className="col-6">
              <ul>
                <li className="mb-2">Futures & Options</li>
                <li className="mb-2">Commodity Prices</li>
                <li className="mb-2">Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt.Securities</li>
              </ul>
            </div>
            <img src="Media\pressLogos.png" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
