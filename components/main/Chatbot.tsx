"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [secondDivWidth, setSecondDivWidth] = useState(42);
  const [chatBotOpen, setChatBotOpen] = useState(false);

  const handleExit = () => {
    setIsVisible(false);
    setSecondDivWidth(160); // Increase width of the second div
  };

  useEffect(() => {
    // Add an event listener to listen for messages from the iframe
    const handleMessage = (event) => {
      if (event.data === "closeIframe") {
        // Close the iframe
        setChatBotOpen(false);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      {/* First motion div */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              y: 200,
              width: -64,
              height: -64,
              opacity: 0,
            }} // Initial position (below screen) and opacity
            animate={{
              y: 0,
              width: 64,
              height: 64,
              opacity: 1,
              translateX: "-50%",
            }} // Animation to move up and increase opacity
            transition={{
              delay: 2,
              duration: 1,
              type: "spring",
              stiffness: 70,
            }} // Animation duration and type
            exit={{
              y: 0,
              opacity: 0,
              scale: 0,
              translateX: "-50%",
              transition: { duration: 1 }, // Remove delay from exit animation
            }} // Exit animation when isVisible becomes false
            onAnimationComplete={handleExit} // Callback to set isVisible to false after animation completes
            className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full z-[9999]"
          />
        )}
      </AnimatePresence>

      {/* Second motion div */}
      <motion.div
        initial={{ y: 200, width: 42, height: 42, opacity: 0 }} // Initial position (below screen) and opacity
        animate={{
          y: -15.5,
          translateY: 4,
          width: chatBotOpen ? "80%" : secondDivWidth, // Dynamic width based on state
          height: chatBotOpen ? "90vh" : 42,
          opacity: 1,
          translateX: "-50%",
        }} // Animation to move up and increase opacity
        transition={{
          delay: isVisible ? 2 : 0,
          duration: 1,
          type: "spring",
          stiffness: 70,
        }} // Animation duration and type
        className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-[9999] flex justify-center items-center min-h-[42px] min-w-[42px] overflow-hidden ${
          chatBotOpen
            ? "items-start bg-[#333335]/80 backdrop-blur-2xl transition-all duration-500 ease-in-out rounded-[1.2rem]"
            : "items-center bg-[#333335] rounded-[2rem] cursor-pointer"
        }`}
        onClick={() => setChatBotOpen(!chatBotOpen)}
      >
        <Image
          src="/logo-white-removebg.png"
          alt="NoMindBhutan"
          width={24}
          height={24}
          className={`rounded-full absolute ${
            chatBotOpen
              ? "w-9 h-9 top-3 left-3"
              : "w-6 h-6 top-1/2 -translate-y-1/2 left-2"
          } transition-all duration-500 ease-in-out`}
        />
        <AnimatePresence>
          {!chatBotOpen && !isVisible && (
            <motion.p
              initial={{ opacity: 0, x: 300, display: "none" }}
              animate={{ opacity: 1, x: 0, display: "block" }}
              transition={{ duration: 1, type: "spring", stiffness: 30 }}
              exit={{ opacity: 0, x: 300, display: "none" }}
              className="text-xs overflow-hidden -mb-1 ml-4 font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-white bg-[length:200%_auto] animate-gradient"
            >
              NoLand
            </motion.p>
          )}
        </AnimatePresence>

        <iframe
          allow="geolocation *"
          src={`http://localhost:3001/chatbot-custom/GiQ2-OLRqTGsSdGj7utJe`}
          id="nomind-bubble-window"
          className="transition-all duration-500 ease-in-out"
          style={{
            border: "none",
            position: "relative",
            flexDirection: "column",
            justifyContent: "space-between",
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            display: chatBotOpen ? "flex" : "none",
            zIndex: 2147483645,
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </motion.div>
    </>
  );
};

export default Chatbot;
