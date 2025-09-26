import { Cover } from "./ui/cover";

export function Hero() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold mx-auto text-center mt-16 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
        <span className="bg-orange-400 text-black font-bold rotate-[3deg] inline-block rounded-sm">
          Build 
        </span>
        <span className="text-white">
         amazing products
        </span>  <br /> at <Cover>warp speed</Cover>
      </h1>
      <p className="text-white text-center">
        We believe in combining innovative design, sustainable practices, and{" "}
        <br /> exceptional craftsmanship to bring your vision to life.
      </p>
    </div>
  );
}
