import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:gitannett@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/annettomcy",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/annettomcy",
    label: "GitHub",
  },
  {
    icon: Download,
    href: "/resume.pdf",
    label: "Resume",
  },
];

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const nameLetterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    }),
  };

  return (
    <motion.div
      className="space-y-6 lg:sticky lg:top-6 lg:h-fit"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="relative">
        <h1 className="mb-2 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-4xl font-bold leading-[1.3] tracking-tight text-transparent">
          {["A", "n", "n", "e", "t ", " ", "T", "o", "m", "c", "y"].map(
            (letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={nameLetterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block origin-bottom ${letter === " " ? "mr-2" : ""}`}
              >
                {letter}
              </motion.span>
            ),
          )}
        </h1>
        <h2 className="text-xl font-medium text-gray-600">
          Front-end Software Engineer
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <p className="leading-relaxed text-gray-700">
          As a passionate front-end engineer with 4 years of experience, I
          specialize in transforming complex design concepts into performant web
          applications. My technical expertise spans JS libraries and frameworks
          with a proven track record of creating responsive and engaging user
          experiences.
        </p>
        <p className="leading-relaxed text-gray-700">
          Beyond coding, I excel in cross-functional communication and have a
          natural ability to bridge technical and non-technical teams.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800">Let's Connect</h2>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group text-gray-600 transition-all duration-300 hover:text-violet-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon
                size={20}
                className="transition-colors duration-300 group-hover:stroke-violet-600"
              />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
