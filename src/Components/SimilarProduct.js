import React from "react";
import kettle from "../asset/kettle3-removebg-preview.png";
import pot from "../asset/pot-removebg-preview.png";
import table from "../asset/tea-table2-removebg-preview.png";
import clock from "../asset/clock2-removebg-preview.png";

function SimilarProduct() {
  return (
    <div className=" h-[80%] md:h-[70%] w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col h-[90%]">
        <div className="flex flex-row items-center justify-center my-10">
          <div class="border-b-2 border-solid border-gray-150 w-[40%]"></div>
          <h3 className="px-3 font-poppins">Similar Products</h3>
          <div class="border-b-2 border-solid border-gray-150 w-[40%]"></div>
        </div>
        <div class="grid md:grid-cols-4 grid-cols-2 px-3 gap-4 items-center overflow-y-auto">
          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={kettle} className="h-52 w-56" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>

          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={pot} className="h-52 w-40" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={table} className="h-52 w-40" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={clock} className="h-52 w-52" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarProduct;
