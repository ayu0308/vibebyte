import { Hero } from "../Hero";
import { Card, CardDemo } from "../ui/card";
import { Service } from "./Service";

export const Home = () => {
  return (
    <div>
      <Hero />
      {/* Service */}
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex  gap-3 items-center">
            <span className="text-orange-400 bg-neutral-900 text-[12px] font-semibold rounded-full px-2">
              SERVICE
            </span>

            <div className="text-white font-sans-serif  ">
              What we are offering
            </div>
          </div>
          <button className="bg-orange-400 text-white rounded-2xl text-sm p-1.5">
            View All Services
          </button>
        </div>
        <div className="flex mt-9">
          <CardDemo />
          <CardDemo />
        </div>
      </div>
    </div>
  );
};
