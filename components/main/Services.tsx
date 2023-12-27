"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <motion.div
        id="services"
        variants={slideInFromTop}
        className="text-[30px] sm:text-[40px] font-bold text-center sm:mb-4 sm:py-8 sm:pt-16 text-white"
      >
        SERVICES
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          OFFERED{" "}
        </span>
      </motion.div>

      <div className="relative min-h-screen w-full h-full z-30">
        <div className="text-white flex flex-wrap items-center justify-center mb-16 sm:mb-32">
          <div className=":mxlr-12 p-4 ml-4">
            <motion.div
              variants={slideInFromTop}
              className="text-[20px] sm:text-[35px] mb-4 sm:mb-8  font-bold"
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                CHATBOT{" "}
              </span>
            </motion.div>
            <p className="text-[16px] sm:text-[20px] text-gray-200 max-w-full sm:max-w-[500px]  ">
              Elevate customer interactions with our AI Chatbot service,
              employing advanced natural language processing and machine
              learning. Our intelligent virtual assistants ensure seamless,
              personalized communication, enhancing customer satisfaction and
              operational efficiency.
            </p>

            <a href="/contact" className="cursor-pointer flex pt-8 ">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[6px] px-[15px] sm:py-[10px] sm:px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[14px] sm:text-[16px]">
                  Drop Us a Line
                </h1>
              </motion.div>
            </a>
          </div>
          <iframe
            className="sm:p-16 md:p-0 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-64 sm:h-[400px] lg:h-[500px]"
            src="https://www.youtube.com/embed/TKVd8uMlYN8?si=7y-Y1VZDelPfHVmE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>{" "}
        </div>

        <div className="text-white flex flex-wrap items-center justify-center  mb-16 sm:mb-32">
          <iframe
            className="sm:p-16 md:p-0 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-64 sm:h-[400px] lg:h-[500px] lg:ml-4"
            src="https://www.youtube.com/embed/TKVd8uMlYN8?si=7y-Y1VZDelPfHVmE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>{" "}
          <div className="xl:ml-36 p-4 ">
            <motion.div
              variants={slideInFromTop}
              className="text-[20px] sm:text-[35px] mb-4 sm:mb-8 font-bold"
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                AUTOMATION{" "}
              </span>
            </motion.div>
            <p className="text-[16px] sm:text-[20px] text-gray-200 max-w-full sm:max-w-[500px]">
              Streamline and optimize operations with our AI Automation service,
              leveraging artificial intelligence to automate repetitive tasks.
              Boost productivity, focus on core business functions, and drive
              operational efficiency with our tailored automation solutions.
            </p>
            <a href="/contact" className="cursor-pointer flex pt-8 ">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[6px] px-[15px] sm:py-[10px] sm:px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[14px] sm:text-[16px]">
                  Drop Us a Line
                </h1>
              </motion.div>
            </a>
          </div>
        </div>

        <div className="text-white flex flex-wrap items-center justify-center  md:mb-32 sm:ml-8">
          <div className="xl:mr-16 p-4 ml-4">
            <motion.div
              variants={slideInFromTop}
              className="text-[20px] sm:text-[35px] mb-4 sm:mb-8 font-bold "
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                RESEARCH{" "}
              </span>
              &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                DEVELOPMENT{" "}
              </span>
            </motion.div>
            <p className="text-[16px] sm:text-[20px] text-gray-200 max-w-full sm:max-w-[500px]">
              Pioneer the future of artificial intelligence through our AI
              Research and Development services. Collaborate with us to explore
              emerging technologies, pushing the boundaries of AI innovation and
              contributing to the evolution of intelligent systems.
            </p>
            <a href="/contact" className="cursor-pointer flex pt-8">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[6px] px-[15px] sm:py-[10px] sm:px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[14px] sm:text-[16px]">
                  Drop Us a Line
                </h1>
              </motion.div>
            </a>
          </div>
          <iframe
            className="sm:p-16 md:p-0 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-64 sm:h-[400px] lg:h-[500px] lg:mr-8"
            src="https://www.youtube.com/embed/TKVd8uMlYN8?si=7y-Y1VZDelPfHVmE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </div>

      <div className="mb-16 mr-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[20px] sm:text-[40px] font-bold text-center text-white mb-16"
        >
          HOW
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            CHATBOT{" "}
          </span>
          WORKS?
        </motion.div>
        <div className="flex items-center justify-center ml-8 mb-8 sm:mb-16">
          <Image src="working.svg" alt="working" width={700} height={500} />
        </div>
        <p className="text-gray-200 text-[16px] sm:text-[18px] text-center p-8">
          The chatbot aids you by solve your customers queries by engaging into
          a conversation{" "}
        </p>
      </div>

      <div className="mr-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[20px] sm:text-[40px] font-bold text-center text-white mb-8 sm:mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            INTEGRATE{" "}
          </span>
          WITHOUT CODE
        </motion.div>
        <div className="flex items-center justify-center  mb-16">
          <Image
            src="integration.svg"
            alt="integration"
            width={700}
            height={500}
            className="p-4"
          />
        </div>
        <p className="text-gray-200 text-[16px] sm:text-[18px] text-center ml-2 sm:ml-0 mb-8 before:sm:mb-16 md:mb-32">
          Integration on various apps without having hard time to code
        </p>
      </div>
    </>
  );
};

export default Services;
