import React from "react";
import image from "../asset/tableWithChair.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import Header from "./Header";
import SimilarProduct from "./SimilarProduct";
import RecentViewed from "./RecentViewed";

function ProductSingle() {
  return (
    <div className=" h-screen w-full  bg-[#ffffff] text-black ">
      <Header />
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-screen justify-center overflow-y-auto">
        <div className="grid md:grid-cols-2  h-[80%]">
          <div className="bg-[#fbf6f2] flex flex-col justify-center items-center">
            <h3 className="flex-none self-start sm:ml-24 mt-8 ml-10 mb-3 font-poppins font-bold text-4xl">
              Chair with Table
            </h3>
            <h3 className="flex-none self-start ml-24 mb-8 font-poppins">
              Living room
            </h3>
            <img src={image} className="" />
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex flex-col justify-center sm:ml-24 ml-10 px-5 py-5">
              <h5 className="font-maven text-2xl font-bold">Details</h5>
              <p className="mt-5 w-[90%]">
                Providing style conscious customers with innovative shoes to
                suit every occasion. We pride ourselves on our unique product
                range
              </p>
              <h2 className="text-4xl font-bold font-maven my-10 sm:mt-10">
                <span
                  className="text-xl mr-1 font-thin"
                  style={{ position: "relative", top: "-0.6em" }}
                >
                  $
                </span>
                96.67
              </h2>
            </div>

            <div class="border border-solid border-gray-150"></div>

            <div className="flex flex-col justify-center sm:ml-24 mx-2">
              <div className="flex flex-row justify-between sm:ml-0 ml-10 px-5 py-5">
                <div>
                  <h5 className="font-maven text-2xl font-bold">Colours</h5>
                  <div className="flex mt-5">
                    <div className="w-7 h-7 bg-[#f9e7ce] mr-4"></div>
                    <div className="w-7 h-7 bg-[#dcf1f2]"></div>
                  </div>
                </div>

                <div>
                  <h5 className="font-maven text-2xl font-bold">Quantity</h5>
                  <div className="flex mt-5">
                    <div className="w-7 h-7 border-2 border-slate-950 p-1">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex justify-evenly grid sm:grid-cols-2">
                <button className="bg-white-500 border-2 hover:border-black hover:ease-out duration-300 w-40 text-black font-bold mt-16 sm:mt-5 py-2 px-4 rounded">
                  Add to List
                </button>
                <button className="bg-black border-2 hover:border-black hover:ease-out duration-300 w-40 text-white font-bold mt-5 py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <SimilarProduct/>
      <RecentViewed/>
      <Footer />
    </div>
  );
}

export default ProductSingle;
