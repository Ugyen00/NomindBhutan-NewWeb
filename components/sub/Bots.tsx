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
  sectionId?: string;
}

const Bots = ({
  src,
  title,
  description,
  width,
  height,
  imageStyles,
  cardStyles,
  sectionId,
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
        <a
          href="#home"
          className="cursor-pointer flex items-center justify-center pt-4"
        >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">TRY NOW</h1>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Bots;
