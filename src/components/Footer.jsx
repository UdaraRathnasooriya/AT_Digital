import React, { Fragment } from "react";
import { main_logo } from "../assets";
import { technologies,services } from "../constants";



const Footer = () => {
  return (
    <Fragment>
      {/* mobile view */}
      <div className="ss:hidden flex flex-col pt-10 px-5 text-white pb-5 gap-10 bg-primary">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-5 w-full">
            <img src={main_logo} className="w-[240px] h-[40px ]" />
            <p className="font-lato w-[320px] font-normal leading-5 text-base ">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="font-inter text-xl font-semibold">
                Our Technologies
              </h1>
              <ul className="flex flex-col font-inter gap-3">
                {technologies.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px]"
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-inter text-xl font-semibold">Our Services</h1>
              <ul className="flex flex-col font-inter gap-3">
                {services.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px] "
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[335px] border-t border-white mx-auto flex gap-4 justify-center text-white pt-2 text-[14px] font-inter">
          <p className="border-r pr-4">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      {/* tab view */}
      <div className="hidden sm:hidden ss:flex flex-col pt-10 px-10 text-white pb-5 gap-10 bg-primary">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-5">
            <img src={main_logo} className="w-[240px] h-[40px ]" />
            <p className="font-lato text-white font-normal leading-5 text-base  w-[413px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-3 w-[220px]">
              <h1 className="font-inter text-xl font-semibold">
                Our Technologies
              </h1>
              <ul className="flex flex-col font-inter gap-3">
                {technologies.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px]"
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 w-[220px]">
              <h1 className="font-inter text-xl font-semibold">Our Services</h1>
              <ul className="flex flex-col font-inter gap-3">
                {services.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px] w-[197px]"
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[630px] border-t border-white mx-auto flex gap-4 justify-center text-white pt-2 text-[14px] font-inter">
          <p className="border-r pr-4">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden sm:flex flex-col pt-10 md:px-20 px-[60px] text-white pb-5 gap-10 bg-primary">
        <div className="flex md:justify-between gap-[182px]">
          <div className="flex flex-col gap-5">
            <img src={main_logo} className="w-[240px] h-[40px ]" />
            <p className="font-lato text-white font-normal leading-5 text-base  w-[413px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-3 sm:w-[255px]">
              <h1 className="font-inter text-xl font-semibold">
                Our Technologies
              </h1>
              <ul className="flex flex-col font-inter gap-3">
                {technologies.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px]"
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-inter text-xl font-semibold">Our Services</h1>
              <ul className="flex flex-col font-inter gap-3 sm:w-[255px]">
                {services.map((tech) => (
                  <li
                    key={tech.id}
                    className="font-medium text-[14px] leading-[17px] sm:w-[250px] md:w-[197px]"
                  >
                    <a href={tech.title}>{tech.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[630px] border-t border-white mx-auto flex gap-4 justify-center text-white pt-2 text-[14px] font-inter">
          <p className="border-r pr-4">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
