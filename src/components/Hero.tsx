import { Cover } from "./ui/cover";

export function Hero() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-t from-orange-500 to-black">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
        <span className="bg-orange-400 text-black font-bold rotate-[4deg] inline-block rounded-sm">
          Build 
        </span>
        &nbsp;
        <span className="text-white">
         amazing products
        </span>  <br /> at <Cover>rocket speed</Cover>
      </h1>
      <p className="text-white text-center">
        We believe in combining innovative design, sustainable practices, and{" "}
        <br /> exceptional craftsmanship to bring your vision to life.
      </p>
    </div>
  );
}
