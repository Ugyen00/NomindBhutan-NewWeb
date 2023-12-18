"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Contact = () => {
  return (
    <>
      <div id="contact" className="mt-24 relative z-30">
        <div className="flex flex-col items-center justify-center mb-16 ml-8 mt-4 text-white ">
          <motion.div
            variants={slideInFromTop}
            className="text-[35px] mb-8 font-bold"
          >
            GET IN
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              TOUCH{" "}
            </span>
          </motion.div>
          <p className="font-light text-lg text-center">
            As you might expect of a company that began as a potential startup,
            we pay strict attention to the things we do.
          </p>
        </div>

        <div className="ml-16 flex items-center justify-center">
          <form method="post" action="#">
            <div className="mb-8">
              <input
                className="mt-1 p-2 border-b border-white w-[500px]"
                type="text"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-8">
              <input
                className="mt-1 p-2 border-b border-white w-[500px]"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-8">
              <textarea
                className="mt-1 p-2 border-b border-white w-[500px]"
                rows={3}
                name="bio"
                id="bio"
                placeholder="Share Your Thoughts"
              ></textarea>
            </div>
            <div className="font-light mb-8 z-10">
              <a className="cursor-pointer flex pt-8 ">
                <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
                >
                  <h1 className="Welcome-text text-[16px]">Submit</h1>
                </motion.div>
              </a>
            </div>
          </form>
          <div className="pl-64 pb-16">
            <Image src="location.svg" alt="team" width={400} height={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
