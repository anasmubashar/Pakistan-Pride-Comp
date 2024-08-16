import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-[100vh] bg-[url('/Light.png')] text-white relative overflow-hidden">
      <img
        className="absolute z-[1] w-full h-full object-contain hidden md:block"
        src="/Line.png"
        alt="line"
      />
      <img
        className="absolute z-[10] bottom-0 left-[20%] w-[20%] h-[20%] object-contain hidden md:block"
        src="/building1.png"
        data-aos="fade-down"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-20 left-[40%] w-[20%] h-[20%] object-contain hidden md:block"
        src="/building2.png"
        data-aos="fade-down"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-0 left-[60%] w-[20%] h-[20%] object-contain hidden md:block"
        src="/building3.png"
        data-aos="fade-down"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-28 right-0 w-[15%]  object-contain hidden md:block"
        src="/building4.png"
        data-aos="fade-left"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-28 left-0 w-[12%]  object-contain hidden md:block"
        src="/building5.png"
        data-aos="fade-right"
        alt="building"
      />
      <nav className="flex justify-center">
        <li className="flex gap-2 mt-4 items-center font-light">
          <a className="cursor-pointer hover:opacity-80 transition-all z-10" href="#">Home</a>
          <p className="mb-1 text-lg">.</p>
          <a className="cursor-pointer hover:opacity-80 transition-all z-10" href="#">Tech</a>
          <p className="mb-1 text-lg">.</p>
          <a className="cursor-pointer hover:opacity-80 transition-all z-10" href="#">Entrepreneurs</a>
          <p className="mb-1 text-lg">.</p>
          <a className="cursor-pointer hover:opacity-80 transition-all z-10" href="#">About Us</a>
        </li>
      </nav>
      <h1 className="text-center text-gradient text-6xl mt-24" data-aos="fade-up">
        Shaping the Future
      </h1>
      <p data-aos="fade-up" className="mx-auto text-center w-[90%] md:w-[40%] text-[rgba(255, 255, 255, 0.70)] mt-7 leading-6 mb-8 ">
        Discover the cutting-edge technologies, visionary entrepreneurs, and
        future projects that are propelling Pakistan towards a brighter
        tomorrow.
      </p>

      <div className="flex gap-4 justify-center mt-4">
        <button className="h-8 font-semibold text-sm w-40 rounded-full bg-[#009F30] cursor-pointer hover:opacity-80 transition-all z-10">
          Explore Innovations
        </button>
        <button className="h-8 text-[14px] w-[12.3rem] border-[0.656px] font-semibold border-[rgba(255, 255, 255, 0.20)] gap-1 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-all z-10">
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
