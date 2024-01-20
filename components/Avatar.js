import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none">
      <Image
        src="/assets/images/avatar.png"
        width={500}
        height={500}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
