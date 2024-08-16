import Image from "next/image";

export default function Entrepreneurs() {
  return (
    <div  className="bg-black min-h-[100vh] pt-10 py-10 relative text-white flex flex-col ">
      <Image
        className="absolute top-0 right-0 left-0 mx-auto z-auto"
        width={700}
        height={700}
        src="/Ellipse.png"
        alt="Ellipse"
        layout="intrinsic"
        objectFit="cover"
      />
      <h2 className="text-5xl text-center pt-3">Meet our Entrepreneurs</h2>
      <p className="text-center text-[#878C91] mt-3">
        Discover the inspiring stories of young Pakistani entrepreneurs who{" "}
        <br /> are shaping the future of innovation.
      </p>
      <div style={{position: "absolute", transform: "translate(-50%, -64%)", left: "50%", top: "50%" }} className="flex flex-col max-w-[569px]">
        <Image
          loading="lazy"
           data-aos="zoom-in"
          src="/nabeel.png"
          alt=""
          className="object-contain w-[400px] aspect-[1.94] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-80 transition-all z-10"
        />
      </div>      
      <div  data-aos="zoom-in" className="flex justify-center items-center absolute bottom-0 overflow-hidden w-full">
        <Image
          layout="intrinsic"
          src="/2.png"
          alt="Entrepreneur 1"
          width={300}
          height={300}
        />
        <Image
          layout="intrinsic"
          src="/3.png"
          alt="Entrepreneur 2"
          width={300}
          height={300}
        />
        <Image
          layout="intrinsic"
          src="/4.png"
          alt="Entrepreneur 3"
          width={340}
          height={340}
        />
        <Image
          layout="intrinsic"
          src="/5.png"
          alt="Entrepreneur 4"
          width={300}
          height={300}
        />
        <Image
          layout="intrinsic"
          src="/6.png"
          alt="Entrepreneur 5"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
