import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lg:flex-row"
    >
      {/* Key Achievements */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold">Key Achievements</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PASIS Payment Gateway"
            subTitle="Full-stack Developer (Golang, React.js, Stellar Blockchain)"
            result="In Progress"
            des="Built a decentralized cross-border payment gateway enabling secure money transfers across African countries. Integrated Stellar blockchain for fast, low-cost transactions. Designed and developed APIs allowing merchants to accept online payments seamlessly through PASIS for their businesses."
          />
          <ResumeCard
            title="Multi-Vendor E-commerce Platform"
            subTitle="Backend Developer(Expressjs)"
            result="Completed"
            des="Developed a scalable e-commerce system where multiple vendors can register, manage inventories, and sell products online. Implemented secure checkout, order tracking, and payment integration. Customers can browse vendors, compare products, and place orders seamlessly."
          />
          <ResumeCard
            title="Mobile Banking System"
            subTitle="Backend Developer"
            result="Completed"
            des="Engineered a mobile banking platform supporting account management, fund transfers, and SMS notifications. Enabled USSD integration for non-smartphone users and optimized backend using Golang for performance and security."
          />
          <ResumeCard
            title="Transport System Simulation"
            subTitle="Full-Stak Developer (Expressjs-Reactjs)"
            result="Success"
            des="Developed a transport management simulation handling bookings, bus route logic, arrival time prediction, and financial reporting for a virtual bus company."
          />
        </div>
      </div>

      {/* Career Milestones */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-4xl font-bold">Career Milestones</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Urwego Finance"
            subTitle="Backend Developer (2023 - Present)"
            result="Ongoing"
            des="Developing and maintaining secure backend services using NestJS and PostgreSQL. Focused on financial APIs, data integrity, and microservice architecture."
          />
          <ResumeCard
            title="Empower Africa Now Ltd"
            subTitle="Backend Developer & Trainer (2022 - 2023)"
            result="Completed"
            des="Designed backend systems for internal platforms and mentored junior developers on API design, database management, and CI/CD practices."
          />
          <ResumeCard
            title="GogoConnect Ltd"
            subTitle="Front-end Developer (2019 - 2021)"
            result="Completed"
            des="Crafted intuitive user interfaces with React.js, delivering dynamic user experiences across multiple platforms while adhering to modern design principles."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
