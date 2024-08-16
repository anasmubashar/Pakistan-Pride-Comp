import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[50vh] bg-black relative flex flex-col justify-start box-border">
      <div className="bg-[#09200FCC] bg-opacity-75 w-[80%] mt-8 h-[50%] rounded-xl mx-auto flex flex-col  text-white">
        <div className="ellipse h-80 w-80"></div>
        <p className="text-3xl mt-4 font-bold text-center">
          Become part of the <br /> design revolution
        </p>
        <p className="text-center text-sm mt-2">
          Jump on a membership and start <br /> requesting designs right away!
        </p>
        <button className="h-8 w-32 font-semibold text-sm flex gap-2 items-center px-4 rounded-full bg-[#009F30] text-white mx-auto mt-4">
          <p>See Pricing</p>
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
        <div className="flex w-[80%] mx-auto justify-between mt-6">
          <div className="flex gap-4 text-white">
            <p>© 2024 Designed by Azna Ijaz</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="flex gap-2">
            <Image src="/twitter.svg" alt="Logo" width={30} height={30} />
            <Image src="/linkedIn.svg" alt="Logo" width={30} height={30} />
            <Image src="/facebook.svg" alt="Logo" width={30} height={30} />
          </div>
        </div>
      </div>
      <p className="text-[#71717A] mt-3 w-[80%] mx-auto">
        Pak-Tech Innovations highlights recent technological advancements,
        startups, and projects in AI, fintech, and biotech <br /> in Pakistan.
        It provides an overview of the innovative work happening in these
        fields.
      </p>
      <p className="text-[#71717A] mt-3 w-[80%] mx-auto">
        Pak-Tech Innovations presents future projects and visions for Pakistan's
        technological landscape. It explores the <br /> potential advancements
        and developments that can be expected in the coming years.
      </p>
    </div>
  );
}
