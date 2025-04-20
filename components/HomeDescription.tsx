"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
  " Software Engineer holding a Bachelor of Science in Software Engineering, with 2+ years of professional experience as a MERN Stack Developer. Specialized in building high-performance, scalable web applications using React.js,Next.js, Node.js, MongoDB, and Express.js, with a proven track record of delivering exceptional end-to-end solutions.";

  const { displayedText, isComplete } = useTypeWriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-12 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 165 175)" }}
            animate={{
              color: isComplete ? " rgb(255 255 255)" : "rgb(156 165 175)",
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
