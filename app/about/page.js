"use client";

import { useState } from "react";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import Link from "next/link";
import ParticlesContainer2 from "@/components/ParticlesContainer2";

const aboutData = [
  {
    title: "About",
    info: [
      {
        title: "Introduction",
        details: `Welcome to my corner of the digital universe ! I'm Adesh Santosh Salsundar, a passionate and innovative web developer dedicated to crafting immersive and user-centric online experiences. With a deep-rooted love for coding and an insatiable curiosity for the ever-evolving world of technology, I bring a unique blend of creativity and technical expertise to every project.`,
        generalinfo: [
          {
            title: "Date Of Birth",
            details: "10th January 2000",
          },
          {
            title: "Hobbies & Interests",
            details: "Travelling, Music, Cooking, Photography",
          },
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "B.Tech |  8.07 / 10 CGPA | 2019 - 2023",
        stage: "Electronics & Telecommunication Engineering",
        location:
          "Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad, Maharashtra",
      },
      {
        title: "HSC | 94.70 % | March 2019",
        location: "Narayana Junior College, Lingampally, Hyderabad, Telangana",
      },
      {
        title: "SSC | 94.80 % | March 2017",
        location: "Shantiniketan English School, Washim, Maharashtra",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Frontend Developer - Collin It Solutions",
        stage: "March 2023 - September 2023",
      },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "Web Development - Udemy",
        src: "/assets/images/certificate.png",
        link: "https://drive.google.com/file/d/1S_XZgw56I8dDulzpsHrSi_QcW7jrQPUD/view?usp=sharing",
        stage: "31 December 2022",
      },
      {
        title: "Frontend Development - Collin It Solutions",
        src: "/assets/images/certificate-1.png",
        link: "https://drive.google.com/file/d/1FubwX-jPHtBdvS5VI9ZODbFefmIDlZGv/view?usp=drive_link",
        stage: "31 July 2022",
      },
      {
        title: "Microsoft Excel - Udemy",
        src: "/assets/images/certificate-2.png",
        link: "https://drive.google.com/file/d/15P36-AwEe5La87lGrwOvasb0YwGm5qoT/view?usp=sharing",
        stage: "28 September 2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" bg-primary/30 xxl:pt-[190px] pt-32 pb-32 text-left h-full">
      <Circles />

      <div className="container w-full xxl:max-w-[90%] mx-auto h-full flex flex-col items-start xl:flex-row gap-x-20">
        <ParticlesContainer2 />
        <div className="flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-md:h3 h2 text-center mt-0"
          >
            Innovate, Create &{" "}
            <span className="red_gradient">Represent with code</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex absolute bottom-0 left-0 "
          >
            <div className="hidden xl:flex xl:max-w-none w-[330px] h-[370px]">
              <Image
                src="/assets/images/avatar-2.png"
                width={455}
                height={526}
                alt="Avatar"
                className=" w-full h-full "
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[60%] h-[380px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-10`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6  gap-y-2 xl:gap-y-4 items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={
                    item.src
                      ? "flex-1 flex max-w-xl gap-x-2 text-white/60"
                      : "flex-1 flex flex-col max-w-xl gap-x-2 text-white/60"
                  }
                >
                  <div
                    className={
                      item.src
                        ? "grid grid-cols-2 gap-5 font-light mb-6 items-center w-full"
                        : "font-light mb-2"
                    }
                  >
                    <div className="w-full">
                      <div>{item.title}</div>
                      <div className={item.src ? "block" : "hidden"}>
                        {item.stage}
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                      {item.link && (
                        <Link href={item.link}>
                          <Image
                            src={item.src}
                            width={100}
                            height={100}
                            alt="Certificate"
                          ></Image>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="text-justify">
                    {item.details && item.details}
                  </div>
                  {item.generalinfo &&
                    item.generalinfo.map((info, infoIndex) => {
                      return (
                        <div key={infoIndex} className="mt-5">
                          {info.title} - {info.details}
                        </div>
                      );
                    })}
                  <div className={item.src ? "hidden" : "block"}>
                    {item.stage}
                  </div>

                  <div className="mb-6">{item.location && item.location}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
