"use client";
import React from "react";
import { motion } from "framer-motion";
import Cards from "../sub/Cards";
import { slideInFromTop } from "@/utils/motion";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  const handleToggle = () => {
    setIsMonthly((prevIsMonthly) => !prevIsMonthly);
  };

  return (
    <>
      <div
        className="flex flex-row relative items-center justify-center z-30"
        id="pricing"
      >
        <div className="absolute top-0 z-[5]">
          <div className="mt-16">
            <motion.div
              variants={slideInFromTop}
              className="text-[30px] sm:text-[40px] font-bold text-center text-gray-200"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                PRICING{" "}
              </span>
              PLANS
            </motion.div>
            <motion.div
              variants={slideInFromTop}
              className="text-[16px] sm:text-[20px] font-medium text-center text-gray-200 mt-4"
            >
              Get a month for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                FREE{" "}
              </span>
              by subscribing yearly!
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <button
              onClick={handleToggle}
              className={`text-[13px] py-2 px-4  border border-[#6F00FF] ${
                isMonthly ? "bg-[#6F00FF] text-white" : "text-[#6F00FF]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={handleToggle}
              className={`text-[13px] py-2 px-6  border border-[#6F00FF] ${
                !isMonthly ? "bg-[#6F00FF] text-white" : "text-[#6F00FF]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 px-10 mt-64 ">
          {isMonthly ? (
            <>
              {/* Monthly Plans */}
              <Cards
                title="Basic Plan"
                time="per month"
                description="For small businesses with big ambitions"
                features={[
                  "1000 messages per month ",
                  "Dashboard access",
                  "Chatbot interface setting access ",
                  "View conversation",
                  "Live chat",
                ]}
                price="Nu.1500"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />
              <Cards
                title="Enterprise Plan"
                time="per month"
                description="For serious businesses who want to scale"
                features={[
                  "1000 messages per month ",
                  "Dashboard access",
                  "Chatbot interface setting access ",
                  "View conversation",
                  "Live chat",
                  "Remove Watermark",
                  "Insights/Analytics monthly",
                  "Chatbot interface options",
                ]}
                price="Nu.8000"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />
              <Cards
                title="Custom Plan"
                time=" "
                description="For those who are striving for global success"
                features={["Custom number of messages", "Custom chatbots"]}
                price="Contact Us for more information"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />
            </>
          ) : (
            <>
              {/* Yearly Plans */}
              <Cards
                title="Basic Plan"
                time="per year"
                description="For small businesses with big ambitions"
                features={[
                  "1000 messages per month ",
                  "Dashboard access",
                  "Chatbot interface setting access ",
                  "View conversation",
                  "Live chat",
                ]}
                price="Nu.16,500"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />
              <Cards
                title="Enterprise Plan"
                time="per year"
                description="For serious businesses who want to scale"
                features={[
                  "1000 messages per month ",
                  "Dashboard access",
                  "Chatbot interface setting access ",
                  "View conversation",
                  "Live chat",
                  "Remove Watermark",
                  "Insights/Analytics monthly",
                  "Chatbot interface options",
                ]}
                price="Nu.88,000"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />

              <Cards
                title="Custom Plan"
                time=" "
                description="For those who are striving for global success"
                features={["Custom number of messages", "Custom chatbots"]}
                price="Contact Us for more information"
                cardStyles={{
                  width: "400px",
                  height: "600px",
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="z-[30] px-[5px]">
        <motion.div
          variants={slideInFromTop}
          className="text-[35px] font-semibold text-center text-gray-200"
        >
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            ADD{"-"}
          </span>
          ONs
        </motion.div>

        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 px-10 mt-8">
          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              Extra Messages Credit
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">700</span>
            </p>
            <p className="pb-[30px] font-light">for 1000 credits</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px]  border border-[#7042f88b] opacity-[0.9] "
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>

          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              Remove “NoMindBhutan”
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">3000</span>
            </p>
            <p className="pb-[30px] font-light">per month</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px]  border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>

          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              Whatsappp/Meta Integration
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">1000</span>
            </p>
            <p className="pb-[30px] font-light">for 1000 credits</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px]  border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>
        </div>

        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 px-10 mt-8">
          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              White Labeling
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">5000</span>
            </p>
            <p className="pb-[30px] font-light">per month</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>

          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              Insights/Analytics Monthly
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">1500</span>
            </p>
            <p className="pb-[30px] font-light">per month</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px]  border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>

          <div
            className="border border-[#7042f88b] border-solid p-4 pl-16 pr-16 text-center text-white rounded-lg"
            style={{ height: "250px", width: "400px" }}
          >
            <p className="font-semibold text-[18px] pb-4 pt-4">
              Chatbot Interface Options
            </p>
            <p className="font-light  text-[16px] pb-4">
              Nu.<span className="font-semibold text-[20px]">2000</span>
            </p>
            <p className="pb-[30px] font-light">per month</p>
            <a
              href="/contact"
              className="cursor-pointer flex justify-center items-center"
            >
              <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[10px] px-[25px] border border-[#7042f88b] opacity-[0.9]"
              >
                <h1 className="Welcome-text text-[13px]">PURCHASE NOW</h1>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
