"use client";
import { motion } from "motion/react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Engineer",
      period: "2023-2024",
      delay: 2.5,
    },
    {
      role: "Associate Engineer",
      period: "2021-2023",
      delay: 1.5,
    },
    {
      role: "Intern",
      period: "2021-2020",
      delay: 0.5,
    },
  ];

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-black">Experience</h2>
      <a
        href="https://www.litmus7.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-block text-base text-gray-700 transition-colors duration-300 hover:text-[#4F5AED]"
      >
        Litmus7 Systems Consulting Pvt. Ltd.
      </a>
      <div className="relative">
        <div className="absolute bottom-0 left-4 h-full w-px bg-[#D0D7FE]">
          <div
            className="absolute bottom-0 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #B0C4DE 50%, transparent 50%)",
              backgroundSize: "2px 4px",
              opacity: 0.5,
            }}
          />
        </div>

        {experiences.map((exp) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: exp.delay * 0.1,
              duration: 0.5,
            }}
            className="relative mb-8 ml-6 flex items-center last:mb-0"
          >
            <div
              className="absolute -left-3.5 h-3 w-3 rounded-full shadow-sm"
              style={{
                background: "#E8EBFF",
                border: "2px solid #D0D7FE",
              }}
            />
            <div className="group ml-4">
              <p className="text-base font-medium text-gray-800">{exp.role}</p>
              <p className="text-sm text-gray-600">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
