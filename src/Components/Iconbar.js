import React from "react";
import { GiCardExchange } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

function Iconbar() {
  return (
    <div className="h-[40%] w-full bg-[#ffffff] text-black ">
      <div className="max-w-[800px] mx-auto flex flex-col h-[95%] justify-center bg-[#fbfbfa]">
        <div className=" flex justify-around">
          <GiCardExchange className="w-10 h-10" />
          <FaHandHoldingHeart className="w-10 h-10" />
          <MdVerified className="w-10 h-10" />
        </div>
        <div className="flex justify-around text-xs sm:text-lg mt-5  font-maven font-extrabold">
          <p>EASY EXCHANGE</p>
          <p>100% HANDPICKED</p>
          <p>ASSURED QUALITY</p>
        </div>
      </div>
    </div>
  );
}

export default Iconbar;
