import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen  pt-1">
      <div className="textstructure mt-52 px-16">
        {["We created", "eye-opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex overflow-hidden ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1],duration: 1 }}
                  className=" w-[9vw]  h-[4.4vw] top-[1.1vw] relative overflow-hidden"
                >
                  <img
                    className="w-full object-cover h-full rounded-l"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                    srcset=""
                  />
                </motion.div>
              )}
              <h1 className="text-8xl uppercase font-semibold leading-[6vw] tracking-tight">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between item-center px-16 py-5">
        {[
          "For public and private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md tracking-tight font-light leading-none">
            {item}
          </p>
        ))}
        <div className="flex items-center gap-3">
          <div className="px-5 py-1 rounded-full font-light text-sm uppercase border-[1px] border-zinc-500 ">
            Start the Project
          </div>
          <div className="w-8 h-8  border-[1px] text-3xl rounded-full border-zinc-500">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
