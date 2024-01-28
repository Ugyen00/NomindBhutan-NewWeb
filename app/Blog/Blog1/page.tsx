"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Blog1 = () => {
  return (
    <>
      <div className="w-full pb-10 text-white ">
        <div className="max-w-[1000px] mx-auto items-center justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-white ">
            <div className="col-span-2 gap-x-8 gap-y-8">
              <motion.div
                variants={slideInFromTop}
                className="font-bold text-2xl sm:text-4xl lg:text-6xl my-1 mt-16 lg:pt-5 text-center "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Bhutan’s Silicon Happiness: A Glimpse into the AI Revolution{" "}
                </span>
              </motion.div>
              <p className="text-lg md:text-xl my-1 text-center pt-4 text-gray-400">
                By Tsheltrim Pemo
              </p>

              <Image
                src="/poster.jpg"
                alt="img1"
                layout="responsive"
                width={100}
                height={56}
                className="w-full object-cover p-8 md:p-16"
              />

              <div className="pt-5 text-wrap p-4 md:p-0">
                <p>
                  Bhutan, also known as the Land of the Thunder Dragon, is a
                  small country located in the eastern Himalayas, bordered by
                  India to the south and China to the north. Bhutan has long
                  been revered for its pristine landscapes, rich cultural
                  heritage, and the pursuit of Gross National Happiness. While
                  technologies were flourishing globally, Bhutan remained
                  isolated from these advancements until the modernization era
                  started about 20 years ago. Bhutan was late adopters of
                  technology, as evidenced by the fact that their first
                  television broadcast occurred in 1999.
                  <br />
                  <br />
                  However, even after being the late technological adopter there
                  has been significant improvement and advancement in
                  information communications technology (ICT). The internet
                  access in Bhutan has significantly increased to 85.6% of the
                  population in 2021 from around 14.4% in 2011. The government
                  also launched the Government to Citizen (G2C) program in 2005
                  which has made the services efficient.
                  <br />
                  <br />
                  In 2017, Bhutan took a significant step by establishing its
                  first ICT (Information and Communication Technology) college,
                  known as Gyalposhing College of Information Technology (GCIT).
                  This institution was set up to provide education and training
                  in the field of technology. Following its establishment, the
                  college expanded its offerings. They introduced additional IT
                  courses and training programs to enhance the skills of
                  students in various aspects of information technology. Over
                  the subsequent years, the college further broadened its
                  curriculum to include new areas of specialization. One
                  noteworthy addition was the inclusion of subjects related to
                  Artificial Intelligence (AI) and Data Science. The
                  introduction of AI and Data Science courses aimed to equip
                  Bhutanese students with specialized knowledge and skills in
                  these emerging and critical areas of technology. This
                  initiative reflects Bhutan's commitment to staying current
                  with global technological trends and ensuring that its
                  students are well-prepared for the challenges and
                  opportunities in the rapidly evolving digital landscape.
                  <br />
                  <br />
                  In a dynamic world driven by technological progress, the
                  collaboration between the Department of Innovation &
                  Technology (InnoTech) under Druk Holding & Investments (DHI)
                  and Omdena stands as a testament to the transformative power
                  of partnerships. In 2023, this alliance harnessed the
                  capabilities of artificial intelligence (AI) to tackle
                  pressing challenges and empower local communities in Bhutan.
                  Notably, the Omdena Academy, a joint initiative, provided 50
                  participants with comprehensive data science courses,
                  fostering hands-on expertise in data analysis, machine
                  learning, and data visualization. The culmination of this
                  program saw 45 graduates, showcasing their commitment to
                  knowledge acquisition. The collaboration also extended to
                  impactful initiatives such as the AI for Social Impact
                  Ideathon, where innovative ideas were solicited to address
                  local challenges. The winning concept, "Digitizing Bhutanese
                  Documents and Books for Accessibility With Machine Translation
                  and NLP," spurred a transformative project to enhance
                  knowledge accessibility.
                  <br />
                  <br />
                  Furthermore, the Omdena AI Innovation Challenge focused on
                  digitizing content for Dzongkha, Bhutan's national language,
                  presenting a groundbreaking language translation system. A
                  dedicated MLOps hybrid course and the development of an
                  Automated Forest Fire Detection and Early Warning System in
                  Thimphu exemplify the diverse and impactful outcomes of this
                  collaboration, reinforcing Bhutan's position at the forefront
                  of technological innovation and community development. The
                  Bhutan and Omdena Partnership, formed in 2023, showcases the
                  power of collaboration and innovation. By providing practical
                  skills, fostering transformative ideas, and leveraging AI for
                  positive impact, the partnership has significantly contributed
                  to Bhutan's progress. This collaboration has empowered a new
                  generation of local AI leaders, driving technological
                  advancements and safeguarding natural resources.
                  <br />
                  <br />
                  Looking ahead, Bhutan is set to further develop its
                  capabilities in AI and data science, as seen through
                  initiatives like the GCIT and collaborations with InnoTech and
                  Omdena. With a practical focus on innovation and addressing
                  local challenges, Bhutan's steady commitment to technological
                  progress positions it as a growing player in the field of
                  artificial intelligence. As the nation continues to explore
                  the possibilities of AI, the future holds promise for
                  incremental advancements and integration within its evolving
                  technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog1;
