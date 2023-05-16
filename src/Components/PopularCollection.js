import React from "react";
import kettle from "../asset/kettle3-removebg-preview.png";
import pot from "../asset/pot-removebg-preview.png";
import table from "../asset/tea-table2-removebg-preview.png";
import clock from "../asset/clock2-removebg-preview.png";
import { Link } from "react-router-dom";

function PopularCollection() {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <div className="max-w-[1200px] mx-auto flex flex-col h-screen overflow-y-auto">
        <h6 className="font-architecture text-7xl text-center mb-10">
          Popular Collection
        </h6>
        <div class="grid md:grid-cols-4 grid-cols-2 px-3 gap-4 items-center">
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
          <div className="flex flex-col">
            <Link to={"/product"}>
              <div class="bg-[#f3f3f3] flex justify-around">
                <img src={table} className="h-52 w-40" />
              </div>
            </Link>
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
              <img src={pot} className="h-52 w-40" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>{" "}
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
        </div>
      </div>
    </div>
  );
}

export default PopularCollection;
