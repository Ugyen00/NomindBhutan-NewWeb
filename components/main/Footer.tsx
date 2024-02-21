"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiCopyrightThin } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="relative z-30 m-16">
        <div className="text-white">
          <motion.div
            variants={slideInFromTop}
            className="font-bold text-[50px] md:pl-8 lg:pl-16 pt-8"
          >
            DROP US
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              A LINE{" "}
            </span>
          </motion.div>
          <div className="flex items-start lg:items-center">
            <motion.div
              variants={slideInFromTop}
              className="text-[30px] md:pl-16 sm:pt-8]"
            >
              Let's build
              <br />
              something
              <br />
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                great together.{" "}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="text-white flex items-start md:items-center md:flex-row flex-col mt-8 mb-8">
          <a href="/#home">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={250}
              height={125}
              className="md:ml-24 mb-8"
            />
          </a>
          <div className="pt-[4px] md:pt-[8px] md:pl-[65px] xl:pl-[130px] md:text-[18px] sm:text-[24px] md:ml-[90px] lg:ml-[180px] mb-8 ">
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="font-light">
              <li className="cursor-pointer relative group mb-2">
                <Link href="/Policy" passHref>
                  Privacy Policy{" "}
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
              <li className="cursor-pointer relative group">
                <Link href="/terms" passHref>
                  Terms of Use{" "}
                  <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-[4px] sm:pt-[6px] xl:pl-[149px] sm:text-[24px] md:text-[18px] md:ml-[85px] lg:ml-[170px]">
            <p className="font-semibold mb-2">Contact Us</p>
            <ul className="font-light">
              <li className="mb-2">
                <FaPhoneAlt className="inline-block mr-2" /> +975 77738943
              </li>
              <li className="cursor-pointer relative group mb-2">
                <FaEnvelope className="inline-block mr-2" />{" "}
                nomindbhutan@gmail.com
                <span className="absolute left-0 right-0 bg-white h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="inline-block mr-2" /> Thimphu,
                Kabesa, Bhutan
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-white my-4 mx-auto w-full md:w-[80%] xl:w-[1300px]" />

        <div className="flex items-start md:justify-center mt-8 mb-4">
          <a
            href="https://www.facebook.com/nomindbhutan?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] mx-2 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/nomindbhutan?igshid=ZGNjOWZkYTE3MQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] mx-2 hover:text-white transition-colors duration-300"
          >
            <RiInstagramFill size={25} />
          </a>
          <a
            href="https://youtube.com/@NoMindBhutan?si=eQ4QNvtyyeR7R7Xc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] mx-2 hover:text-white transition-colors duration-300"
          >
            <FaYoutube size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/nomindbhutan-178447281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A3A3A3] mx-2 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <div className=" text-white flex items-center font-light text-[18px] mt-2 mb-4">
            <PiCopyrightThin />
            <p className="ml-1">NoMindBhutan</p>
          </div>
          <div className="text-white flex items-center font-light text-[18px]">
            <p>All rights reserved 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
