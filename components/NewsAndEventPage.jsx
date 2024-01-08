import React from "react";
import HeaderBanner from "./common/HeaderBanner";
import Image from "next/image";
import {
  AdminIcon,
  ClockIcon,
  CommentIcon,
  DotIcon,
  LeftArrowIcon,
  RightArrowIcon,
  RightArrowIcon2,
} from "./common/Icon";
import Dropdown from "./common/Dropdown";
import { cardData } from "./common/Helper";
import Link from "next/link";

const NewsAndEventPage = () => {
  return (
    <div>
      <HeaderBanner heading="News & Event" />

      <div className="bg-[#F2F2F2]">
        <div className="max-w-[1152px] w-full mx-auto bg-white pt-[25px] sm:pt-[50px] pb-[33px] px-[16px] ">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[50px] max-w-[1052px] w-full mx-auto">
            <div>
              {" "}
              <div className="max-w-[652px] w-full relative flex items-end">
                <Image
                  src="/img/News-1st-img.png"
                  width={652}
                  height={600}
                  alt="news"
                />
                <div className=" absolute bottom-0 p-[10px_20px] bg-[rgba(0,0,0,0.50)] max-w-[652px] w-full ">
                  <h1 className=" font-poppins font-bold text-white text-[12px] sm:text-[20px] leading-[18px] sm:leading-[30px] uppercase">
                    The School end of The session party
                  </h1>
                  <p className="pt-[5px] sm:pt-[10px] font-poppins font-normal text-white text-[10px] sm:text-[16px] leading-[18px] sm:leading-[25px] ">
                    Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                    eiusmod temp incit ut labore.
                  </p>
                </div>
              </div>
              <div className="max-w-[652px] w-full">
                <p className=" font-poppins font-bold text-[16px] text-[#80C4D3] leading-[24px] uppercase pt-[20px]">
                  Recent Event
                </p>
                <div className="flex flex-wrap gap-[20px]  md:gap-[50px] mt-[10px]">
                  <div className="flex  gap-[10px] items-center ">
                    <AdminIcon />
                    <p className=" font-poppins font-semibold text-[20px] leading-[25px] text-center text-black">
                      Admin
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <ClockIcon />
                    <p className=" font-poppins font-semibold text-[20px] leading-[25px] text-center text-black">
                      September 10, 2021
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <CommentIcon />
                    <p className=" font-poppins font-semibold text-[20px] leading-[25px] text-center text-black">
                      No Comment
                    </p>
                  </div>
                </div>
                <p className=" font-poppins font-normal text-[14px] sm:text-[20px] leading-[22px] sm:leading-[34px] text-black  mt-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                  eiusmod temp incit ut labore dolore magnaaliqua. computer
                  science students Ut enim ad minimveniam. Lorem ipsum.
                </p>
                <Link
                  href="/news/07"
                  className=" bg-[#80C4D3] inline-flex items-center gap-3 sm:gap-5 p-[10px_20px] sm:p-[20px_30px] mt-[30px] font-poppins font-normal text-[20px] text-white leading-[21px] tracking-[-0.4px] rounded-[5px] group hover:bg-white hover:text-[#80C4D3] border border-[#80C4D3] duration-300"
                >
                  Read more{" "}
                  <span>
                    <RightArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex max-w-[350px] w-full flex-col gap-2">
                <div className="relative flex items-end">
                  <Image
                    src="/img/News-2nd-img.png"
                    width={350}
                    height={240}
                    alt="news"
                  />
                  <div className="bg-[rgba(0,0,0,0.50)] max-w-[350px] w-full p-[15px_0px_15px_10px] absolute bottom-0">
                    <p className=" font-poppins font-semibold text-[16px] sm:text-[20px] text-white capitalize leading-[22px] sm:leading-[30px]">
                      Lorem Ipsum dolor Sit amet.
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-poppins font-bold text-[16px] text-[#80C4D3] uppercase leading-[24px] sm:pt-[10px]">
                    Top story
                  </p>
                  <p className=" font-poppins font-normal text-[14px] sm:text-[20px] leading-[24px] sm:leading-[34px] pt-[10px] ">
                    Lorem ipsum dolor sit amet, consectetur temp incit ut labore
                    dolore mor magnaaliq uaadiping elit sed.
                  </p>
                  <Link
                    href="/news/07"
                    className="  mt-[10px] font-poppins font-semibold uppercase text-[16px] text-[rgba(255,0,0,0.80)] leading-[24px]"
                  >
                    Readmore <span>&gt; &gt; &gt;</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-w-[350px] w-full mt-[20px] sm:mt-[47px]">
                <div className=" relative flex items-end">
                  <Image
                    src="/img/News-3rd-img.png"
                    width={350}
                    height={240}
                    alt="news"
                  />
                  <div className="bg-[rgba(0,0,0,0.50)] max-w-[350px] w-full p-[15px_0px_15px_10px] absolute bottom-0">
                    <p className=" font-poppins font-semibold text-[16px] sm:text-[20px] text-white capitalize leading-[22px] sm:leading-[30px]">
                      Lorem Ipsum dolor Sit amet.
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" font-poppins font-bold text-[16px] text-[#80C4D3] uppercase leading-[24px] sm:pt-[10px]">
                    Top story
                  </p>
                  <p className=" font-poppins font-normal text-[14px] sm:text-[20px]  leading-[24px] sm:leading-[34px] pt-[10px] ">
                    Lorem ipsum dolor sit amet, consectetur adiping elit, sed
                  </p>
                  <Link
                    href="/news/07"
                    className="  mt-[10px] font-poppins font-semibold uppercase text-[16px] text-[rgba(255,0,0,0.80)] leading-[24px]"
                  >
                    Readmore <span>&gt; &gt; &gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1152px] w-full mx-auto bg-[#F2F2F2] p-[20px_16px_25px_16px] md:p-[30px_50px_50px_50px]">
          <div className="flex items-center max-md:justify-center gap-[10px] ">
            <DotIcon />
            <p className=" font-poppins font-medium text-[20px] sm:text-[30px] uppercase text-[#80C4D3] leading-[30px] sm:leading-[45px]">
              LatesT News & Event
            </p>
            <DotIcon />
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-[30px] sm:gap-y-[54px] justify-center md:justify-between pt-[20px] sm:pt-[50px]">
            {cardData.map((item, index) => (
              <div className="w-[300px]" key={index}>
                <Image
                  src={item.img}
                  width={300}
                  height={237}
                  style={{ height: item.height }}
                  alt="img"
                />
                <p className=" font-poppins font-normal text-[16px] sm:text-[20px] text-black leading-[24px] sm:leading-[32px] pt-[15px] sm:pt-[20px] ">
                  {item.decs}
                </p>
                <p className=" font-poppins font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] text-black pt-[15px] sm:pt-[20px]">
                  {" "}
                  {item.date}
                </p>
                <div className="flex items-center justify-between pt-[15px] sm:pt-[20px]">
                  <div className="flex gap-[10px] items-center">
                    <CommentIcon />
                    <p className=" font-poppins font-medium text-[16px] sm:text-[30px] text-black ">
                      {item.comment}
                    </p>
                  </div>
                  <Link
                    href="/news/07"
                    className="  font-poppins font-normal  text-[12px] text-[rgba(255,0,0,0.80)] leading-[21px]"
                  >
                    Readmore <span>&gt; &gt; &gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-wrap gap-[20px] justify-center sm:justify-between pt-[30px] sm:pt-[71px]">
            <div className="flex gap-[1px]">
              <button className="w-[80px] h-[61px] bg-[#80C4D3] flex items-center justify-center gap-[10px] font-poppins font-medium text-[14px] text-white leading-[21px] border border-[#80C4D3] group hover:bg-white hover:text-[#80C4D3] duration-300 rounded-l-[5px]">
                <span>
                  <LeftArrowIcon />
                </span>{" "}
                Prev
              </button>
              <button className="w-[80px] h-[61px] bg-[#80C4D3] flex items-center justify-center gap-[10px] font-poppins font-medium text-[14px] text-white leading-[21px] border border-[#80C4D3] group hover:bg-white hover:text-[#80C4D3] duration-300 rounded-r-[5px]">
                {" "}
                Next
                <span>
                  <RightArrowIcon2 />
                </span>
              </button>
            </div>
            <div className="flex gap-[1px]">
              <button className="w-[75px] h-[61px] bg-[#80C4D3]  font-poppins font-medium text-[14px] text-white leading-[21px] border border-[#80C4D3] group hover:bg-white hover:text-[#80C4D3] duration-300 rounded-l-[5px]">
                Page
              </button>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventPage;
