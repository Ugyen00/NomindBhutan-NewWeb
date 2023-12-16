import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

interface CountUpAnimationProps {
  targetCount: number;
  label: string;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  targetCount,
  label,
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const duration = 700;
      const increment = targetCount / duration;

      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount += increment;
        setCount(Math.min(Math.ceil(currentCount), targetCount));
      }, 1);

      controls.start({ opacity: 1, y: 0 });

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView, targetCount, controls]);

  return (
    <div className="text-center mt-16 items-center" ref={ref}>
      <motion.p
        className="text-[20px] pl-32 pr-32"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {label}
      </motion.p>
      <motion.p
        className="text-6xl pl-32 pr-32 font-sans font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {count}
      </motion.p>
    </div>
  );
};

export default CountUpAnimation;
