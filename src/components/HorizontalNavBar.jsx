import React, { Fragment, useState } from "react";
import { main_logo, icon } from "../assets/index";
import { navLinks } from "../constants";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

const HorizontalNavBar = ({ toggleMobileNav }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const handleToggleMenu = () => {
    setToggle((prevValue) => !prevValue);
    toggleMobileNav();
  };

  return (
    <Fragment>
      <nav className=" bg-primary py-6 px-5 ss:px-10 sm:px-[60px] md:px-20   flex items-center justify-between">
        <img src={main_logo} className="w-[240px] h-9" />
        {toggle ? (
          <AiOutlineClose
            className="w-8 h-8 text-white ss:hidden"
            onClick={handleToggleMenu}
          />
        ) : (
          <TfiMenu
            className="w-8 h-8 text-white ss:hidden"
            onClick={handleToggleMenu}
          />
        )}
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
      {toggle && (
        <nav className="bg-primary h-[90vh] ss:hidden flex pt-8 border-t-2 justify-center">
          <ul className=" space-y-6 flex flex-col  w-full mx-2  ss:hidden  text-white font-inter">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className="font-medium  rounded-sm  text-gray-100 hover:bg-gray-200 hover:text-blue-950 "
                >
                  <a href={`${link.title} `} className="block px-2 py-2">{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default HorizontalNavBar;
