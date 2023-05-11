import React from "react";
import { BsArrowRight } from "react-icons/bs";
import banner from "../asset/bannerImage2.png";
import bgImg from "../asset/bg3-removebg-preview.png";

const Banner = () => {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-screen justify-center overflow-y-auto">
        <div class="grid md:grid-cols-2 h-screen md:overflow-hidden">
          <div class="flex  bg-[#e1ecf4]">
            <div>
              <div className="w-9 h-9 bg-white"></div>
              <div className="w-9 h-9 bg-white ml-9"></div>
            </div>
            <div class="max-w-md mx-auto px-4 mt-16 items-center justify-center">
              <h1 class="text-l mb-4 font-semibold font-maven">Just Droped</h1>
              <p class="text-7xl mb-1 font-architecture">Feel</p>
              <p class="text-7xl mb-1 font-architecture">Authentic</p>
              <p class="text-7xl mb-8 font-architecture">Peace</p>

              <button className="text-[#ffffff] border-2 px-6 py-3 my-3 flex items-center bg-black border-black hover:bg-black hover:border-black hover:ease-out duration-300">
                Shop Now
                <span className="hover:rotate-90 duration-300">
                  <BsArrowRight className="ml-3" />
                </span>
              </button>
              <div className="float-right mt-16">
                <div className="w-9 h-9 bg-[#e7f1f7]"></div>
                <div className="w-16 h-16 bg-[#e7f1f7] ml-9"></div>
              </div>
            </div>
          </div>

          <div class=" bg-[#f2f6f8]">
            <div class="h-screen relative">
              <div class="flex justify-center items-center">
                <div class="absolute top-20 right-[20%] left-[80%] w-14 h-14 rounded-full bg-[#cde4ee]"></div>
                <div class="absolute w-64 h-64 top-40 right-[25%] left-[30%] rounded-full bg-[#f2f6f8] border-2 border-[#cde4ee]"></div>
                <div class="absolute top-40 right-[21%] left-[20%] w-72 h-72 rounded-full bg-[#cde4ee]"></div>
              </div>
              <div class="flex justify-center items-center">
                <img src={bgImg} className="absolute  top-14" />
              </div>
            </div>
            <div className="float-right">
              <div className="w-9 h-9 bg-white"></div>
              <div className="w-9 h-9 bg-white ml-9"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
