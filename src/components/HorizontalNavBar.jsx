import React, { Fragment } from "react";
import { main_logo, icon } from "../assets/index";
import { navLinks } from "../constants";



const HorizontalNavBar = () => {
  return (
    <Fragment>
      <nav className=" bg-primary py-6 px-5 ss:px-10 sm:px-[60px] md:px-20   flex items-center justify-between">
        <img src={main_logo} className="w-[240px] h-9" />
        <img src={icon} className="w-8 h-6  ss:hidden mt-3" />
        <ul className=" space-x-7 ss:flex hidden  text-white font-inter">
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="font-medium">
                <a href={`${link.title}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default HorizontalNavBar;
