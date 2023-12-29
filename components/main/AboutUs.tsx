"use client";
import React from "react";
import Image from "next/image";
import CountUpAnimation from "../sub/Count";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const AboutUs = () => {
  return (
    <>
      <div id="aboutus">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] sm:text-[40px] font-bold text-center text-gray-200 py-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            ABOUT{" "}
          </span>
          US
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <Image
            src="/team.jpg"
            alt="team"
            width={700}
            height={500}
            className="p-8 md:ml-4 lg:ml-16"
          />
          <p className="text-[20px] text-gray-200 p-8 md:p-16">
            Introducing our startup, pioneering the development of exceptionally
            friendly bots. Join us as we redefine human-machine interaction,
            making technology more approachable and engaging.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center text-white mt-8 lg:mt-16">
          <CountUpAnimation targetCount={4} label="Clients" />
          <div className="xl:ml-4" />
          <CountUpAnimation targetCount={7} label="Employee" />
          <div />
          <CountUpAnimation targetCount={4} label="Project Completed" />
        </div>
        <div>
          <div className="pt-32">
            <motion.div
              variants={slideInFromTop}
              className="text-[25px] sm:text-[35px] font-bold text-center text-gray-200 mb-8"
            >
              MEET OUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                PULSE{" "}
              </span>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center pb-8">
              <div className="mb-16 px-4">
                <img
                  src={"/ugyen.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className=" md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">Ugyen Dendup</p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Chief Executive Officer
                </p>
              </div>

              <div className="mb-16 px-4">
                <img
                  src={"/tsheltrim.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className=" md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">
                  Tsheltrim Pemo
                </p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Head of Product
                </p>
              </div>
              <div className="mb-16 px-4">
                <img
                  src={"/kuenzang.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className=" md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">
                  Kuenzang Namgyal
                </p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Head of Fullstack
                </p>
              </div>
              <div className="mb-16 px-4">
                <img
                  src={"/pema.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className="md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">Pema</p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Head of Cybersecurity
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
              <div className="mb-16 px-4">
                <img
                  src={"/jamphel.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className="md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">
                  Jamphel Yigzin Samdrup
                </p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Cheif Technology Officer
                </p>
              </div>
              <div className="mb-16 px-4">
                <img
                  src={"/namda.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className="md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">
                  Jampel Namdag Dorji
                </p>
                <p className=" text-[16px] text-gray-400 md:pl-8">Head of AI</p>
              </div>
              <div className="mb-16 px-4">
                <img
                  src={"/Nima.jpg"}
                  alt="img3"
                  style={{ width: 300, height: 250 }}
                  className=" md:pl-8"
                />
                <p className=" text-[16px] text-white md:pl-8">Nima Wangdi</p>
                <p className=" text-[16px] text-gray-400 md:pl-8">
                  Head of Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
