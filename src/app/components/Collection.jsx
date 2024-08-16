import Image from "next/image";

export default function Collection() {
  return (
    <div className="h-[45vh] bg-[url('/Light3.png')] text-white flex flex-col items-center">
      <p className="text-white mt-6">HUGE COLLECTION</p>
      <h2 className="text-white mt-3 text-4xl font-bold">AI-Powered Design</h2>
      <div className="h-[55%] w-[60%] flex justify-around mt-10">
        <div className="h-full w-48 bg-black flex flex-col justify-around items-center">
          <Image src="/Col2.png" alt="Collection 1" width={30} height={30} />
          <p className="font-bold">Intelligent</p>
          <p className="text-[#A8ACB7] text-center">
            Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
          </p>
          <Image
            src="/Symbol.png"
            objectFit="contain"
            alt="Symbol"
            width={15}
            height={15}
          />
        </div>
        <div className="h-full w-48 bg-black flex flex-col justify-around items-center">
          <Image src="/Col3.png" alt="Collection 1" width={30} height={30} />
          <p className="font-bold">Intelligent</p>
          <p className="text-[#A8ACB7] text-center">
            Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
          </p>
          <Image
            src="/Symbol.png"
            objectFit="contain"
            alt="Symbol"
            width={15}
            height={15}
          />
        </div>
        <div className="h-full w-48 bg-black flex flex-col justify-around items-center">
          <Image src="/Col4.png" alt="Collection 1" width={30} height={30} />
          <p className="font-bold">Intelligent</p>
          <p className="text-[#A8ACB7] text-center">
            Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
          </p>
          <Image
            src="/Symbol.png"
            objectFit="contain"
            alt="Symbol"
            width={15}
            height={15}
          />
        </div>
        <div className="h-full w-48 bg-black flex flex-col justify-around items-center">
          <Image src="/Col1.png" alt="Collection 1" width={30} height={30} />
          <p className="font-bold">Intelligent</p>
          <p className="text-[#A8ACB7] text-center">
            Adipiscing elit, sed do eiusmod labore dolore magna aliqua.
          </p>
          <Image
            src="/Symbol.png"
            objectFit="contain"
            alt="Symbol"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
}