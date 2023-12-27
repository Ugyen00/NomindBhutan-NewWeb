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
      className="flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full z-30"
    >
      <div className="h-full w-full flex flex-col md:gap-2 lg:gap-8 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-16 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
        <a href="/contact" className="cursor-pointer">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[10px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Book for Demo</h1>
          </motion.div>
        </a>
      </div>
      <motion.div
        variants={slideInFromRight(0.1)}
        className="w-full md:w-[550px] h-[550px] flex justify-center items-center mt-16 md:mt-0 md:ml-8 xl:ml-12 md:pr-16 xl:pb-28"
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 10 }}
          style={{ position: "absolute", height: "70%", width: "70%" }}
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
