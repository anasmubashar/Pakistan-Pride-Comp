import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[65vh] bg-[url('/Light.png')] text-white relative overflow-hidden">
      <img
        className="absolute z-[1] w-full h-full object-contain"
        src="/Line.png"
        alt="line"
      />
      <nav className="flex justify-center">
        <li className="flex gap-2 mt-4 items-center font-light">
          <a href="#">Home</a>
          <p className="mb-1 text-lg">.</p>
          <a href="#">Tech</a>
          <p className="mb-1 text-lg">.</p>
          <a href="#">Entrepreneurs</a>
          <p className="mb-1 text-lg">.</p>
          <a href="#">About Us</a>
        </li>
      </nav>
      <h1 className="text-center text-gradient text-6xl mt-24">
        Shaping the Future
      </h1>
      <p className="mx-auto text-center w-[40%] text-[rgba(255, 255, 255, 0.70)] mt-6">
        Discover the cutting-edge technologies, visionary entrepreneurs, and
        future projects that are propelling Pakistan towards a brighter
        tomorrow.
      </p>

      <div className="flex gap-4 justify-center  mt-4">
        <button className="h-7 font-semibold text-sm w-40 rounded-xl bg-[#009F30]">
          Explore Innovations
        </button>
        <button className="h-7 text-[14px] w-[12.3rem] border-[0.656px] font-semibold border-[rgba(255, 255, 255, 0.20)] gap-1 rounded-xl flex justify-center items-center">
          <p>Meet Our Entrepreneurs</p>
          <Image src="/Arrow.svg" alt="Arrow" width={20} height={20} />
        </button>
      </div>

      {/* <Image
        width={800}
        height={800}
        objectFit="contain"
        className="absolute mx-auto left-0 right-0 bottom-0 -z-10"
        src="/Light.png"
        alt="Hero"
      /> */}
    </div>
  );
}