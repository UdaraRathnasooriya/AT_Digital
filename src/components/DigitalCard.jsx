import React, { Fragment } from "react";
import { image_2 } from "../assets";
import Button from "./Button";

const DigitalCard = () => {
  return (
    <Fragment>
      <Fragment>
        <div className=" flex flex-col ss:hidden items-center gap-5 mb-5 mx-4 ">
          <img src={image_2} className="size-[300px]" />
          <div className="flex flex-col items-center  gap-5">
            <h1 className="font-poppins leading-8 text-primary font-semibold text-3xl text-center max-w-[335px] ">
              Digital Strategy Consulting
            </h1>
            <p className="font-inter leading-5 font-normal max-w-[335px] text-center">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button btnName={"LEARN MORE"} width={"130px"} />
          </div>
        </div>
        <div className="hidden ss:flex items-center my-20 gap-5 mx-4 justify-center md:gap-[108px]">
          <div className="flex flex-col gap-5 ss:max-w-[400px] sm:max-w-[530px] md:max-w-[542px]">
            <h1 className="font-poppins leading-8 text-primary font-semibold text-3xl">
              Digital Strategy Consulting
            </h1>
            <p className="font-inter leading-5 font-normal ">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button btnName={"LEARN MORE"} width={"130px"} />
          </div>
          <img
            src={image_2}
            className="ss:size-[300px] sm:size-[350px] md:size-[414px]"
          />
        </div>
      </Fragment>
    </Fragment>
  );
};

export default DigitalCard;
