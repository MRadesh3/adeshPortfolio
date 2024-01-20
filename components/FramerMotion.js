"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";

const FramerMotion = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        className="h-full"
        exit={{
          opacity: 0,
          transition: { duration: 0 },
        }}
      >
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerMotion;
