import React from "react";
import { GiCardExchange } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

function Iconbar() {
  return (
    <div className=" h-[40%] w-full  bg-[#ffffff] text-black ">
      <div className=" mx-auto flex flex-col h-[95%] justify-center  bg-[#fbfbfa]">
        <div className="flex justify-around">
          <GiCardExchange className="w-16 h-16" />
          <FaHandHoldingHeart className="w-16 h-16" />
          <MdVerified className="w-16 h-16" />
        </div>

        <div className="flex justify-around mt-5 font-maven font-extrabold">
          <p>EASY EXCHANGE</p>
          <p>100% HANDPICKED</p>
          <p>ASSURED QUALITY</p>
        </div>
      </div>
    </div>
  );
}

export default Iconbar;
