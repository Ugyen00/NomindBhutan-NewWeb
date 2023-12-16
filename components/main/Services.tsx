"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <h1
        id="services"
        className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8"
      >
        Services Offered
      </h1>

      <div className="relative min-h-screen w-full h-full z-30">
        <div className="text-white flex items-center justify-center ml-8 mb-32">
          <div className="mr-16">
            <motion.div
              variants={slideInFromTop}
              className="text-[35px] mb-8 font-bold"
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                CHATBOT{" "}
              </span>
            </motion.div>
            <p className="text-[20px] text-gray-200">
              Elevate customer interactions with our AI Chatbot service,
              employing
              <br />
              advanced natural language processing and machine learning. Our
              <br />
              intelligent virtual assistants ensure seamless, personalized
              <br />
              communication, enhancing customer satisfaction <br />
              and operational efficiency.
            </p>
            <a href={`#contact-us`} className="cursor-pointer flex pt-8 ">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[16px]">Drop Us a Line</h1>
              </motion.div>
            </a>
          </div>
          <Image src="video.svg" alt="video" width={700} height={500} />
        </div>

        <div className="text-white flex items-center justify-center ml-8 mb-32">
          <Image src="video.svg" alt="video" width={700} height={500} />
          <div className="ml-36">
            <motion.div
              variants={slideInFromTop}
              className="text-[35px] mb-8 font-bold"
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                AUTOMATION{" "}
              </span>
            </motion.div>
            <p className="text-[20px] text-gray-200">
              Streamline and optimize operations with our AI Automation <br />
              service, leveraging artificial intelligence to automate <br />
              repetitive tasks. Boost productivity, focus on core business{" "}
              <br />
              functions, and drive operational efficiency with our <br />
              tailored automation solutions.
            </p>
            <a href={`#contact-us`} className="cursor-pointer flex pt-8 ">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[16px]">Drop Us a Line</h1>
              </motion.div>
            </a>
          </div>
        </div>

        <div className="text-white flex items-center justify-center mb-32 ml-8">
          <div className="mr-16">
            <motion.div
              variants={slideInFromTop}
              className="text-[35px] mb-8 font-bold"
            >
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                RESEARCH{" "}
              </span>
              AND
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                DEVELOPMENT{" "}
              </span>
            </motion.div>
            <p className="text-[20px] text-gray-200">
              Pioneer the future of artificial intelligence through our AI
              <br />
              Research and Development services. Collaborate with us to explore
              <br />
              emerging technologies, pushing the boundaries of AI innovation and
              <br />
              contributing to the evolution of intelligent systems.
            </p>
            <a href={`#contact-us`} className="cursor-pointer flex pt-8">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[16px]">Drop Us a Line</h1>
              </motion.div>
            </a>
          </div>
          <Image src="video.svg" alt="video" width={700} height={500} />
        </div>
      </div>

      <div className="mb-16">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-white mb-16"
        >
          HOW
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            CHATBOT{" "}
          </span>
          WORKS?
        </motion.div>
        <div className="flex items-center justify-center ml-8 mb-16">
          <Image src="working.svg" alt="working" width={700} height={500} />
        </div>
        <p className="text-gray-200 text-[18px] text-center">
          The chatbot aids you by solve your customers queries by engaging into
          a conversation{" "}
        </p>
      </div>

      <div>
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-white mb-16"
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
          />
        </div>
        <p className="text-gray-200 text-[18px] text-center mb-32">
          Integration on various apps without having hard time to code
        </p>
      </div>
    </>
  );
};

export default Services;
