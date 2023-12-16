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
        <h1 className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16">
          About Us
        </h1>
        <div className="flex items-center justify-center">
          <Image src="/team.jpg" alt="team" width={700} height={500} />
          <p className="text-[20px] text-gray-200 ml-16">
            Embarking on a journey of innovation with
            <br />
            <br /> NoMindBhutan, where brilliance meets Bhutanese
            <br />
            <br /> tranquility, crafting AI-driven solutions
            <br />
            <br />
            for a global paradigm.
          </p>
        </div>
        <div className="flex items-center text-white justify-center">
          <CountUpAnimation targetCount={3} label="Clients" />
          <div className="mx-4" />
          <CountUpAnimation targetCount={7} label="Members" />
          <div className="mx-4" />
          <CountUpAnimation targetCount={4} label="Chatbots" />
        </div>
        <div>
          <div className="pt-32">
            <motion.div
              variants={slideInFromTop}
              className="text-[35px] font-bold text-center text-gray-200 mb-8"
            >
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Pulse{" "}
              </span>
            </motion.div>

            <div className="flex items-center justify-center pb-8">
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">Ugyen Dendup</p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Chief Executive Officer
                </p>
              </div>

              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">Tsheltrim Pemo</p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Head of Growth
                </p>
              </div>
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">Kuenzang Namgyal</p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Head of Fullstack
                </p>
              </div>
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">Pema</p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Head of Cybersecurity
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">
                  Jamphel Yigzin Samdrup
                </p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Cheif Technology Officer
                </p>
              </div>
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">
                  Jampel Namdag Dorji
                </p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
                  Head of AI
                </p>
              </div>
              <div>
                <img
                  src={"/img3.svg"}
                  alt="img3"
                  style={{ width: 300, height: 300 }}
                  className=" pl-8"
                />
                <p className="font-sans text-[16px] pl-8">Nima Wangdi</p>
                <p className="font-sans text-[16px] text-gray-400 pl-8">
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
