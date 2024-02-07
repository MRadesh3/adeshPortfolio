"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from "next/link";

import { RxArrowTopRight } from "react-icons/rx";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCcStripe,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiGooglecloud,
  SiCloudflare,
  SiSass,
  SiReact,
  SiMui,
} from "react-icons/si";

const projectData = [
  {
    name: "ShopingGo",
    source: "/assets/images/videos/shopingGo.mp4",
    link: "https://shopinggo.vercel.app/",
    github: "https://github.com/MRadesh3/shopingGo",
    techstack: [
      {
        icon: <SiNextdotjs />,
      },
      {
        icon: <SiTailwindcss />,
      },
      {
        icon: <FaJs />,
      },
      {
        icon: <FaCcStripe />,
      },
      {
        icon: <FaNodeJs />,
      },
      {
        icon: <SiMongodb />,
      },
      {
        icon: <SiRedux />,
      },
      {
        icon: <SiCloudflare />,
      },
      {
        icon: <FaHtml5 />,
      },
      {
        icon: <FaCss3 />,
      },
    ],
    description:
      "ShopingGo is an online e-commerce platform that provides a seamless and convenient shopping experience for users. With a user-friendly interface and a wide range of products, ShopingGo aims to be your go-to destination for all your shopping needs.",
  },
  {
    name: "ThoughtFlix",
    source: "/assets/images/videos/thoughtFlix.mp4",
    link: "https://thoughtflix.vercel.app/",
    github: "https://github.com/MRadesh3/thoughtFlix",
    techstack: [
      {
        icon: <SiNextdotjs />,
      },
      {
        icon: <SiTailwindcss />,
      },
      {
        icon: <FaJs />,
      },
      {
        icon: <SiGooglecloud />,
      },
      {
        icon: <FaNodeJs />,
      },
      {
        icon: <SiMongodb />,
      },
      {
        icon: <FaHtml5 />,
      },
      {
        icon: <FaCss3 />,
      },
    ],
    description:
      "Welcome to ThoughtFlix, where profound wisdom meets cinematic flair. Experience a journey through inspiring quotes brought to life, unfolding like scenes in a movie. Join us on this cinematic voyage where each quote paints a masterpiece of inspiration. Welcome to ThoughtFlix – where ideas sparkle, and thoughts shine in the spotlight.",
  },
  {
    name: "React Admin Dashboard",
    source: "/assets/images/videos/React_admindashboard.mp4",
    link: "https://reactadmindashboard-seven.vercel.app/",
    github: "https://github.com/MRadesh3/react_admindashboard",
    techstack: [
      {
        icon: <SiReact />,
      },
      {
        icon: <SiSass />,
      },
      {
        icon: <FaJs />,
      },
      {
        icon: <SiMui />,
      },
      {
        icon: <FaNodeJs />,
      },
      {
        icon: <FaHtml5 />,
      },
      {
        icon: <FaCss3 />,
      },
    ],
    description:
      "A React admin dashboard is a dynamic web application interface designed for efficiently managing and visualizing data within an organization. Leveraging the power of React, a popular JavaScript library for building user interfaces, these dashboards offer a responsive and interactive experience",
  },
];

const ProjectsSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 1,
        },
        1440: {
          slidesPerView: 1,
        },
      }}
      className="mySwiper"
    >
      {projectData.map((project, projectIndex) => {
        return (
          <SwiperSlide key={projectIndex}>
            <div className="bg-[rgba(65,47,123,0.15)] rounded-lg xxl:py-20 max-md:py-4 px-6 py-8 grid grid-cols-5 gap-10 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="flex justify-center items-center col-span-2 max-md:col-span-5">
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ height: "100%", width: "100%" }}
                >
                  <source src={project.source} type="video/mp4" />
                </video>
              </div>
              <div className="col-span-3 max-md:col-span-5">
                <div>
                  <h4 className="h3 text-center mb-5">{project.name}</h4>
                </div>
                <div className="flex justify-between mb-5">
                  <div>
                    <Link href={project.link} className="text-lg">
                      Go to website
                    </Link>
                  </div>
                  <div>
                    <Link href={project.github} className="text-2xl">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <h1 className="text-lg md:hidden mb-5">Tech Stack : </h1>
                <div className="flex gap-4 mb-4">
                  <h1 className="text-lg max-md:hidden"> Tech Stack :</h1>
                  {project.techstack.map((tech, techIndex) => {
                    return (
                      <div key={techIndex} className="text-xl flex gap-4">
                        {tech.icon}
                      </div>
                    );
                  })}
                </div>
                <p className="text-justify max-md:hidden">
                  {project.description}
                </p>
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

export default ProjectsSlider;
