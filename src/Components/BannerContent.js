import React from "react";
import { BsArrowRight } from "react-icons/bs";

function BannerContent() {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col h-screen justify-center">
        <h6 className="font-architecture text-7xl text-center mb-5">What We Do</h6>
        <div className="w-[50%] mx-auto">
          <p className="font-maven font-semibold text-center text-slate-400">
            Brisa is a leading edge fashion footwear specialist, providing style
            conscious customers with innovative shoes to suit every occasion. We
            pride ourselves on our unique product range - created by our
            in-house design team and global brand partnerships, all of which are
            recognisable by their individuality, design and quality.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="text-[#ffffff] border-2 px-6 py-3 my-3 flex items-center bg-black border-black hover:bg-black hover:border-black hover:ease-out duration-300">
            Learn More
            <span className="hover:rotate-90 duration-300">
              <BsArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerContent;
