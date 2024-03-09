import React, { Fragment, useState } from "react";
import HorizontalNavBar from "../components/HorizontalNavBar";
import HeroSection from "../components/HeroSection";
import WebCard from "../components/WebCard";
import DigitalCard from "../components/DigitalCard";
import Footer from "../components/Footer";

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  console.log(isMobileNavOpen)

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };
  
  return (
    <Fragment>
      <HorizontalNavBar toggleMobileNav={toggleMobileNav} />
      {!isMobileNavOpen && <HeroSection />}
      {!isMobileNavOpen && <WebCard />}
      {!isMobileNavOpen && <DigitalCard />}
      {!isMobileNavOpen && <Footer />}
    </Fragment>
  );
};

export default Home;
