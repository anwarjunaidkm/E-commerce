import React from "react";
import women from "../asset/women2.jpg";

function Quotes() {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-screen justify-center overflow-y-auto">
        <div className="grid md:grid-cols-2 bg-[#faeeef] h-[80%]">
          <div className="flex">
            <div className="hidden md:block">
              <div className="w-9 h-9 bg-white"></div>
              <div className="w-9 h-9 bg-white ml-9"></div>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="w-96">
                <img src={women} className="" />
                {/* <div className="hidden md:block top-20 left-[80%] float-right">
                <div className="w-9 h-9 bg-[#faf2f0]"></div>
                <div className="w-16 h-16 bg-[#faf2f0] ml-9"></div>
              </div> */}
              </div>
            </div>
            
          </div>
          <div className="flex flex-col justify-center relative">
          <div className="hidden md:block absolute top-20 left-[80%] float-right">
                <div className="w-9 h-9 bg-[#faf2f0]"></div>
                <div className="w-16 h-16 bg-[#faf2f0] ml-9"></div>
              </div>
            <div className="flex justify-between w-[70%]">
              <h3 className="text-2xl font-architecture"> True Story</h3>
              <h3 className="text-sm font-maven">01/03</h3>
            </div>
            <p className="font-bold mt-7 font-poppins w-[75%]">
              This can include the products or services you are offering, how
              you came into being as a business, your mission and vision, your
              aim, and maybe something about your future goals too.
            </p>
            <h3 className="text-4xl mt-10 font-architecture">Julia Crawfall</h3>
            <div className="hidden md:block absolute bottom-0 right-0">
              <div className="w-9 h-9 bg-white"></div>
              <div className="w-9 h-9 bg-white ml-9"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
