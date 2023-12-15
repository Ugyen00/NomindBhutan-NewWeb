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
    <div
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full z-30"
      id="pricing"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Simple and Transparent
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Pricing{" "}
          </span>
          Plans
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="text-[20px] font-medium text-center text-gray-200 mt-4"
        >
          Get a month for
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            FREE{" "}
          </span>
          by subscribing yearly!
        </motion.div>
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
            className={`text-[13px] py-2 px-4  border border-[#6F00FF] ${
              !isMonthly ? "bg-[#6F00FF] text-white" : "text-[#6F00FF]"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row justify-center gap-10 px-10 mt-32">
        {isMonthly ? (
          <>
            {/* Monthly Plans */}
            <Cards
              title="Basic Plan"
              description="For small businesses with big ambitions"
              features={[
                "1000 messages per month ",
                "Dashboard access",
                "Chatbot interface setting access ",
                "View conversation",
                "Live chat",
              ]}
              price="Nu.1500 per month"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
              buttonStyles={{
                marginTop: "120px",
              }}
            />
            <Cards
              title="Enterprise Plan"
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
              price="Nu.8000 per month"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
            />
            <Cards
              title="Custom Plan"
              description="For those who are striving for global success"
              features={["Custom number of messages", "Custom chatbots"]}
              price="Contact Us for more information"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
              buttonStyles={{
                marginTop: "238px",
              }}
            />
          </>
        ) : (
          <>
            {/* Yearly Plans */}
            <Cards
              title="Basic Plan"
              description="For small businesses with big ambitions"
              features={[
                "1000 messages per month ",
                "Dashboard access",
                "Chatbot interface setting access ",
                "View conversation",
                "Live chat",
              ]}
              price="Nu.16,500 per year"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
              buttonStyles={{
                marginTop: "120px",
              }}
            />
            <Cards
              title="Enterprise Plan"
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
              price="Nu.88,000 per year"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
            />

            <Cards
              title="Custom Plan"
              description="For those who are striving for global success"
              features={["Custom number of messages", "Custom chatbots"]}
              price="Contact Us for more information"
              cardStyles={{
                width: "400px",
                height: "550px",
              }}
              buttonStyles={{
                marginTop: "238px",
              }}
            />
          </>
        )}
      </div>

      <div className="absolute z-[20] bottom-[-100px] px-[5px]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          ADD ONs
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
