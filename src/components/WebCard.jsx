import React, { Fragment } from "react";
import { image_1 } from "../assets";
import Button from "./Button";

const WebCard = () => {
  return (
    <Fragment>
      {/* mobile view */}
      <div className=" flex flex-col ss:hidden items-center gap-5 my-10 mx-4 ">
        <img src={image_1} className="size-[300px]" />
        <div className="flex flex-col items-center  gap-5">
          <h1 className="font-poppins leading-8 text-primary font-semibold text-3xl text-center max-w-[335px] ">
            Web & Mobile App Development
          </h1>
          <p className="font-inter leading-5 font-normal max-w-[335px] text-center">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button btnName={"LEARN MORE"} width={"130px"} />
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden ss:flex items-center my-20 gap-5 mx-4 justify-center md:gap-[108px]">
        <img
          src={image_1}
          className="ss:size-[300px] sm:size-[350px] md:size-[414px]"
        />
        <div className="flex flex-col gap-5 ss:max-w-[400px] sm:max-w-[530px] md:max-w-[542px]">
          <h1 className="font-poppins leading-8 text-primary font-semibold text-3xl">
            Web & Mobile App Development
          </h1>
          <p className="font-inter leading-5 font-normal ">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button btnName={"LEARN MORE"} width={"130px"} />
        </div>
      </div>
    </Fragment>
  );
};

export default WebCard;
