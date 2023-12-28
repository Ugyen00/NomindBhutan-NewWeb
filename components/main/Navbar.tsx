"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full h-[50px] fixed top-2 z-40 px-7 sm:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[25px] backdrop-blur-lg backdrop-filter bg-[#0300145e] bg-opacity-70 rounded-full border border-[#7042f861] relative">
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between md:mr-30">
            <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] text-gray-200">
              <Link href="/#services" passHref>
                <button className="cursor-pointer relative group">
                  Services
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </Link>
              <Link href="/#pricing" passHref>
                <button className="cursor-pointer relative group">
                  Pricing
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </Link>
              <Link href="/#aboutus" passHref>
                <button className="cursor-pointer relative group">
                  About Us
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </Link>
              <Link href="/#featuredbot" passHref>
                <button className="cursor-pointer relative group">
                  Featured Bot
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Dashboard Button */}
          <div className="hidden lg:flex h-auto w-auto flex flex-row items-center">
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

      {/* Mobile and Tablet Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black opacity-40 z-40"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={closeMobileMenu}
            ></motion.div>
            <motion.div
              className="md:hidden fixed top-0 right-0 h-screen w-1/2 bg-black z-50"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-end mr-16 py-10">
                <Link href="/#services" passHref>
                  <button
                    className="text-white block cursor-pointer mt-8 mb-8 relative group"
                    onClick={closeMobileMenu}
                  >
                    Services
                    <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </button>
                </Link>
                <Link href="/#pricing" passHref>
                  <button
                    className="text-white block cursor-pointer mb-8 relative group"
                    onClick={closeMobileMenu}
                  >
                    Pricing
                    <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </button>
                </Link>
                <Link href="/#aboutus" passHref>
                  <button
                    className="text-white block cursor-pointer mb-8 relative group"
                    onClick={closeMobileMenu}
                  >
                    About Us
                    <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </button>
                </Link>
                <Link href="/#featuredbot" passHref>
                  <button
                    className="text-white block cursor-pointer mb-8 relative group"
                    onClick={closeMobileMenu}
                  >
                    Featured Bot
                    <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </button>
                </Link>
                <button
                  className="cursor-pointer mb-8 relative group"
                  onClick={closeMobileMenu}
                >
                  <button className="text-white block">Dashboard</button>
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden fixed top-5 right-2 mr-8 sm:mr-16 z-50">
        <button
          onClick={toggleMobileMenu}
          className="text-white cursor-pointer"
        >
          {!isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
