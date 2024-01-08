import React from "react";
import {
  Facebookicon,
  Instaicon,
  Telegramicon,
  Twittericon,
  Whatsappicon,
} from "./icon";

function Footer() {
  return (
    <>
      <div className='bg-[url("/img/footer-bg.png")] bg-no-repeat bg-center bg-cover px-3 mx-auto'>
        <div className="max-w-[706px] w-full mx-auto pb-5">
          <p className="text-[#80C4D3] text-center font-poppins lg:text-[30px] text-[18px] sm:text-[25px] not-italic font-normal lg:font-medium pt-[60px] lg:pt-[65px] leading-[30px] md:leading-[40px]">
            JOIN OUR NEWSLETTER{" "}
          </p>
          <p className="text-[#80C4D3] text-center font-poppins lg:text-[30px] text-[18px] sm:text-[25px] not-italic font-normal lg:font-medium leading-[30px] md:leading-[40px]">
            AND BE THE FIRST TO KNOW!
          </p>
        </div>

        <form>
          <input
            type="email"
            className="max-w-[900px] flex items-center w-full mx-auto bg-[#FFF] border-[2px] border-[#80C4D3] rounded-[5px] py-1 sm:py-3 md:py-5 px-2 md:px-4 outline-none placeholder:text-[#000] placeholder:font-poppins placeholder:text-[12px] md:placeholder:text-[20px]
            font-light sm:font-normal"
            placeholder="Enter your email to recieve our newsletter"
          />

          <div className="flex justify-center mt-[10px] pb-[64px]">
            <button
              type="Submit"
              className=" w-[100px] md:w-[129px] h-[36px] sm:h-[40px] md:h-[61px] text-white hover:text-[#80C4D3] hover:bg-transparent border-[2px] border-[#80C4D3] duration-300 bg-[#80C4D3] rounded-[5px] font-poppins text-[20px] not-italic font-normal leading-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#80C4D3] py-[50px] lg:px-3 px-3">
        {/* logo */}
        <p className="text-[#fff] text-center font-poppins text-[25px] pb-[40px] font-semibold">
          Logo
        </p>

        {/* line */}
        <div className="max-w-[1052px] w-full mx-auto bg-white stroke-2 h-[1px]"></div>

        {/*text-- links */}
        <div className="max-w-[935px] mt-[50px]  w-full mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center gap-6 lg:gap-4">
            <a href="">
              <li className="text-white  font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Home
              </li>
            </a>
            <a href="">
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                About us
              </li>
            </a>
            <a href="">
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Management
              </li>
            </a>
            <a href="">
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                News & Event
              </li>
            </a>
            <a href="">
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Gallery
              </li>
            </a>
            <a href="">
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Contact us
              </li>
            </a>
          </ul>
        </div>

        {/* logo--links */}
        <div className="max-w-[280px] w-full flex justify-between mt-10 mx-auto">
          <a href="">
            <Facebookicon />
          </a>
          <a href="">
            <Twittericon />
          </a>
          <a href="">
            <Instaicon />
          </a>
          <a href="">
            <Whatsappicon />
          </a>
          <a href="">
            <Telegramicon />
          </a>
        </div>

        {/* copyright */}
        <p className="text-white font-poppins font-medium leading-5 text-center pt-9">
          Copyright © 2021. All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
