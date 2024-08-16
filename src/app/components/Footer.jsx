import Image from "next/image";

export default function Footer() {
  return (
    <div className="min-h-[100vh] bg-black relative flex flex-col justify-start box-border py-20">
      <div data-aos="zoom-in-up" className="bg-[#09200FCC] bg-opacity-75 w-[80%] mt-8 h-full pb-10 md:pb-0 md:h-[400px] rounded-xl mx-auto flex flex-col  text-white">
        <div className="ellipse h-80 w-80"></div>
        <p className="text-3xl md:text-5xl mt-4 font-bold mb-7 pt-10 font-sans text-center leading-[6vh] md:leading-[9vh]">
          Become part of the <br /> design revolution
        </p>
        <p className="text-center text-md leading-7">
          Jump on a membership and start <br /> requesting designs right away!
        </p>
        <button className="h-8 w-36 mt-6 font-semibold text-sm flex gap-2 items-center px-6 rounded-full bg-[#009F30] text-white mx-auto cursor-pointer hover:opacity-80 transition-all z-10">
          See Pricing
          <Image src="/send.svg" alt="Arrow" width={15} height={15} />
        </button>
        {/* <Image
          src="/Line2.png"
          alt="Line"
          layout="fill"
          objectFit="contain"
          className="absolute z-auto"
        /> */}
      </div>
      <div>
        <div className="flex w-[80%] mx-auto justify-between mt-10 ">
          <div className="flex flex-col md:flex-row gap-4 text-white">
            <p className="cursor-pointer">© 2024 Designed and Developed by Pakistani Pioneers</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Use</p>
          </div>
          <div className="flex gap-4">
            <Image className="cursor-pointer" src="/twitter.svg" alt="Logo" width={30} height={30} />
            <Image className="cursor-pointer" src="/linkedIn.svg" alt="Logo" width={30} height={30} />
            <Image className="cursor-pointer" src="/facebook.svg" alt="Logo" width={30} height={30} />
          </div>
        </div>
      </div>
      <p className="text-[#71717A] mt-3 w-[80%] mx-auto hidden md:block">
        Pak-Tech Innovations highlights recent technological advancements,
        startups, and projects in AI, fintech, and biotech <br /> in Pakistan.
        It provides an overview of the innovative work happening in these
        fields.
      </p>
      <p className="text-[#71717A] mt-3 w-[80%] mx-auto hidden md:block">
        Pak-Tech Innovations presents future projects and visions for Pakistans
        technological landscape. It explores the <br /> potential advancements
        and developments that can be expected in the coming years.
      </p>
    </div>
  );
}
