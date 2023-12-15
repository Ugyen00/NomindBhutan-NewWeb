import React from "react";
import Bots from "../sub/Bots";

const FeaturedBot = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-50"
      id="featuredbot"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16">
        Featured Bots
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row justify-center gap-10 px-10">
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
            buttonStyles={{
              marginLeft: "120px",
              marginTop: "10px",
            }}
            cardStyles={{
              width: "370px",
              height: "450px",
            }}
            sectionId="ndi-section"
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
            buttonStyles={{
              marginLeft: "120px",
              marginTop: "24px",
            }}
            cardStyles={{
              width: "370px",
              height: "450px",
            }}
            sectionId="nlcs-section"
          />
        </div>

        <div className="text-center">
          <Bots
            src="/BnbBot.svg"
            title="Bhutan National Bank"
            description="Revolutionizing banking, our integrated chatbot at Bank of Bhutan delivers instant assistance, streamlines transactions, and enhances customer service seamlessly."
            width={300}
            height={300}
            imageStyles={{
              padding: "20px",
              paddingBottom: "20px",
              marginLeft: "40px",
              marginBottom: "18px",
              marginTop: "20px",
            }}
            buttonStyles={{
              marginLeft: "120px",
              marginTop: "25px",
            }}
            cardStyles={{
              width: "370px",
              height: "450px",
            }}
            sectionId="bnb-section"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBot;
