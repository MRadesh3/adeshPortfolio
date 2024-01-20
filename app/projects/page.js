"use client";

import Circles from "@/components/Circles";
import ProjectsSlider from "@/components/ProjectsSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const page = () => {
  return (
    <div className="h-full bg-primary/30 flex">
      <Circles />
      <div className="container mx-auto xl:max-w-[85%] z-[9]">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h2 className="h2 md:mt-20 mt-[100px] mb-10 max-md:mb-5 text-center">
            My <span className="red_gradient">Projects</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ProjectsSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
