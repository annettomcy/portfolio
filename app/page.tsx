"use client";

import Portfolio from "@/_components/Portfolio";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

export default function Home() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="relative"
      >
        <div className="fixed inset-0 h-full w-full bg-gradient-to-br from-[#D0D7FE] via-[#DCE1FE] via-[#E8EBFF] to-[#F5F7FF]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8EBFF_1px,transparent_1px),linear-gradient(to_bottom,#E8EBFF_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        </div>
        <motion.main className={`relative min-h-screen w-full`}>
          <div className="mx-auto max-w-[1600px] p-8 sm:p-12 md:p-16 lg:p-20">
            <Portfolio />
          </div>
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}
