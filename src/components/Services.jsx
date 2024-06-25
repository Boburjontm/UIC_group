import React from "react";
import { ServicesData } from "../data/data.js";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-[#1e1e20] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <motion.span
          whileInView={{ translateY: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="flex gap-3"
        >
          <p className="text-xs md:text-base text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5">
            Our
          </p>
          <div className="w-[30px] h-[2px] bg-[#8f8c8c] mt-[10px]" />
        </motion.span>
        <motion.h3
          whileInView={{ translateY: ["-30px", 0], opacity: [0.9, 1] }}
          transition={{ duration: 1 }}
          className="text-white text-[28px] md:text-5xl pb-3 lg:pb-8 font-bold"
        >
          Services
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px]">
          {ServicesData.map((item, index) => (
            <motion.div
              key={index} // Ensure a unique key for each item
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              className="rounded-xl p-5 md:p-[32px] bg-[#252527]"
            >
              <h3 className="text-white text-[22px] sm:text-[28px] lg:text-[38px] font-bold leading-snug mb-1 sm:mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-sm lg:text-base leading-relaxed line-clamp-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
