"use client";

import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const page = () => {
  return (
    <div className="h-full bg-primary/30 ">
      <div className="conatiner mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full xl:max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-10 max-md:my-5 text-center mb-12"
          >
            Let&apos;s <span className="red_gradient">Connect.</span>
          </motion.h2>
          <motion.form
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_GMAIL}`}
            method="POST"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full px-5 z-10"
          >
            <div className="flex gap-x-6">
              <input
                type="hidden"
                name="_next"
                value={`${process.env.NEXT_PUBLIC_BASE_URL}/thankyou`}
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="textarea"
              required
            ></textarea>
            <center>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s Talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
              </button>
            </center>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default page;
