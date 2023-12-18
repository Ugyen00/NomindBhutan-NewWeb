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

const Footer = () => {
  return (
    <footer>
      <div className="relative z-30 m-16">
        <div className="text-white">
          <motion.div
            variants={slideInFromTop}
            className="font-bold text-[50px] pl-16 pt-8"
          >
            DROP US
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              A LINE{" "}
            </span>
          </motion.div>
          <div className="flex items-center">
            <motion.div
              variants={slideInFromTop}
              className="text-[30px] pl-16 pt-8]"
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

        <div className="text-white flex items-center mt-8 mb-8">
          <a href="/#home">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={250}
              height={125}
              className="ml-24"
            />
          </a>
          <div className="pt-[8px]  pl-[130px] text-[18px] ml-[180px]">
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="font-light">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="pt-[6px] pl-[149px] text-[18px] ml-[170px]">
            <p className="font-semibold mb-2">Contact Us</p>
            <ul className="font-light">
              <li>
                <FaPhoneAlt className="inline-block mr-2" /> +975 77738943
              </li>
              <li>
                <FaEnvelope className="inline-block mr-2" />{" "}
                nomindbhutan@gmail.com
              </li>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" /> Thimphu,
                Kabesa, Bhutan
              </li>
            </ul>
          </div>
        </div>

        <hr
          className="border-t border-white my-4 mx-auto"
          style={{ maxWidth: "1300px" }}
        />

        <div className="flex justify-center mt-8 mb-4">
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
        <div className="flex flex-col items-center">
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
