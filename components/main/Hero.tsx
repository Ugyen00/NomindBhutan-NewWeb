"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import SkillDataProvider from "../sub/SkillDataProvider";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  const logos = [
    { name: "gcit.svg", width: 250, height: 200 },
    { name: "bnb.svg", width: 250, height: 200 },
    { name: "nlc.svg", width: 250, height: 200 },
    { name: "ndi.svg", width: 250, height: 200 },
    { name: "dhi.svg", width: 250, height: 200 },
  ];
  return (
    <>
      <div className="relative flex flex-col h-full w-full" id="home">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
      </div>
      <div
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-gray-200 mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            TRUSTED{" "}
          </span>
          BY
        </motion.div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {logos.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={`/${image.name}`}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
