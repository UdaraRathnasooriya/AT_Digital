import React, { Fragment } from "react";
import HorizontalNavBar from "../components/HorizontalNavBar";
import HeroSection from "../components/HeroSection";
import WebCard from "../components/WebCard";
import DigitalCard from "../components/DigitalCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <HorizontalNavBar />
      <HeroSection />
      <WebCard />
      <DigitalCard />
      <Footer />
    </Fragment>
  );
};

export default Home;
