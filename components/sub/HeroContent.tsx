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
      className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-20 mt-8 sm:mt-20 md:mt-40 w-full z-30"
    >
      <div className="h-full w-full flex flex-col lg:gap-8 justify-center m-auto text-start sm:text-center lg:text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col sm:gap-4 mt-16 md:mt-6 text-2xl sm:text-4xl lg:text-6xl font-bold text-white lg:max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            AI Solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-wrap text-gray-400 my-8 lg:max-w-[600px]"
        >
          NoMindBhutan is an Artificial Intelligence research and development
          company. Our mission is to innovate, adapt, and transform the way
          People interact with AI.
        </motion.p>
        <a
          href="/contact"
          className="cursor-pointer flex justify-start items-start sm:items-center sm:justify-center lg:justify-start lg:items-start mb-8"
        >
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
        className="w-full md:w-[550px] h-[450px] md:h-[550px] flex justify-center items-center mt-[-60px] lg:mt-16 xl:mt-4 md:ml-8 xl:ml-12 md:pr-16 xl:pb-28"
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 10 }}
          style={{ position: "absolute", height: "60%", width: "25%" }}
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
