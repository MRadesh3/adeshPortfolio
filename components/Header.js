import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-5 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row  items-center justify-between gap-y-4 py-8">
          <Link href="/">
            <Image
              src="/assets/logo-1.png"
              width={130}
              height={50}
              alt="Logo"
              priority={true}
              className="cursor-pointer"
            ></Image>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
