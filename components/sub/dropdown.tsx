import React from "react";
import { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 relative">
      <div
        className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] backdrop-blur-lg backdrop-filter backdrop-blur-md bg-opacity-70 mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#service" className="cursor-pointer">
          Service
        </a>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white py-2 px-4 shadow-md rounded">
            <a href="#pricing">Pricing</a>
            <a href="#about-us">About Us</a>
            <a href="#featured-bot">Featured Bot</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
