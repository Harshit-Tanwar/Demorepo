import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className="text-5xl px-16 pb-20">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products,explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full py-5 border-t-[2px] border-[#9ca96b]">
        <div className="flex px-16 pb-[5vw]">
        <div className="w-1/2 ">
          What you can expect:
        </div>
        <div className="w-1/4">
          <p className="pb-8">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating
          </p>
        </div>
        </div>
      </div>
      <div className="w-full flex gap-10 px-16 border-t-[2px] border-[#9ca96b]">
        <div className="w-1/2  py-5">
        <h1 className="text-5xl tracking-tight">Our approach:</h1>
        <button className="flex gap-10 items-center bg-zinc-900 px-10 py-5 rounded-full text-white mt-5">Read More
          <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
        </button>
        </div>
        <div className="w-1/2 h-[70vh] mt-5 bg-[#9ca96b] rounded-3xl overflow-hidden">
         <img className="w-full h-full  object-cover object-center " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default About;
