import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/landing page/Navbar";
import Header from "../components/landing page/Header";
import Features from "../components/landing page/Features";
import VideoSection from "../components/landing page/VideoSection";
import Footer from "../components/landing page/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Features/>
      <div id="watch-demo-section">
        <VideoSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
