import React from "react";
import Education from "./Education";
import Hero from "./Hero";
import Navbar from "../Navbar";

import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;