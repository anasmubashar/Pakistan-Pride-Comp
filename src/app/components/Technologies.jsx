import Image from "next/image";

export default function Technologies() {
  return (
    <div className="h-[50vh] bg-[url('/Light4.png')] text-white flex flex-col items-center">
      <p className="mx-auto text-center mt-3">
        Highlight recent technological advancements, startups, and projects in
        <br /> AI, fintech, and biotech.
      </p>
      <div class="grid grid-cols-4 grid-rows-3 gap-4 w-[80%] h-[70%] mt-4">
        <div class="border border-white rounded-xl bg-[url('/fintech.png')]">
          Fintech
        </div>
        <div class="col-start-2 col-span-2 border border-white rounded-xl bg-[url('/tech.png')]">
          02
        </div>
        <div class="border border-white rounded-xl bg-[url('/Biz.png')]">
          03
        </div>
        <div class="col-start-1  border border-white rounded-xl bg-[url('/biotech.png')]">
          04
        </div>
        <div class="col-start-2 col-span-2 row-start-2 row-span-2 border border-white rounded-xl bg-[url('/iot.png')]">
          05
        </div>
        <div class="border border-white rounded-xl bg-[url('/ai.png')]">06</div>
        <div class="border border-white rounded-xl bg-[url('/ai2.png')]">
          07
        </div>
        <div class="border border-white rounded-xl bg-[url('/earth.png')]">
          08
        </div>
      </div>
    </div>
  );
}
