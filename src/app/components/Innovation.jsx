import Image from "next/image";
export default function Innovations() {
  return (
    <div className="bg-[url('/Light.png')] h-auto relative">
      <div className="bg-[url('/Line.png')] h-full z-10">
        <div className="flex justify-between items-center">
          <Image
            className="self-end"
            layout="intrinsic"
            width={700}
            height={600}
            src="/vr.png"
            alt="Person in vr"
            objectFit="cover"
          />
          <div className="md:mr-[10vw]">
            <h1 className="text-start text-gradient text-6xl leading-[12vh]">
              Innovation <br /> you can see, <br /> hear, and feel.
            </h1>
            <div className="flex gap-4 mt-10">
              <button className="h-8 font-semibold text-sm w-auto px-4 rounded-full bg-[#009F30] text-white">
                Demo
              </button>
              <button className="h-8 text-[14px] w-auto px-4 border-[0.656px] font-semibold border-[rgba(255, 255, 255, 0.20)] gap-1 rounded-full flex justify-center items-center bg-transparent">
                <p className="text-white">How it works</p>
                <Image src="/Arrow.svg" alt="Arrow" width={20} height={20} />
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
