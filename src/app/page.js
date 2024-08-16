import Image from "next/image";
import "./components/Hero";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Collection from "./components/Collection";
import Technologies from "./components/Technologies";
import Innovations from "./components/Innovation";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Collection />
      <Technologies />
      <Innovations />
      <Vision/>
    </main>
  );
}
