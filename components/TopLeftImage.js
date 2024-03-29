import Image from "next/image";

const TopLeftImage = () => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge z-[8] w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/assets/images/top-left-img.png"
        width={400}
        height={400}
        alt="image"
      ></Image>
    </div>
  );
};

export default TopLeftImage;
