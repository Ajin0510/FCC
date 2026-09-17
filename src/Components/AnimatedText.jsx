import { motion } from "motion/react";

export default function AnimatedText({
  text,
  className,
  delay = 0,
}) {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: letter === " " ? "pre" : "normal",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}