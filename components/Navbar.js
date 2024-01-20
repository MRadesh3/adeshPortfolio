"use client";

import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiMiniClipboardDocumentCheck,
  HiSquaresPlus,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Skills", path: "/skills", icon: <HiSquaresPlus /> },
  {
    name: "Projects",
    path: "/projects",
    icon: <HiMiniClipboardDocumentCheck />,
  },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
  //   {
  //     name: "Testimonials",
  //     path: "/testimonials",
  //     icon: <HiChatBubbleBottomCenterText />,
  //   },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathName && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white flex text-primary items-center relative p-[6px] rounded-[3px]">
                  <div className="text-[0.75rem] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
