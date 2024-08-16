import Image from "next/image";

export default function Collection() {
  return (
    <div className="h-full py-10 bg-gradient-to-b from-black to-[#A8ACB7] text-white flex flex-col items-center">
      <p className="text-white mt-6">HUGE COLLECTION</p>
      <h2 className="text-white mt-3 text-4xl font-bold">AI-Powered Design</h2>
      <div className=" w-[90%] md:w-[70%] mx-auto gap-4 flex flex-col md:flex-row justify-center md:items-baseline items-center mt-10 sm:pb-0 pb-14">
        <div className="h-60 w-52 rounded-md bg-black flex flex-col justify-around  items-center sm:flex-nowrap flex-wrap hover:border-[0.5px] border-gray-400 cursor-pointer transition-all">
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
        <div className="h-60 w-52 rounded-md bg-black flex flex-col justify-around items-center hover:border-[0.5px] border-gray-400 cursor-pointer transition-all">
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
        <div className="h-60 w-52 rounded-md bg-black flex flex-col justify-around items-center hover:border-[0.5px] border-gray-400 cursor-pointer transition-all">
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
        <div className="h-60 w-52 rounded-md bg-black flex flex-col justify-around items-center hover:border-[0.5px] border-gray-400 cursor-pointer transition-all">
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
