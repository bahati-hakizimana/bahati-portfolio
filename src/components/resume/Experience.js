import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Job Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Developer"
            subTitle="Urwego Finance - (2023 - Present)"
            result="Kigali, Rwanda"
            des="Developing and maintaining robust backend systems using NestJS, PostgreSQL, and RESTful APIs. Collaborating with finance teams to optimize transaction handling and system performance."
          />
          <ResumeCard
            title="Backend Developer & Trainer"
            subTitle="Empower Africa Now Ltd - (2022 - 2023)"
            result="Remote"
            des="Developed backend services for fintech and e-commerce projects using Node.js and Golang. Trained junior developers and assisted in deploying scalable systems."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="GogoConnect Ltd - (2019 - 2021)"
            result="Kigali, Rwanda"
            des="Designed and built dynamic interfaces using React.js and Tailwind CSS for community and enterprise platforms."
          />
        </div>
      </div>

      {/* Trainer Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development Trainer"
            subTitle="Empower Africa Now Ltd (2022 - 2023)"
            result="Remote"
            des="Trained interns and junior developers in backend APIs, database design, and clean code practices using Node.js, Golang, and PostgreSQL."
          />
          <ResumeCard
            title="Coding Bootcamp Instructor"
            subTitle="Local Bootcamps & Workshops (2022 - 2023)"
            result="Kigali, Rwanda"
            des="Facilitated hands-on training sessions in HTML, CSS, JavaScript, and MySQL for beginner to intermediate learners."
          />
          <ResumeCard
            title="Peer Tutor & Mentor"
            subTitle="Adventist Universty of central Africa (During Studies)"
            result="Rwanda"
            des="Provided guidance in programming fundamentals and helped peers understand software engineering concepts."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
