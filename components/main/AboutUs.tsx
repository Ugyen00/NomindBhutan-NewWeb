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
          className="text-[40px] font-bold text-center text-gray-200 py-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            ABOUT{" "}
          </span>
          US
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/team.jpg"
            alt="team"
            width={700}
            height={500}
            className="p-8 md:ml-16"
          />
          <p className="text-[20px] text-gray-200 p-16 md:p-32">
            Embarking on a journey of innovation with NoMindBhutan, where
            brilliance meets Bhutanese tranquility, crafting AI-driven solutions
            for a global paradigm.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center text-white justify-center mt-8 md:mt-16">
          <CountUpAnimation targetCount={4} label="Clients" />
          <div className="my-4 md:mx-4" />
          <CountUpAnimation targetCount={7} label="Employee" />
          <div className="my-4 md:mx-4" />
          <CountUpAnimation targetCount={4} label="Project Completed" />
        </div>
        <div>
          <div className="pt-32">
            <motion.div
              variants={slideInFromTop}
              className="text-[35px] font-bold text-center text-gray-200 mb-8"
            >
              MEET OUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                PULSE{" "}
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center pb-8">
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">Ugyen Dendup</p>
                <p className=" text-[16px] text-gray-400 pl-8">
                  Chief Executive Officer
                </p>
              </div>

              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">Tsheltrim Pemo</p>
                <p className=" text-[16px] text-gray-400 pl-8">
                  Head of Product
                </p>
              </div>
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">Kuenzang Namgyal</p>
                <p className=" text-[16px] text-gray-400 pl-8">
                  Head of Fullstack
                </p>
              </div>
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">Pema</p>
                <p className=" text-[16px] text-gray-400 pl-8">
                  Head of Cybersecurity
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">
                  Jamphel Yigzin Samdrup
                </p>
                <p className=" text-[16px] text-gray-400 pl-8">
                  Cheif Technology Officer
                </p>
              </div>
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">
                  Jampel Namdag Dorji
                </p>
                <p className=" text-[16px] text-gray-400 pl-8">Head of AI</p>
              </div>
              <div className="mb-8">
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className=" text-[16px] text-white pl-8">Nima Wangdi</p>
                <p className=" text-[16px] text-gray-400 pl-8">
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
