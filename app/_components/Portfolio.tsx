"use client";

import { motion } from "motion/react";
import { Suspense, lazy } from "react";

import ErrorBoundary from "@/_components/ErrorBoundary";
import Loader from "@/_components/Loader";

const ExperienceTimelineSection = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const SpeakingSection = lazy(() => import("./sections/Speaking"));
const Main = lazy(() => import("./sections/Main"));

const AnimatedSection = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    className="overflow-hidden rounded-xl bg-gradient-to-tr from-[#E8EBFF] to-[#FFFFFF] p-4 shadow-lg sm:p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay,
    }}
  >
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ErrorBoundary>
  </motion.div>
);

const Portfolio = () => {
  const sections = [
    {
      component: <ExperienceTimelineSection />,
      delay: 0.1,
      testId: "experience-section",
    },
    {
      component: <Projects />,
      delay: 0.2,
      testId: "projects-section",
    },
    {
      component: <Skills />,
      delay: 0.3,
      testId: "skills-section",
    },
    {
      component: <SpeakingSection />,
      delay: 0.4,
      testId: "speaking-section",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:grid lg:grid-cols-[minmax(350px,_480px)_1fr]">
        <ErrorBoundary fallback={<div>Failed to load profile</div>}>
          <Suspense fallback={<Loader />}>
            <div className="self-center">
              <Main />
            </div>
          </Suspense>
        </ErrorBoundary>

        <div className="grid grid-cols-1 gap-4 min-[915px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-[1.15fr_2fr]">
          {sections.map((section, index) => (
            <AnimatedSection key={index} delay={section.delay}>
              {section.component}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
