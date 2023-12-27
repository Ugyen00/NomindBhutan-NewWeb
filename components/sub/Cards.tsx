"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  time: string;
  description: string;
  features: string[];
  price: string;
  cardStyles?: React.CSSProperties;
}

const Cards = ({
  title,
  time,
  description,
  features,
  price,
  cardStyles,
}: Props) => {
  const [integerPart, decimalPart] = price.split(".");
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-30 mt-16"
      style={cardStyles}
    >
      <div className="relative p-4 flex flex-col h-full">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-semibold text-white text-center">
            {title}
          </h1>
          <p className="mt-4 text-white text-center">
            <span className="text-lg font-bold">{integerPart}.</span>
            {decimalPart && (
              <span className="text-xl sm:text-2xl font-bold">
                {decimalPart}
              </span>
            )}{" "}
          </p>
          <p className="mt-4 text-white text-center">{time}</p>

          <p className="mt-2 text-gray-300 text-center">{description}</p>

          {/* Features List */}
          <ul className="mt-4 text-gray-300 ml-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 text-[#6F00FF]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Button at the super end */}
        <a
          href={`/contact`}
          className="cursor-pointer flex items-center justify-center mt-auto"
        >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9] items-center"
          >
            <h1 className="Welcome-text text-[13px] items-end justify-center">
              Select Plan
            </h1>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
