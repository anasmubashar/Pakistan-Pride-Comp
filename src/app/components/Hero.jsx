import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[60vh]  bg-[url('/Light.png')] text-white relative overflow-hidden">
      <img
        className="absolute z-[1] w-full h-full object-contain"
        src="/Line.png"
        alt="line"
      />
      <img
        className="absolute z-[10] bottom-0 left-[20%] w-[20%] h-[20%] object-contain"
        src="/building1.png"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-0 left-[40%] w-[20%] h-[20%] object-contain"
        src="/building2.png"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-0 left-[60%] w-[20%] h-[20%] object-contain"
        src="/building3.png"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-28 right-0 w-[15%]  object-contain"
        src="/building4.png"
        alt="building"
      />
      <img
        className="absolute z-[10] bottom-28 left-0 w-[12%]  object-contain"
        src="/building5.png"
        alt="building"
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
      <p className="mx-auto text-center w-[40%] text-[rgba(255, 255, 255, 0.70)] mt-7 leading-6 mb-8">
        Discover the cutting-edge technologies, visionary entrepreneurs, and
        future projects that are propelling Pakistan towards a brighter
        tomorrow.
      </p>

      <div className="flex gap-4 justify-center  mt-4">
        <button className="h-8 font-semibold text-sm w-40 rounded-full bg-[#009F30]">
          Explore Innovations
        </button>
        <button className="h-8 text-[14px] w-[12.3rem] border-[0.656px] font-semibold border-[rgba(255, 255, 255, 0.20)] gap-1 rounded-full flex justify-center items-center">
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
