"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // once: false — animation replays every time the element enters the viewport
  const inView = useInView(ref, { margin: "0px 0px -8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
