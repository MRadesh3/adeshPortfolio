"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { RxArrowTopRight } from "react-icons/rx";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiMicrosoftexcel,
} from "react-icons/si";

const serviceData = [
  {
    icon: <FaJs />,
    title: "JavaScript",
    description:
      "I have good hands on practice in JavaScript, I have been using JavaScript for more than a year now.",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next JS",
    description:
      "I have build 2 Full Stack projects using Next JS and have a good understanding of it.",
  },
  {
    icon: <FaReact />,
    title: "React JS",
    description:
      "React JS is my go to library for building Frontend. I have been enthusiast about React JS.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node JS",
    description:
      "I prefer using Node JS for building Backend of my projects for its simplicity and ease of use.",
  },
  {
    icon: <SiMongodb />,
    title: "Mongo DB",
    description:
      "Since I have started doing Full Stack projects, I have been using Mongo DB for my database needs.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
    description:
      "I have strong understanding of HTML and its semantics and I use it for structuring my projects.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description:
      "Recently I have started using Tailwind CSS for styling as it makes styling much easier.",
  },
  {
    icon: <FaSass />,
    title: "SASS",
    description:
      "Utilizing Sass for efficient and scalable CSS, enhancing maintainability and scalability in web development",
  },
  {
    icon: <FaCss3 />,
    title: "CSS",
    description:
      "I have good understanding of CSS and its properties and I use it for styling my projects.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description:
      "I have been using GitHub for version control and I have good understanding and experience with it.",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description:
      "I have been using Git for version control and command line interface and I have good understanding and experience with it.",
  },
  {
    icon: <SiMicrosoftexcel />,
    title: "Microsoft Excel",
    description:
      "I have acquired significant familiarity and proficiency with Microsoft Excel and its features.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {serviceData.map((service, serviceIndex) => {
        return (
          <SwiperSlide key={serviceIndex}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 max-md:py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="text-4xl text-accent mb-4">{service.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{service.title}</div>
                <p className="text-sm text-justify hyphens-auto leading-normal">
                  {service.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <style>
        {`
            .swiper-pagination-bullet-active {
            background: red;
            }
            div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
                margin-top: 10px;
                position: static;
            }
           
        `}
      </style>
    </Swiper>
  );
};

export default ServiceSlider;
