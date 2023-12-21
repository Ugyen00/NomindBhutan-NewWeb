"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  const googleMapsIframe = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.5665725097351!2d89.66588626286082!3d27.536154190665425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19566fa54c4df%3A0x82f8fd359c78d7f5!2sGyalpozhing%20College%20of%20Information%20Technology%20-%20Kabjisa%20Campus!5e0!3m2!1sen!2sbt!4v1702987365288!5m2!1sen!2sbt"
      width="500"
      height="350"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
  return (
    <>
      <div id="contact" className="mt-24 relative z-30">
        <div className="flex flex-col items-center justify-center mb-16 md:ml-8 mt-4 p-8 text-white ">
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

        <div className="md:ml-16 flex flex-col md:flex-row items-center justify-center">
          <form method="post" action="#">
            <div className="mb-8">
              <input
                className="mt-1 p-2 w-[500px] rounded-[10px] border-b border-[#7042f861] text-white bg-transparent outline-none"
                type="text"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-8">
              <input
                className="mt-1 p-2 border-b w-[500px] rounded-[10px] border-[#7042f861] text-white bg-transparent outline-none"
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-8">
              <textarea
                className="mt-1 p-2 w-[500px] rounded-[10px] border-b border-[#7042f861] text-white bg-transparent outline-none"
                rows={3}
                name="bio"
                id="bio"
                placeholder="Share Your Thoughts"
              ></textarea>
            </div>
            <div className="font-light mb-5 z-10">
              <a className="flex mt-8 ">
                <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[10px] px-[20px] border border-[#7042f88b] opacity-[0.9] cursor-pointer"
                >
                  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                  <h1 className="Welcome-text text-[16px]">Submit</h1>
                </motion.div>
              </a>
            </div>
          </form>
          <div className="md:pl-16 pb-16">{googleMapsIframe}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
