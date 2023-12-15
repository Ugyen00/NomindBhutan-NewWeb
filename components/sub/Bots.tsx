import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  imageStyles?: React.CSSProperties;
}

const Bots = ({
  src,
  title,
  description,
  width,
  height,
  imageStyles,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
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
        <button className="block mx-auto mt-4 px-8 py-2 bg-white border border-[#1A1A1A] text-[#1A1A1A] hover:text-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300">
          TRY NOW
        </button>
      </div>
    </div>
  );
};

export default Bots;
