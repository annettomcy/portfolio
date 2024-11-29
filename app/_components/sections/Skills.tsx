"use client";
import { motion } from "motion/react";

import { skills } from "@/_components/lib/skills-data";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-xl font-bold text-black"
      >
        Skills
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <motion.a
            key={skill.title}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="rounded-full border border-[#D0D7FE]/30 bg-[#D0D7FE]/20 px-4 py-2 text-sm font-medium text-gray-800 no-underline shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#D0D7FE]/30 hover:shadow-md active:scale-95"
          >
            {skill.title}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
