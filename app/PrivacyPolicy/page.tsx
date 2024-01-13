"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const Policy = () => {
  return (
    <>
      <motion.div
        variants={slideInFromTop}
        className="text-[30px] sm:text-[40px] font-bold text-center mb-4 sm:mb-8 sm:py-8 mt-16 sm:mt-20 text-white"
      >
        Privacy
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Policy{" "}
        </span>
      </motion.div>
      <div className="text-gray-400 text-wrap pl-8 pr-8 md:pl-16 md:pr-16 xl:pl-32 xl:pr-32">
        <ul>
          <li className="text-lg ">
            <p className="font-semibold text-xl mb-4 text-white">
              1. INTRODUCTION
            </p>
            NoMindBhutan (&apos;we&apos;, &apos;us&apos;, &apos;our&apos;) is an
            AI chatbot provider based in Thimphu, Bhutan. We are committed to
            protecting and respecting your privacy. This Privacy Policy
            (&apos;Policy&apos;) explains how we collect, use, share, and
            protect your personal information when you interact with our AI
            chatbot service. This Policy is designed to help you understand our
            practices and your rights under applicable privacy laws and
            regulations.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              2. INFORMATION WE COLLECT
            </p>
            We collect personal information from you and any devices you use
            when you use our AI chatbot service. The types of information we
            collect include:
            <br />- User Location: We collect your location data to provide
            personalized services and enhance your user experience.
            <br /> - Client Data: We collect data from our clients&apos; public
            social media pages and websites to improve our AI chatbot service.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              3. USE OF INFORMATION
            </p>
            We use the information we collect to provide, maintain, train and
            improve our AI chatbot service. We also use this information to
            communicate with you, for research and development, and to protect
            our rights and interests.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              4. STORAGE AND SHARING OF INFORMATION
            </p>
            We store your personal information on secure servers and implement
            appropriate security measures to protect it. We may share your
            personal information with third-party service providers who assist
            us in providing our AI chatbot service. These third-party service
            providers are obligated to protect your personal information in
            accordance with this Policy and applicable laws.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              5. THIRD-PARTY SERVICE PROVIDERS
            </p>
            [Placeholder for specific third-party service providers and their
            responsibilities]
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              6. OPT-OUT AND DATA SUBJECT RIGHTS
            </p>
            You have the right to opt-out of certain uses of your personal
            information. You also have the right to access, correct, delete, and
            restrict the processing of your personal information. To exercise
            these rights, please contact us at nomindbhutan@gmail.com
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              7. DATA RETENTION AND SECURITY MEASURES
            </p>
            We retain your personal information for as long as necessary to
            provide our AI chatbot service and fulfill the purposes outlined in
            this Policy. We implement standard data security measures to protect
            your personal information from unauthorized access, use, or
            disclosure.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              8. APPLICABLE LAWS AND REGULATIONS
            </p>
            This Policy is governed by and construed in accordance with the laws
            of Bhutan and any applicable international privacy laws and
            regulations.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              9. CHANGES TO THIS POLICY
            </p>
            We may update this Policy from time to time. We will notify you of
            any changes by posting the new Policy on this page.
          </li>
          <br />
          <li className="text-lg">
            <p className="font-semibold text-xl mb-4 text-white">
              10. CONTACT US
            </p>
            If you have any questions about this Policy, please contact us at
            nomindbhutan@gmail.com
          </li>
        </ul>
        <br />
        <p className="text-white">Last updated: 12/28/2023</p>
      </div>
    </>
  );
};

export default Policy;
