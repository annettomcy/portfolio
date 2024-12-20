"use client";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  heading: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
};

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    key={project.title}
    variants={ANIMATION_VARIANTS.item}
    className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
  >
    <div className="flex flex-col sm:flex-row">
      <div className="w-full pr-0 sm:w-48 sm:flex-shrink-0 sm:pr-4">
        <Image
          src={project.image}
          alt={project.title}
          width={192}
          height={192}
          quality={75}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-48 w-full rounded-t-xl object-cover sm:h-full sm:rounded-l-xl sm:rounded-t-none"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-gray-900">{project.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{project.description}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project on GitHub`}
            className="rounded-full p-2 transition-colors duration-300 hover:bg-gray-100"
          >
            <span className="sr-only">View {project.title} on GitHub</span>
            <ExternalLink className="h-5 w-5 text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "CSSBattle Bonus Targets",
      description:
        "Extended CSSBattle's Battle 1 by creating additional design targets to challenge my CSS skills.",
      image: "/project1.png",
      github: "https://github.com/annettomcy/CSSBattleBonus",
    },
    {
      title: "Minimalistic Portfolio",
      description:
        "Designed a personal portfolio website to effectively showcase projects and professional skills using Next.js and Tailwind CSS.",
      image: "/project2.png",
      github: "https://github.com/annettomcy/portfolio",
    },
  ];

  return (
    <>
      <motion.h2
        initial={ANIMATION_VARIANTS.heading.initial}
        animate={ANIMATION_VARIANTS.heading.animate}
        transition={ANIMATION_VARIANTS.heading.transition}
        className="mb-5 text-xl font-bold text-black"
      >
        Selected Projects
      </motion.h2>
      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
