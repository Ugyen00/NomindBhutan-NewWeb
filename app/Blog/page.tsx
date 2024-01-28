"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Bhutan’s Silicon Happiness: A Glimpse into the AI Revolution",
      desc: "Bhutan, also known as the Land of the Thunder Dragon, is a small country located in the eastern Himalayas, bordered by India to the south and China to the north. Bhutan has long been revered for its pristine landscapes, rich cultural heritage...",
      coverImg: "/poster.jpg",
    },
  ];
  return (
    <>
      <div id="blog" className="w-full py-[70px] ">
        <div className="text-center py-8">
          <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-bold text-center text-gray-200 "
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              BLOG{" "}
            </span>
          </motion.div>
          <p className="text-gray-400 text-[20px]">
            Company Updates & Technology Articles
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto ">
          <div className="grid gap-8 px-4 text-white ">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/Blog/Blog${blog.id}`}
                className="z-[30] cursor-pointer"
                passHref
              >
                <div className="rounded-xl overflow-hidden border border-[#2A0E61]">
                  {" "}
                  <Image
                    src={blog.coverImg}
                    alt="img1"
                    layout="responsive"
                    width={100}
                    height={56}
                    className="w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-2xl my-1 text-white">
                      {blog.title}
                    </h3>
                    <p className="text-white text-xl">{blog.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
