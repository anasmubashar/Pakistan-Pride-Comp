import Image from "next/image";
export default function Innovations() {
  return (
    <div className="bg-[url('/Light.png')] h-[60vh] relative">
      <Image
        className="absolute bottom-0 left-0"
        layout="intrinsic"
        width={700}
        height={600}
        src="/vr.png"
        alt="Person in vr"
        objectFit="cover"
      />
    </div>
  );
}
