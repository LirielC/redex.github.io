"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  type?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none";
  rootMargin?: string;
  threshold?: number;
  animationVariants?: Variants;
}

const defaultAnimationVariants: Record<string, Variants> = {
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  "zoom": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  "none": {
    hidden: {},
    visible: {}
  }
};

export function AnimatedElement({
  children,
  className,
  delay = 0,
  duration = 0.4,
  once = true,
  type = "fade",
  rootMargin = "-100px",
  threshold = 0.1,
  animationVariants,
}: AnimatedElementProps) {
  const variants = animationVariants || defaultAnimationVariants[type];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, rootMargin, threshold }}
      variants={variants}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier easing
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  duration = 0.4,
  once = true,
  staggerChildren = 0.05,
  delayChildren = 0
}: AnimatedElementProps & { staggerChildren?: number; delayChildren?: number }) {

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  if (typeof children !== 'string') {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={headingVariants}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children.split(' ').map((word, idx) => (
        <span key={idx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, index) => (
            <motion.span
              key={`${idx}-${index}`}
              className="inline-block"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
