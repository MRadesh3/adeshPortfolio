import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl xl:mr-10">
      <Link
        href="https://www.linkedin.com/in/adesh-salsundar-a73b4121a/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href="https://github.com/MRadesh3"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://wa.me/8080120538?text=Welcome 😎"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href="https://www.instagram.com/mr_adesh3?igsh=dTBnOWw1NGo0NHQz"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
