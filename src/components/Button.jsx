import React from "react";

const Button = ({ btnName, width }) => {
//   console.log(width); 
  return (
    <button
      className={`bg-[#F28D35] rounded font-inter text-[14px] font-bold text-white h-10`}
      style={{ width: width }}
    >
      {btnName}
    </button>
  );
};

export default Button;
