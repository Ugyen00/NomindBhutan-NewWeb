"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props: any) {
  const { scene } = useGLTF("/nola.glb");
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };
  return (
    <group onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <primitive object={scene} {...props} />
      {hovered && (
        <mesh>
          {/* Your hover effect elements or changes go here */}
          {/* For example, change the color of the model */}
          <meshBasicMaterial color="red" />
        </mesh>
      )}
    </group>
  );
}

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-8 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            AI ChatBot
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-8 max-w-[600px]"
        >
          NoMindBhutan is a pioneering AI chatbot agent startup that is
          reshaping the way businesses connect with their customers.
        </motion.p>
        <a href="#about-me" className="cursor-pointer">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Book for Demo</h1>
          </motion.div>
        </a>
      </div>

      <motion.div
        variants={slideInFromRight(0.1)}
        className="w-[550px] h-[550px] flex justify-center items-center ml-12 pr-12 pb-24"
      >
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{ position: "absolute" }}
        >
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"sunset"}>
              <Model scale={0.1} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
