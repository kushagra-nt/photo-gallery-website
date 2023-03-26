import React from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white sm-px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <img src={logo} className="w-20 boject-contain m-3" />
      <h1 className="font-extrabold text-3xl">Photos</h1>
    </div>
  );
};
