"use client";
import React, { useState } from "react";
import Image from "next/image";
import CountUpAnimation from "../sub/Count";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const AboutUs = () => {
  const [isHoveredUgyen, setIsHoveredUgyen] = useState(false);
  const [isHoveredPemo, setIsHoveredPemo] = useState(false);
  const [isHoveredKuenzang, setIsHoveredKuenzang] = useState(false);
  const [isHoveredPema, setIsHoveredPema] = useState(false);
  const [isHoveredJamphel, setIsHoveredJamphel] = useState(false);
  const [isHoveredNamda, setIsHoveredNamda] = useState(false);
  const [isHoveredNima, setIsHoveredNima] = useState(false);
  return (
    <>
      <div id="aboutus">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] sm:text-[40px] font-bold text-center text-gray-200 py-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            ABOUT{" "}
          </span>
          US
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <Image
            src="/team.jpg"
            alt="team"
            width={700}
            height={500}
            className="p-8 md:ml-4 lg:ml-16"
          />
          <p className="text-[20px] text-gray-200 p-8 md:p-16">
            Introducing our NoMindBhutan, AI research and deployment Company,
            pioneering the development of exceptionally friendly AI Solution.
            Join us as we redefine human-machine interaction, making technology
            more approachable and engaging.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center text-white mt-8 lg:mt-16">
          <CountUpAnimation targetCount={4} label="Clients" />
          <div className="xl:ml-4" />
          <CountUpAnimation targetCount={7} label="Employee" />
          <div />
          <CountUpAnimation targetCount={4} label="Project Completed" />
        </div>
        <div>
          <div className="pt-32">
            <motion.div
              variants={slideInFromTop}
              className="text-[25px] sm:text-[35px] font-bold text-center text-gray-200 mb-8"
            >
              MEET OUR
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                PULSE{" "}
              </span>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center pb-8  ">
              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredUgyen ? "/coolugyen.jpg" : "/ugyen.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredUgyen(true)}
                    onMouseLeave={() => setIsHoveredUgyen(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  Ugyen Dendup
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Chief Executive Officer
                </p>
              </div>

              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredPemo ? "/coolpemo.jpg" : "/tsheltrim.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredPemo(true)}
                    onMouseLeave={() => setIsHoveredPemo(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  Tsheltrim Pemo
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Head of Product
                </p>
              </div>

              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={
                      isHoveredKuenzang ? "/coolkuenzang.jpg" : "/kuenzang.jpg"
                    }
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredKuenzang(true)}
                    onMouseLeave={() => setIsHoveredKuenzang(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  Kuenzang Namgyal
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Head of Fullstack
                </p>
              </div>

              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredPema ? "/coolpema.jpg" : "/pema.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredPema(true)}
                    onMouseLeave={() => setIsHoveredPema(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">Pema</p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Head of CyberSecurity
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredJamphel ? "/cooljamphel.jpg" : "/jamphel.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredJamphel(true)}
                    onMouseLeave={() => setIsHoveredJamphel(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  {" "}
                  Jamphel Yigzin Samdrup
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Cheif Technology Officer{" "}
                </p>
              </div>

              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredNamda ? "/coolnamda.jpg" : "/namda.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredNamda(true)}
                    onMouseLeave={() => setIsHoveredNamda(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  {" "}
                  Jampel Namdag Dorji
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">Head of AI</p>
              </div>

              <div className="mb-16 px-4 relative group z-30">
                <div className="relative">
                  <Image
                    src={isHoveredNima ? "/coolnima.jpg" : "/nima.jpg"}
                    alt="original"
                    width={300} // Add the required width property
                    height={250} // Add the required height property
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="md:pl-8 transition-transform transform hover:scale-110 object-cover"
                    onMouseEnter={() => setIsHoveredNima(true)}
                    onMouseLeave={() => setIsHoveredNima(false)}
                  />
                </div>
                <p className="text-[16px] text-white md:pl-8 mt-4">
                  Nima Wangdi
                </p>
                <p className="text-[16px] text-gray-400 md:pl-8">
                  Head of Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
