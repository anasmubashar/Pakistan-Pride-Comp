import Image from "next/image";
export default function Brands() {
  return (
    <div className="h-[18vh] pt-5 bg-[url('/Light1.png')] flex flex-col">
      <p className="text-center text-[#71717A]">Popular brands use buzzle</p>
      <div className="flex gap-28 overflow-hidden h-[25%] my-auto scroll-content">
        <Image
          objectFit="contain"
          src="/Coca Cola.png"
          alt="Brand 1"
          width={200}
          height={200}
        />
        <Image
          objectFit="contain"
          src="/brand1.png"
          alt="Brand 2"
          width={200}
          height={200}
        />
        <Image
          objectFit="contain"
          src="/brand2.png"
          alt="Brand 3"
          width={200}
          height={200}
        />
        <Image
          objectFit="contain"
          src="/brand3.png"
          alt="Brand 4"
          width={200}
          height={200}
        />
        <Image
          objectFit="contain"
          src="/brand4.png"
          alt="Brand 5"
          width={200}
          height={200}
        />
        <Image
          objectFit="contain"
          src="/brand5.png"
          alt="Brand 6"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
