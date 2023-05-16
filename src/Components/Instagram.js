import React from "react";
import pot from "../asset/pot-removebg-preview.png";
import table from "../asset/tea-table2-removebg-preview.png";
import chair from "../asset/chair.png"

function Instagram() {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-screen justify-center ">
        <div className="hidden sm:flex justify-evenly">
          <div className="bg-[#f3f3f3] flex justify-around relative">
            <img src={table} className="h-52 w-40 " />
            <img
              src={chair}
              className="bg-[#f3f3f3] h-52 w-40 absolute top-36 left-28"
            />
          </div>
          <div>
            <h6 className="font-architecture text-7xl text-center mb-10">
              INSTAGRAM
            </h6>
            <h4 className="text-center text-2xl font-bold">#brisa</h4>
          </div>
          <div className="bg-[#f3f3f3] flex justify-around relative">
            <img src={table} className="h-52 w-40" />
            <img
              src={pot}
              className="bg-[#f3f3f3] h-52 w-40 absolute top-36 right-28"
            />
          </div>
        </div>

        <div className="sm:hidden flex justify-center">
          <h6 className="font-architecture text-4xl text-center mb-3">
            INSTAGRAM
          </h6>
          {/* <h4 className="text-center text-2xl font-bold">#brisa</h4> */}
        </div>

        <div className="flex justify-center mb-6">
          <img src={table} className="h-52 w-40 bg-[#ede9e5]" />
        </div>

        <div className="sm:hidden flex justify-evenly mb-6 ml-5">
          <img src={chair} className="h-52 w-40 bg-[#f3f3f3]" />
          <img src={pot} className="h-52 w-40 bg-[#f3f3f3]" />
        </div>
        <div className="sm:hidden flex justify-center mb-6">
          <img src={table} className="h-52 w-40 bg-[#ede9e5]" />
        </div>
      </div>
    </div>
  );
}

export default Instagram;
