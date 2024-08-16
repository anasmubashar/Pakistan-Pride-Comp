import Image from "next/image";

export default function Technologies() {
  return (
    <div className="min-h-[100vh] bg-[url('/Light4.png')] text-white flex flex-col items-center pt-10 pb-20">
      <h2 className="text-white mt-3 text-4xl font-bold">AI-Powered Design</h2>
      <p className="mx-auto text-center mt-3 hidden md:block">
        Highlight recent technological advancements, startups, and projects in
        <br /> AI, fintech, and biotech.
      </p>
      <p className="mx-auto text-center mt-3 px-4 block md:hidden pb-2">
        Highlight recent technological advancements, startups, and projects in AI, fintech, and biotech.
      </p>
      <div class="grid grid-cols-4 grid-rows-3 gap-4 w-[93%] md:w-[80%] h-[70%] mt-4">
        <div class="border border-white rounded-xl bg-[url('/fintech.png')]">
          Fintech
        </div>
        <div class="col-start-2 col-span-2 border border-white rounded-xl bg-[url('/tech.png')] cursor-pointer z-10 hover:scale-110 transition-all">
          02
        </div>
        <div class="border border-white rounded-xl bg-[url('/Biz.png')] cursor-pointer z-10 hover:scale-110 transition-all">
          03
        </div>
        <div class="col-start-1  border border-white rounded-xl bg-[url('/biotech.png')] cursor-pointer z-10 hover:scale-110 transition-all">
          04
        </div>
        <div class="col-start-2 col-span-2 row-start-2 row-span-2 border border-white rounded-xl bg-[url('/iot.png')] cursor-pointer z-14 hover:scale-110 transition-all">
          05
        </div>
        <div class="border cursor-pointer z-10 hover:scale-110 transition-all border-white rounded-xl bg-[url('/ai.png')] h-[200px]">06</div>
        <div class="border border-white rounded-xl bg-[url('/ai2.png')] cursor-pointer z-10 hover:scale-110 transition-all">
          07
        </div>
        <div class="border border-white rounded-xl bg-[url('/earth.png')] cursor-pointer z-10 hover:scale-110 transition-all">
          08
        </div>
      </div>
    </div>
  );
}
