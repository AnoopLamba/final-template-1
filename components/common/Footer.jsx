import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Telegramicon,
  TwitterIcon,
  WhatsappIcon,
  WhiteFbIcon,
  WhiteInstaIcon,
  WhiteTwitterIcon,
  WhiteWhatsappIcon,
} from "./Icon";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Join newsletter */}
      <div className='max-w-[1920px] w-full mx-auto bg-[url("/img/footer-bg.png")] bg-no-repeat bg-center bg-cover px-3'>
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
            className="max-w-[900px] flex items-center w-full mx-auto bg-[#FFF] border-[2px] border-[#80C4D3] rounded-[5px] py-1 sm:py-3 md:py-5 px-2 md:px-4 outline-none placeholder:font-poppins placeholder:text-[12px] md:placeholder:text-[20px]
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

      {/* Footer links */}
      <div className="max-w-[1920px] w-full mx-auto bg-[#80C4D3] py-[50px] lg:px-3 px-3 flex flex-col items-center justify-start">
        {/* logo */}
        <Link
          href="/"
          className="hover:scale-105 transition-all ease-in-out duration-100"
        >
          <Image
            className="max-sm:w-[90px]"
            src="/img/Logo-img.png"
            width={120}
            height={60}
            alt="logo"
          />
        </Link>

        {/* line */}
        <div className="max-w-[1052px] w-full mx-auto mt-5 bg-white stroke-2 h-[1px]"></div>

        {/*text links */}
        <div className="max-w-[935px] mt-[50px]  w-full mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center gap-6 lg:gap-4">
            {/* home */}
            <Link
              href="/"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white  font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Home
              </li>
            </Link>

            {/* about */}
            <Link
              href="/about"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                About us
              </li>
            </Link>

            {/* management */}
            <Link
              href="/management"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Management
              </li>
            </Link>

            {/* news */}
            <Link
              href="/news"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                News & Event
              </li>
            </Link>

            {/* gallery */}
            <Link
              href="/gallery"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Gallery
              </li>
            </Link>

            <Link
              href="/contact"
              className="hover:scale-105 transition-all ease-in-out duration-100"
            >
              <li className="text-white font-poppins max-lg:max-w-[141px] w-full lg:text-center mx-auto text-start  text-lg sm:text-[20px] font-medium leading-5">
                Contact us
              </li>
            </Link>
          </ul>
        </div>

        {/* logo--links */}
        <div className="max-w-[280px] w-full flex justify-between mt-10 mx-auto">
          <Link
            href="/"
            className="hover:scale-105 transition-all ease-in-out duration-100"
          >
            <WhiteFbIcon />
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all ease-in-out duration-100"
          >
            <WhiteTwitterIcon />
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all ease-in-out duration-100"
          >
            <WhiteInstaIcon />
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all ease-in-out duration-100"
          >
            <WhiteWhatsappIcon />
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all ease-in-out duration-100"
          >
            <Telegramicon />
          </Link>
        </div>

        {/* copyright */}
        <p className="text-white font-poppins font-medium leading-5 text-center pt-9">
          Copyright © {currentYear}. All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
