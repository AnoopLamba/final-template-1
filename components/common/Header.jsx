import Image from "next/image";
import React from "react";
import { Arrowicon, Darkbtnicon, Sidebaricon } from "./icon";

function Header() {
  return (
    <>
      <nav className="max-w-[1064px] w-full mx-auto px-3">
        <div className="flex justify-between items-center pt-6 pb-[10px]">
          {/* logo */}
          <div>
            <Image
              className="max-sm:w-[90px]"
              src="/img/Logo-img.png"
              width={130}
              height={65}
              alt="logo"
            />
          </div>

          {/* links */}

          <ul className="flex gap-10 max-lg:hidden ">
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                Home
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                About us
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                Management
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                News & Event
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                Gallery
              </li>
            </a>
            <a href="">
              <li className="text-black font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300">
                Contact us
              </li>
            </a>
          </ul>

          <div className="flex items-center gap-5 sm:gap-10">
            <button>
              <Darkbtnicon />
            </button>

            <button className="lg:hidden">
              <Sidebaricon />
            </button>
          </div>
        </div>

        <div className="bg-[url('/img/Hero-bg.png')] bg-no-repeat bg-center bg-cover pb-5 sm:pb-[38px] md:pb-[48px] pt-5 sm:pt-10 md:pt-[50px] px-5 sm:px-10 md:px-[50px]">
          <p className="text-white font-Roboto text-2xl sm:text-[33px] font-medium ">
            About us
          </p>

          <div className="w-[133px] h-full pt-3 sm:pt-[22px] flex items-center justify-between">
            <p className="text-[rgba(255,255,255,0.60)] font-Roboto text-[16px] font-normal">
              Home
            </p>
            <div className="pt-[5px]">
              <Arrowicon />
            </div>
            <p className="text-white font-Roboto text-[16px] font-medium">
              About us
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
