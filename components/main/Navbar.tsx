import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[50px] fixed top-2 z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[25px] backdrop-blur-lg backdrop-filter bg-[#0300145e] bg-opacity-70 rounded-full border border-[#7042f861]">
        <Link
          href="/#home"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={200}
            height={110}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-30">
          <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] text-gray-200">
            <a href="/#services" className="cursor-pointer relative group">
              Services
              <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="/#pricing" className="cursor-pointer relative group">
              Pricing
              <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="/#aboutus" className="cursor-pointer relative group">
              About Us
              <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="/#featuredbot" className="cursor-pointer relative group">
              Featured Bot
              <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
        <div className="h-auto w-auto flex flex-row items-center">
          <button className="flex items-center justify-between w-full h-auto ml-2 px-2 py-[10px] rounded-full text-gray-200">
            Dashboard
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={30}
              height={20}
              className="cursor-pointer ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
