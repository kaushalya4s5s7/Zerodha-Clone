import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Landing Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Landing Page/signup/Signup";
import ProductPage from "./Landing Page/product/ProductPage";
import SupportPage from "./Landing Page/support/SupportPage";
import AboutPage from "./Landing Page/about/AboutPage";
import Navbar from "./Landing Page/Navbar";
import Footer from "./Landing Page/Footer";
import NotFound from "./Landing Page/NotFound";
import PricingPage from "./Landing Page/pricing/PricingPage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
