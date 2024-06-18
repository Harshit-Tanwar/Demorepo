import { animate, motion, useAnimation } from "framer-motion";
import React from "react";

function Feature() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-16 border-b-[2px] border-zinc-800 pb-16">
        <h1 className="text-5xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-16 mt-10 flex">
        <h6 className="flex w-1/2 items-center py-5 ">
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>FYDE
        </h6>
        <h6 className="flex w-1/2 items-center py-5 ml-8 ">
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>VISE
        </h6>
      </div>
      {/*first*/}
      <div className="px-16">
        <div className="cards w-full flex gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="Cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden left-full text-8xl text-bold  tracking-tighter leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68]">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                srcset=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="Cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden right-full text-8xl text-bold tracking-tighter leading-none top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68]">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="px-16 mt-10 flex">
        <h6 className="flex w-1/2 items-center py-5 ">
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>TRAWA
        </h6>
        <h6 className="flex w-1/2 items-center py-5 ml-8 ">
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>PREMIUM
          BLEND
        </h6>
      </div>
      {/* Second*/}
      <div className="px-16">
        <div className="cards w-full flex gap-10">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="Cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden left-full text-8xl text-bold  tracking-tighter leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68]">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
                srcset=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="Cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden right-full text-8xl text-bold tracking-tighter leading-none top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-[#CDEA68]">
                {"PREMIUMBLEND".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
