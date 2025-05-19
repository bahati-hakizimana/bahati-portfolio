import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PASIS Payment Gateway"
          des="Built a decentralized cross-border payment gateway enabling secure money transfers across African countries. Integrated Stellar blockchain for fast, low-cost transactions. Designed and developed APIs allowing merchants to accept online payments seamlessly through PASIS for their businesses."
          src={projectOne}
        />
        <ProjectsCard
          title="Multi-Vendor E-commerce Platform"
          des="Developed a scalable e-commerce system where multiple vendors can register, manage inventories, and sell products online. Implemented secure checkout, order tracking, and payment integration. Customers can browse vendors, compare products, and place orders seamlessly."
          src={projectTwo}
        />
        <ProjectsCard
          title="Mobile Banking System"
          des="Engineered a mobile banking platform supporting account management, fund transfers, and SMS notifications. Enabled USSD integration for non-smartphone users and optimized backend using Golang for performance and security."
          src={projectThree}
        />
        <ProjectsCard
          title="Transport System Simulation"
          des="Developed a transport management simulation handling bookings, bus route logic, arrival time prediction, and financial reporting for a virtual bus company."
          src={projectThree}
        />
        <ProjectsCard
          title="Quran Learn Hub"
          des="E-learning platform for Quranic studies with role-based access for students, teachers, and admins. Includes course creation, exams, grading, and certification features using Express and React.js."
          src={projectOne}
        />
        <ProjectsCard
          title="Subscription Tracking App"
          des="A subscription management system for an exam preparation platform. Users subscribe monthly, receive automated reminders as their renewal date approaches, and can easily renew online. Features include payment tracking, notifications, and Firebase integration for authentication and messaging."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
