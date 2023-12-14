import { Socials } from "@/constants";
import DropdownMenu from "../sub/dropdown";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={200}
            height={110}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] backdrop-blur-lg backdrop-filter backdrop-blur-md bg-opacity-70 mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#service" className="cursor-pointer">
              Services
            </a>
            <a href="#skills" className="cursor-pointer">
              Pricing
            </a>
            <a href="#skills" className="cursor-pointer">
              About Us
            </a>
            <a href="#projects" className="cursor-pointer">
              Featured Bot
            </a>
          </div>
        </div>
        <div className="h-auto w-auto flex flex-row items-center">
          <button className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
