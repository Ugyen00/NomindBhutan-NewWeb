import React from "react";
import Bots from "../sub/Bots";

const FeaturedBot = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="featuredbot"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Bots
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="text-center">
          <Bots
            src="/NdiBot.svg"
            title="National Digital Identity"
            description="Empowering the nation with seamless access, our integrated chatbot revolutionizes National Digital Identity, enhancing citizen services for effortless interactions and support."
          />
        </div>

        <div className="text-center">
          <Bots
            src="/NlcsBot.svg"
            title="National Land Commission"
            description="Empowering National Land Commission, our integrated chatbot streamlines inquiries, offers instant assistance, and enhances efficiency in land-related processes."
          />
        </div>

        <div className="text-center">
          <Bots
            src="/BnbBot.svg"
            title="Bhutan National Bank"
            description="Revolutionizing banking, our integrated chatbot at Bank of Bhutan delivers instant assistance, streamlines transactions, and enhances customer service seamlessly."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBot;
