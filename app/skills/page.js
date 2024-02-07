"use client";

import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

const page = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <Circles />
      <div className="container mx-auto xl:max-w-[80%] z-[9]">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-8 max-md:mt-4"
          >
            My <span className="red_gradient">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-sm:text-justify mb-10 max-md:mb-6"
          >
            Proficient web developer adept in JavaScript, Next.js, React.js,
            Node.js, Express, MongoDB, HTML, and CSS. Specializes in responsive
            interfaces, robust server-side applications, and prioritizes clean
            code. Enthusiastic about crafting seamless digital experiences.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default page;
