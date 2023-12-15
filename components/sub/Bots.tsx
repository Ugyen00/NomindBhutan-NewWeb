"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  imageStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
  cardStyles?: React.CSSProperties;
}

const Bots = ({
  src,
  title,
  description,
  width,
  height,
  imageStyles,
  buttonStyles,
  cardStyles,
}: Props) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      style={cardStyles}
    >
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        className="object-contain"
        style={imageStyles}
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a href="#about-me" className="cursor-pointer">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
            style={buttonStyles}
          >
            <h1 className="Welcome-text text-[13px]">TRY NOW</h1>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Bots;
