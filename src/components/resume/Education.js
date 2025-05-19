import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Adventist Universty of central Africa (2020 - 2024)"
            result="14/20"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Nyamata Technical Secondary School (2016 - 2018)"
            result="35/60"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Software Developer"
            subTitle="Urwego Finance - (2023 - Present)"
            result="Rwanda"
            des="Designing and maintaining backend APIs using NestJS and PostgreSQL to support internal financial tools. Collaborated with cross-functional teams to implement scalable and secure solutions for microfinance operations."
          />
          <ResumeCard
            title="Backend Web Developer & Trainer"
            subTitle="Empower Africa Now Ltd - (2022 - 2023)"
            result="Rwanda"
            des="Built full-stack applications using React.js and NestJS. Mentored junior developers and conducted coding bootcamps on backend development, RESTful API design, and best practices for secure coding."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="GogoConnect Ltd - (2019 - 2021)"
            result="Rwanda"
            des="Developed responsive web interfaces using React.js and Tailwind CSS. Focused on improving user experience and performance for e-commerce and service-based platforms."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
