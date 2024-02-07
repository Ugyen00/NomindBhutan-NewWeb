"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import React, { useState } from "react";

const Guide = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (step: number) => {
    setSelectedStep(step);
  };

  return (
    <>
      <motion.div
        variants={slideInFromTop}
        className="text-[30px] sm:text-[40px] font-bold text-center mb-4 sm:mb-8 sm:py-8 mt-16 sm:mt-20 text-white "
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          User Guide{" "}
        </span>
      </motion.div>
      <div className="flex relative z-30 justify-center ml-8 md:ml-32">
        <div className="w-1/4 min-h-screen overflow-hidden">
          <ul className="fixed overflow-y-auto">
            <li
              className={`text-white font-semibold text-xl md:text-2xl mb-8 cursor-pointer ${
                selectedStep === 1 ? "text-purple-500" : ""
              } `}
            >
              <button
                className="flex items-end"
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
                className="flex items-end"
                onClick={() => handleStepClick(2)}
              >
                2.Whatsapp Integration{" "}
                <FaAngleRight className="text-white pb-1" />
              </button>
            </li>
          </ul>
        </div>
        <div className="w-3/4 overflow-y-auto text-gray-400 text-wrap pl-8 pr-8 md:pl-16 md:pr-32 xl:pl-32 xl:pr-32">
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
                  src="/img1.jpg"
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
                  src="/img1.jpg"
                  alt="img1"
                  width={700}
                  height={500}
                  className="mt-4"
                />
              </li>

              <li className="text-lg mb-8 ">
                4.Click "Install Now" and let the installation process complete.
                <Image
                  src="/img1.jpg"
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
                1.After installation, click on "Activate" to enable the WP Code
                plugin.
                <Image
                  src="/img1.jpg"
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
                  src="/img1.jpg"
                  alt="img1"
                  width={700}
                  height={500}
                  className="mt-4"
                />
              </li>

              <li className="text-lg mb-8 ">
                2.Click on "Code Snippets" to access its settings.
                <Image
                  src="/img1.jpg"
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
                  src="/img1.jpg"
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
                  src="/img1.jpg"
                  alt="img1"
                  width={700}
                  height={500}
                  className="mt-4"
                />
              </li>

              <li className="text-lg mb-8 ">
                2.The chatbot script code which we have provided, paste it into
                the appropriate section header Section.{" "}
                <Image
                  src="/img1.jpg"
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
                2.Deactivating the plugin won't permanently delete your changes.{" "}
                <br />
                3.Reactivate the plugin when necessary, and your code snippets
                will persist.
              </li>

              <li className="text-lg mb-8">
                <p className="font-semibold text-xl mb-4 text-white">
                  Step 8: Delete Code Snippet (Optional)
                </p>
                1.To remove a code snippet, go back to the "Headers and Footers"
                section.
                <br />
                2.Locate the code snippet you want to delete, make the necessary
                changes, and save.
              </li>

              <li className="text-lg mb-8">
                <p className="font-semibold text-xl mb-4 text-white">
                  Step 9: Clear Cache (If needed)
                </p>
                1.After making changes, consider clearing your website cache to
                see the updates.
              </li>
            </ul>
          )}

          {selectedStep === 2 && (
            <ul className="text-white text-lg">UPDATES COMING SOON</ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Guide;
