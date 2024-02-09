import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiIdentification } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 flex gap-10 z-10 justify-center items-center">
      <Link
        href="/projects"
        className="relative w-[95px] h-[95px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/assets/images/rounded-text.png"
          width={141}
          height={148}
          alt="Projects btn"
          className="animate-spin-slow cursor-pointer w-full h-full max-w-[65px] max-h-[72px] "
        />
        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
      <a
        className="button"
        download
        onClick={(e) => {
          e.preventDefault();
          window.open("/assets/images/adesh-resume.pdf", "_blank");
        }}
      >
        Resume <HiIdentification className="inline-block ml-2 text-xl" />
      </a>
    </div>
  );
};

export default ProjectsBtn;
