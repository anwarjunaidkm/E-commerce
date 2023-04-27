import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaTimes,
  FaBars
} from "react-icons/fa";import { Link } from "react-scroll";

const Header = () => {

  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div
      name="skills"
      className=" h-[80px] w-full  bg-[#ffffff] text-black font-normal subpixel-antialiased "
    >
      <div className=" max-w-[1200px] mx-auto bg-[#ffffff] flex px-3 justify-between w-full h-full items-center">
        <ul className="hidden md:flex">
          <Link to="home" smooth="true" duration={500}>
            <li>Home</li>
          </Link>
          <li>Pages</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div>logo</div>
        <ul className="hidden md:flex">
          <li>Shops</li>
          <li>Account</li>
          <div>
            <li>
              <CiSearch className="inline" />
            </li>
          </div>
          <div style={{height:"25px",width:"25px", backgroundColor:"#ed5509",borderRadius:"50%"}}></div>
        </ul>

        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"
        }
      >
        
        <li
          className="py-6 text-4x
        "
        >
          Pages
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Shop
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Blog
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Contact
        </li>

        <li
          className="py-6 text-4x
        "
        >
          Account
        </li>
      </ul>

      </div>
    </div>
  );
};

export default Header;

//=====================drop down==================================

{
  /* <li>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto ">Dropdown <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                </div>
            </div>
            </li> */
}
