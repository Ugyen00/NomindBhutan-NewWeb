"use client";
import React from "react";
import Bots from "../sub/Bots";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const FeaturedBot = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center py-10 z-30"
        id="featuredbot"
      >
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-gray-200 py-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            FEATURED{" "}
          </span>
          BOTS
        </motion.div>
        <div className="h-full w-full flex flex-wrap items-center justify-center gap-10 px-10">
          <div className="text-center">
            <Bots
              src="/NdiBot.svg"
              title="National Digital Identity"
              description="Empowering the nation with seamless access, our integrated chatbot revolutionizes National Digital Identity, enhancing citizen services for effortless interactions and support."
              width={400}
              height={300}
              imageStyles={{
                padding: "20px",
                paddingBottom: "1px",
              }}
              cardStyles={{
                width: "370px",
                height: "450px",
              }}
              link="https://www.bhutanndi.com/"
            />
          </div>

          <div className="text-center">
            <Bots
              src="/BnbBot.svg"
              title="Bhutan National Bank"
              description="Revolutionizing banking, our integrated chatbot at Bank of Bhutan delivers instant assistance and enhances customer service seamlessly."
              width={300}
              height={300}
              imageStyles={{
                padding: "20px",
                paddingBottom: "20px",
                marginLeft: "40px",
                marginBottom: "18px",
                marginTop: "20px",
              }}
              cardStyles={{
                width: "370px",
                height: "450px",
              }}
              link="https://bnb.bt/"
            />
          </div>

          <div className="text-center">
            <Bots
              src="/NlcsBot.svg"
              title="National Land Commission"
              description="Empowering National Land Commission, our integrated chatbot streamlines inquiries, offers instant assistance, and enhances efficiency in land-related processes."
              width={400}
              height={300}
              imageStyles={{
                padding: "16px",
                marginTop: "20px",
                marginBottom: "10px",
                paddingBottom: "2px",
              }}
              cardStyles={{
                width: "370px",
                height: "450px",
              }}
              link="https://web.nlcs.gov.bt/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBot;
