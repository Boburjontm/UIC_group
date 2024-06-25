import React from "react";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Slider from "../../src/components/SliderIcon";

const Portfolio = () => {
  return (
    <div className="bg-[#1e1e20] pt-[140px]">
      <div className="max-w-[1200px] flex  pb-[100px] flex-col gap-7 mx-auto px-5">
        <h3 className="bg-[#1E1E20] font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]">
          Portfolio
        </h3>
        <div className="flex flex-wrap gap-5">
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Branding
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Mobile app
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            CRM
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Website
          </button>
        </div>

        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
      </div>
      <div className="bg-[#141415] py-[80px]">
        <Slider />
      </div>
    </div>
  );
};

export default Portfolio;
