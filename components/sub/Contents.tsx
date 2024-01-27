"use client";
import React from "react";
import Image from "next/image";

const Contents = () => {
  const blog = {
    id: 1,
    title: "10 Days of life",
    desc: "Learn on how to learn to code",
    coverImg: "/img1",
    content:
      "This is the cintejdfj fdhjfvjfvjb jjfdhfg dfhdbvbe ferf hgh yjyjyt jferwdf gh yjuyj jyjtger.",
  };
  return (
    <>
      <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-white ">
            <div className="col-span-2 gap-x-8 gap-y-8">
              <Image
                src={blog.coverImg}
                alt="img1"
                width={100}
                height={56}
                className="w-full object-cover"
              />
              <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
              <div className="pt-5">
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
