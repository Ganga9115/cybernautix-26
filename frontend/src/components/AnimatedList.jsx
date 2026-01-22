import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedList({ children, delay = 0 }) {
  const ref = useRef(null);

  // Animate only once when it comes into view
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
