import React from "react";
import { motion } from "motion/react";
const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent"
        animate={{
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </div>
  );
};

export default Loader;
