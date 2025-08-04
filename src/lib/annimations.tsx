"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  MotionValue,
  useMotionValue,
  useTransform,
  type Transition,
  type MotionProps,
} from "motion/react";
import { interpolate } from "flubber";

// 🎯 ========== Reusable Animations ==========

// 1. Rotation Example
export function Rotate() {
  return <motion.div animate={{ rotate: 360 }} transition={{ duration: 1 }} />;
}

// 2. Enter Animation (scale in)
export function EnterAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    />
  );
}

// 3. Gestures (hover and tap)
export function Gestures() {
  return <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />;
}

// 4. Exit Animation Example (toggle show/hide)
export function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };
  const box = { width: 100, height: 100, background: "#ccc", borderRadius: 12 };

  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
          />
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

// 5. Counter for Stats

export function StatCounter({
  end = 100,
  duration = 3,
  start = true, // Control when animation begins
}: {
  end?: number;
  duration?: number;
  start?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const text = { fontSize: "2rem", fontWeight: "bold" };

  useEffect(() => {
    if (!start) return;
    const controls = animate(count, end, { duration });
    return () => controls.stop();
  }, [end, duration, start]); // Now respects `start`

  return <motion.span style={text}>{rounded}</motion.span>;
}

// 6. Transition Options Example
export function TransitionOptions() {
  const ball = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "var(--accent)",
  };

  return (
    <motion.div
      style={ball}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
}

// 7. Slide in variants
export const slideVariants = {
  top: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  bottom: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  left: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
};

// 8. Utility function to get slide direction
export function getDirectionVariant(direction: "top" | "bottom" | "left" | "right") {
  return slideVariants[direction] || slideVariants.top;
}

// 9. Default spring transition
export const defaultSpring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

// 10. Viewport fade/slide animation
export const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// 11. Path Morphing Animation
export function PathMorphing() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <svg width="400" height="400">
      <g transform="translate(10 10) scale(17 17)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}

// Flubber helper
function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

const getIndex = (_: string, index: number) => index;

const paths = [
  "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80",
  "M20 80 C 60 10, 75 10, 105 80 S 160 150, 190 80",
];

const colors = ["#ff4081", "#2196f3"];
