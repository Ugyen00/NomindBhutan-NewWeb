"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  features: string[];
  price: string;
  cardStyles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties;
}

const Cards = ({
  title,
  description,
  features,
  price,
  cardStyles,
  buttonStyles,
}: Props) => {
  const [integerPart, decimalPart] = price.split(".");
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-30 mt-16"
      style={cardStyles}
    >
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>
        <p className="mt-4 text-white text-center">
          <span className="text-lg font-bold">{integerPart}.</span>
          {decimalPart && (
            <span className="text-2xl font-bold">{decimalPart}</span>
          )}{" "}
        </p>

        <p className="mt-2 text-gray-300 text-center">{description}</p>

        {/* Features List */}
        <ul className="mt-4 text-gray-300 ml-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCheck} className="mr-2 text-[#6F00FF]" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={`#contact-us`}
          className="cursor-pointer flex items-center justify-center mt-8"
        >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
            style={buttonStyles}
          >
            <h1 className="Welcome-text text-[13px]">Select Plan</h1>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
