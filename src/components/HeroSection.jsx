import React, { Fragment } from "react";
import { hero_background } from "../assets/index";
import Button from "./Button";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="flex flex-col relative">
        <img
          src={hero_background}
          style={{ width: "100vw" }}
          alt="hero section screen image"
          className="w-full h-[248px] ss:h-[448px] sm:h-[700px] object-cover  "
        />
        <div className="w-full pt-6 px-5 ss:px-10 pb-8 flex flex-col gap-5 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] sm:absolute sm:bottom-8 sm:left-8 sm:w-[642px] md:bottom-12 md:left-12">
          <div className="font-inter  w-[335px] ss:text-[48px] ss:w-[688px] ss:leading-[48px] text-4xl font-bold leading-[36px]  text-white sm:w-[576px]">
            <p className="sm:hidden">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </p>
            <div className="sm:flex flex-col hidden">
            <p>We Crush Your</p>
            <p>Competitors, Goals, And</p>
            <p>Sales Records - Without</p>
            <p>The B.S.</p>
            </div>
           
          </div>
          <Button btnName={"GET FREE CONSULTATION"} width={"214px"} />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
