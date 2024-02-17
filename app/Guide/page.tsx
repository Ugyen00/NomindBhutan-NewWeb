"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Guide = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (step: number) => {
    setSelectedStep(step);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] sm:text-[40px] font-bold text-center mb-4 sm:mb-8 sm:py-8 mt-16 sm:mt-20 text-white "
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            User Guide{" "}
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row relative z-30 justify-center">
          <div className="w-full sm:w-1/4 overflow-hidden mb-2">
            {/* Dropdown button for small screens */}
            <div className="block sm:hidden lg:mb-2">
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9] items-center"
              >
                <button
                  className="flex Welcome-text items-end justify-center font-semibold text-xl cursor-pointer"
                  onClick={toggleDropdown}
                >
                  Select Guide
                  <FaAngleRight
                    className={`text-white ml-1 mb-1 ${
                      dropdownOpen ? "transform rotate-90" : ""
                    }`}
                  />
                </button>
              </motion.div>

              {dropdownOpen && (
                <ul className="text-white text-lg mt-2">
                  <li
                    className={`mb-2 ${
                      selectedStep === 1 ? "text-purple-500" : ""
                    }`}
                    onClick={() => handleStepClick(1)}
                  >
                    1. Embed on Site
                  </li>
                  <li
                    className={`mb-2 ${
                      selectedStep === 2 ? "text-purple-500" : ""
                    }`}
                    onClick={() => handleStepClick(2)}
                  >
                    2. Whatsapp Integration
                  </li>
                </ul>
              )}
            </div>

            {/* Regular list for larger screens */}
            <ul className="hidden sm:block overflow-y-auto">
              <li
                className={`text-white font-semibold text-xl md:text-2xl mb-8 cursor-pointer ${
                  selectedStep === 1 ? "text-purple-500" : ""
                } `}
              >
                <button
                  className="cursor-pointer flex items-end"
                  onClick={() => handleStepClick(1)}
                >
                  1.Embed On Site
                  <FaAngleRight className="text-white pb-1" />
                </button>
              </li>
              <hr className="mt-8 mb-8" />
              <li
                className={`text-white font-semibold text-xl md:text-2xl mb-8 ${
                  selectedStep === 2 ? "text-purple-500" : ""
                }`}
              >
                <button
                  className="cursor-pointer flex items-end"
                  onClick={() => handleStepClick(2)}
                >
                  2.Whatsapp Integration{" "}
                  <FaAngleRight className="text-white pb-1" />
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-3/4 overflow-y-auto text-gray-400 text-wrap pl-0 sm:pl-8 pr-0 sm:pr-8 md:pl-16 md:pr-32 xl:pl-32 xl:pr-32">
            {selectedStep === 1 && (
              <ul>
                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 1: Install WP Code Plugin
                  </p>
                  1.Go to your WordPress dashboard.
                  <Image
                    src="/img1.jpg"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8 ">
                  2.Navigate to the "Plugin" section and select "Add New."
                  <Image
                    src="/img2.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8 ">
                  3.In the search bar, type "WP Code" or "Code" and find the
                  plugin in the WordPress repository.
                  <Image
                    src="/img3.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8 ">
                  4.Click "Install Now" and let the installation process
                  complete.
                  <Image
                    src="/img4.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 2: Activate WP Code Plugin
                  </p>
                  1.After installation, click on "Activate" to enable the WP
                  Code plugin.
                  <Image
                    src="/img5.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 3: Access WP Code Settings
                  </p>
                  1.Once activated, locate the plugin in the WordPress dashboard
                  menu.
                  <Image
                    src="/img6.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8 ">
                  2.Click on "Code Snippets" to access its settings.
                  <Image
                    src="/img7.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 4: Go to Headers and Footers Section
                  </p>
                  1.Within the Code Snippets, find and click on "Headers and
                  Footers."
                  <Image
                    src="/img8.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 5: Add Code to Header or Footer
                  </p>
                  1.In the "Headers and Footers" section, you'll see header,
                  footer, and body section.{" "}
                  <Image
                    src="/img9.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8 ">
                  2.The chatbot script code which we have provided, paste it
                  into the appropriate section header Section.{" "}
                  <Image
                    src="/img10.png"
                    alt="img1"
                    width={700}
                    height={500}
                    className="mt-4"
                  />
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 6: Save Changes
                  </p>
                  1.After pasting the code snippet, save your changes using the
                  provided option.
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 7: Deactivate or Uninstall (Optional)
                  </p>
                  1.If neeed, you can deactivate the plugin temporarily without
                  losing your code snippets.
                  <br />
                  2.Deactivating the plugin won't permanently delete your
                  changes. <br />
                  3.Reactivate the plugin when necessary, and your code snippets
                  will persist.
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 8: Delete Code Snippet (Optional)
                  </p>
                  1.To remove a code snippet, go back to the "Headers and
                  Footers" section.
                  <br />
                  2.Locate the code snippet you want to delete, make the
                  necessary changes, and save.
                </li>

                <li className="text-lg mb-8">
                  <p className="font-semibold text-xl mb-4 text-white">
                    Step 9: Clear Cache (If needed)
                  </p>
                  1.After making changes, consider clearing your website cache
                  to see the updates.
                </li>
              </ul>
            )}

            {selectedStep === 2 && (
              <ul className="text-white text-lg">UPDATES COMING SOON</ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Guide;
