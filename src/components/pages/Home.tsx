import { IconCloudDemo } from "../iconcardglobe";
import { Hero } from "../Hero";
import { Card, CardDemo } from "../ui/card";
import { Service } from "./Service";
import { IconCloudDesign } from "../iconcarddesign";
import { IconArrowAutofitUp, IconArrowUpRight } from "@tabler/icons-react";

export const Home = () => {
  return (
    <div>
      <Hero />
      {/* Service */}
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex  gap-3 items-center">
            <span className="text-orange-400 bg-neutral-900 text-[16px] font-semibold rounded-full px-4 py-1">
              SERVICE
            </span>

            <div className="text-white font-sans-serif  text-[40px] ">
              What we are offering
            </div>
          </div>
          <button className="bg-orange-400 text-black rounded-2xl text-base p-1.5 w-[160px] flex items-center font-semibold">
            View All Services
            <IconArrowUpRight/>
          </button>
        </div>
        <div className="flex mt-9">
          <IconCloudDesign/>
          <IconCloudDemo/>
        </div>
      </div>
    </div>
  );
};
