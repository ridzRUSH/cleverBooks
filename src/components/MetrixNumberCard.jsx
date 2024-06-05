import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const MetrixNumberCard = ({
  number,
  text,
  unit,
  duration = 2,
  triggerThreshold = 200, // Adjust scroll sensitivity for visibility check
  triggerPosition = 0, // Scroll position (in pixels) to start counting (optional)
}) => {
  const scrollRef = useRef(null);
  const [count, setCount] = useState(0);
  const previousScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false); // Track component visibility

  const animateCount = async () => {
    for (let i = 1; i <= number; i++) {
      await new Promise((resolve) => setTimeout(resolve, duration / number));
      setCount(i);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = scrollRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementMidpoint = elementTop + scrollRef.current.offsetHeight / 2;
      const scrollY = window.scrollY;

      // Check if element midpoint is within viewport
      setIsVisible(elementMidpoint >= 0 && elementMidpoint <= windowHeight);

      // Update count only if visible and past trigger position (if provided)
      if (isVisible && (!triggerPosition || scrollY >= triggerPosition)) {
        animateCount();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [number, duration, triggerThreshold, triggerPosition, isVisible]);

  return (
    <motion.div
      ref={scrollRef}
      className="flex flex-col items-center justify-center p-16 bg-slate-200 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      <motion.span
        className=" font-bold mb-2"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className=" text-8xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          {count}
        </span>
        <span className="text-xl font-bold">{unit}</span>
      </motion.span>
      <span className="text-xl flex items-center justify-end">{text}</span>
    </motion.div>
  );
};

export default MetrixNumberCard;
