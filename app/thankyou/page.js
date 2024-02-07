"use client";

import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const page = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <div className="container mx-auto text-center">
        <Circles />
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 red_gradient"
          >
            Thank You
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:max-w-[80%]"
          >
            Thank you for visiting my portfolio ! I am truly grateful for the
            opportunity to share my passion and work with you. Each project is a
            testament to my dedication to creativity, innovation, and attention
            to detail. Your time spent exploring my portfolio is greatly
            appreciated. I look forward to connecting with you and exploring
            potential opportunities together. Once again, thank you for your
            interest and support.
          </motion.p>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default page;
