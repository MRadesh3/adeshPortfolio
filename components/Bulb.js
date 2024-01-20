import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-8 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/assets/images/bulb.png"
        width={260}
        height={200}
        alt="Bulb"
      ></Image>
    </div>
  );
};

export default Bulb;
