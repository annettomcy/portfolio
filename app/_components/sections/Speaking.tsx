"use client";
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const speakingEvents = [
  {
    title: "All Hands Meet 2024",
    description:
      "Co-hosted the annual company-wide meeting, facilitating discussions on strategic initiatives and team collaboration.",
    image: "/speaking1.png",
    date: "February 2024",
  },
  {
    title: "All Hands Meet 2022",
    description:
      "Co-hosted the first in-person All Hands Meet post-COVID, facilitating team reconnection and discussions that reimagined our workplace vision.",
    image: "/speaking2.jpeg",
    date: "March 2022",
  },
];

const Speaking = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % speakingEvents.length);
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-black">Speaking & Hosting</h2>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <motion.div
          className="w-full space-y-2 md:w-3/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {speakingEvents[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-600">
                {speakingEvents[currentIndex].description}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                {speakingEvents[currentIndex].date}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-2 flex items-center gap-2 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Click here</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
            >
              <ChevronDownIcon size={16} className="text-gray-500" />
            </motion.div>
          </motion.div>

          <div
            className="relative h-40 w-40 flex-shrink-0 cursor-pointer"
            onClick={handleClick}
          >
            {speakingEvents.map((event, index) => {
              const position =
                (index - currentIndex + speakingEvents.length) %
                speakingEvents.length;
              return (
                <motion.div
                  key={event.title}
                  className="absolute h-full w-full"
                  style={{ borderRadius: "12px", overflow: "hidden" }}
                  animate={{
                    scale: 1 - position * 0.05,
                    y: position * 8,
                    zIndex: speakingEvents.length - position,
                    filter: `brightness(${1 - position * 0.15})`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full rounded-xl object-cover shadow-lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaking;
