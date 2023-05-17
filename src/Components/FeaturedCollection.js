import React from 'react'
import chair from '../asset/chair.png'
import ttable from '../asset/tea-table2-removebg-preview.png'

function FeaturedCollection() {
  return (
    <div className="  w-full h-screen bg-[#fffff]  text-black flex justify-center  text-[13px] font-poppins">
         <div className="max-w-[1200px] h-[80vh] mx-auto    bg-[#E1ECF4]  py-8 relative  w-full   ">
         <div className='hidden md:block w-9 h-9 bg-white  absolute top-0'></div>
          <div className='hidden md:block w-9 h-9 bg-white absolute top-9 left-9 '></div>
          <div className='hidden md:block w-9 h-9 bg-white absolute bottom-0 right-0 '></div>
          <div className='hidden md:block w-9 h-9 bg-white absolute bottom-9 right-9 '></div>
           <h1 className="font-architecture text-7xl text-center">  Featured collection </h1>
        <div class="grid md:grid-cols-4 grid-cols-2 px-3 gap-4 p my-4 content-around lg:content-center ">
          <div className="flex flex-col  ">
            <div class="bg-[#f3f3f3] flex justify-around ">
              <img src={chair} className="h-52 w-56" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>

          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={ttable} className="h-52 w-40" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={ttable} className="h-52 w-40" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
          <div className="flex flex-col">
            <div class="bg-[#f3f3f3] flex justify-around">
              <img src={chair} className="h-52 w-56" />
            </div>
            <p className="text-center pt-3 text-lg font-bold">
              Pot with handle
            </p>
            <p className="text-center pt-3">$1200</p>
          </div>
         
               
                
           </div>
           
            
         </div>

    </div>
  )
}

export default FeaturedCollection