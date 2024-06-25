import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="bg-[#141415] py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between py-7 gap-5 md:gap-0">
          <h1 className="font-bold uppercase text-2xl md:text-5xl text-white leading-tight">
            portfolio
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="py-2 px-5 border border-[#434344] rounded-xl text-[#a3a3a3]">
              Branding
            </button>
            <button className="py-2 px-5 border border-[#434344] rounded-xl text-[#a3a3a3]">
              Mobile app
            </button>
            <button className="py-2 px-5 border border-[#434344] rounded-xl text-[#a3a3a3]">
              CRM
            </button>
            <button className="py-2 px-5 border border-[#434344] rounded-xl text-[#a3a3a3]">
              Website
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="relative h-[430px] group rounded-2xl"
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="absolute p-5">
              <h1 className="text-white font-bold text-sm sm:text-base md:text-2xl lg:text-[38px] lg:leading-[45px] mb-1 line-clamp-3 leading-[120%] lg:mb-2">
                Uzbekistan's Club
              </h1>
              <p className="uppercase text-white/60 text-xs font-semibold lg:text-sm sm:leading-5">
                WEBSITE
              </p>
            </span>
            <div className="group-hover:bg-custom-gradient1 rounded-2xl h-full w-full"></div>
            <div className="absolute bottom-5 right-5 text-white flex items-center gap-4 font-semibold transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0">
              <p>VIEW MORE</p>
              <IoIosArrowRoundForward
                size={50}
                className="bg-[#dbdbdb81] rounded-full"
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute p-5">
                <h1 className="text-white font-bold text-sm sm:text-base md:text-2xl lg:text-2xl leading-[120%] lg:leading-[49px] mb-1 line-clamp-3 lg:mb-[6px]">
                  Anatomica
                </h1>
                <p className="uppercase text-white/60 text-xs font-semibold lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </span>
              <div className="group-hover:bg-custom-gradient rounded-2xl h-full w-full"></div>
              <div className="absolute bottom-5 right-5 transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </motion.a>
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute p-5">
                <h1 className="text-white font-bold text-sm sm:text-base md:text-2xl lg:text-2xl leading-[120%] lg:leading-[49px] mb-1 line-clamp-3 lg:mb-[6px]">
                  Anatomica App
                </h1>
                <p className="uppercase text-white/60 text-xs font-semibold lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </span>
              <div className="group-hover:bg-custom-gradient h-full rounded-2xl w-full"></div>
              <div className="absolute bottom-5 right-5 transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </motion.a>
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute p-5">
                <h1 className="text-white font-bold text-sm sm:text-base md:text-2xl lg:text-2xl leading-[120%] lg:leading-[49px] mb-1 line-clamp-3 lg:mb-[6px]">
                  Express24
                </h1>
                <p className="uppercase text-white/60 text-xs font-semibold lg:text-sm sm:leading-5">
                  Mobile app
                </p>
              </span>
              <div className="group-hover:bg-custom-gradient h-full rounded-2xl w-full"></div>
              <div className="absolute bottom-5 right-5 transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </motion.a>
            <motion.a
              whileInView={{ translateX: ["-30px", 0], opacity: [0.9, 1] }}
              transition={{ duration: 1 }}
              href="#"
              className="relative group rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute p-5">
                <h1 className="text-white font-bold text-sm sm:text-base md:text-2xl lg:text-2xl leading-[120%] lg:leading-[49px] mb-1 line-clamp-3 lg:mb-[6px]">
                  Toshkent Parfum
                </h1>
                <p className="uppercase text-white/60 text-xs font-semibold lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </span>
              <div className="group-hover:bg-custom-gradient rounded-2xl h-full w-full"></div>
              <div className="absolute bottom-5 right-5 transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
