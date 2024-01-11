import Link from "next/link";
import React from "react";
import { Arrowicon, FrIcon, IrIcon, TrIcon, WrIcon } from "./common/Icon";
import Image from "next/image";
import { DataFourth, Datasec, Datathird } from "./common/Helper";
import HeaderBanner from "./common/HeaderBanner";

const MangagementPage = () => {
  return (
    <>
      <HeaderBanner heading="Management" />

      {/* Hero */}
      <div className="max-w-[1152px] w-full mx-auto py-[50px] px-[12px]">
        <div className="max-w-[1050px] w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-[30px] text-[#80C4D3] font-poppins font-semibold leading-normal text-transparent-[uppercase]">
              The Founder
            </p>
            <p className="text-[20px] text-black font-poppins font-medium leading-[35px]">
              Ms. LOREM IPSUM
            </p>
            <p className="text-[20px] text-black font-poppins font-normal leading-[35px] max-w-[501px] w-full">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magna aliqua. computer science
              students Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod temp incididunt ut
              labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad
              minim Lorem ipsum eiusmod temp incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div className="flex gap-[25px] mt-[25px]">
              <Link className=" hover:scale-105" href="">
                <FrIcon />{" "}
              </Link>
              <Link className=" hover:scale-105" href="">
                <WrIcon />
              </Link>
              <Link className=" hover:scale-105" href="">
                <IrIcon />
              </Link>
              <Link className=" hover:scale-105" href="">
                <TrIcon />
              </Link>
            </div>
          </div>
          <div>
            <Image
              className="lg:w-[500px] lg:h-[500px]"
              src="/img/Vectorboy.png"
              width={500}
              height={500}
              alt="vector boy"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className=" max-w-[1920px] w-full mx-auto bg-[#F2F2F2] pb-[50px]">
        {/* management */}
        <div>
          <div className="max-w-[1152px] w-full mx-auto text-[#80C4D3] font-poppins font-medium text-2xl sm:text-[30px] flex max-sm:justify-center items-center gap-[10px] leading-normal pt-[50px] px-[12px] md:px-[69px] text-center">
            <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
            Meet our Management
            <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
          </div>
          <div className="mx-auto flex flex-wrap justify-center gap-[90px] px-[12px] mt-[117px] ">
            {Datasec.map((item, index) => (
              <div key={index} className=" relative">
                <Image
                  className="absolute top-[-30%] left-[27%] mx-auto"
                  src={item.img}
                  width={120}
                  height={120}
                  alt="img"
                />
                <p className="text-[#22343D] font-poppins font-semibold text-[22px]  leading-normal text-center mt-[77px]">
                  {item.name}
                </p>
                <p className="text-[#80C4D3] font-poppins font-semibold text-[16px]  leading-[26px] text-center">
                  {item.bio}
                </p>
                {item.logo.map((listt, listindex) => (
                  <div
                    key={listindex}
                    className="flex gap-[20px] mt-[18px] justify-center mx-auto "
                  >
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.facebook}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.whatsapp}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.insta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* staff */}
        <div className="max-w-[1152px] w-full mx-auto">
          <div className=" w-full  pt-[50px] px-[12px] lg:px-[69px]">
            <div className="text-[#80C4D3] font-poppins font-medium text-2xl sm:text-[30px] flex items-center max-sm:justify-center gap-[10px]  leading-normal ">
              <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
              Meet our Staff
              <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
            </div>
          </div>
          <div className="mx-auto flex flex-wrap justify-evenly gap-x-4 gap-y-[90px] px-[12px] mt-[117px] ">
            {Datathird.map((item, index) => (
              <div key={index} className=" relative">
                <Image
                  className="absolute top-[-30%] left-[27%] mx-auto"
                  src={item.img}
                  width={120}
                  height={120}
                  alt="img"
                />
                <p className="text-[#22343D] font-poppins font-semibold text-[22px]  leading-normal text-center mt-[77px]">
                  {item.name}
                </p>
                <p className="text-[#80C4D3] font-poppins font-semibold text-[16px]  leading-[26px] text-center">
                  {item.bio}
                </p>
                {item.logo.map((listt, listindex) => (
                  <div
                    key={listindex}
                    className="flex gap-[20px] mt-[18px] justify-center mx-auto "
                  >
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.facebook}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.whatsapp}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.insta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* non-staff */}
        <div className="max-w-[1152px] w-full mx-auto">
          <div className="text-[#80C4D3] font-poppins font-medium text-2xl sm:text-[30px] pt-[50px] px-[12px] lg:px-[69px] flex items-center max-sm:justify-center gap-[10px] leading-normal ">
            <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
            Meet our NON-Staff
            <div className="w-[9px] h-[9px] rounded-[50px] bg-[#80C4D3]"></div>
          </div>
          <div className="mx-auto flex flex-wrap justify-evenly gap-x-4 gap-y-[90px] px-[12px] mt-[117px] ">
            {DataFourth.map((item, index) => (
              <div key={index} className=" relative">
                <Image
                  className="absolute top-[-30%] left-[27%] mx-auto"
                  src={item.img}
                  width={120}
                  height={120}
                  alt="img"
                />
                <p className="text-[#22343D] font-poppins font-semibold text-[22px]  leading-normal text-center mt-[77px]">
                  {item.name}
                </p>
                <p className="text-[#80C4D3] font-poppins font-semibold text-[16px]  leading-[26px] text-center">
                  {item.bio}
                </p>
                {item.logo.map((listt, listindex) => (
                  <div
                    key={listindex}
                    className="flex gap-[20px] mt-[18px] justify-center mx-auto "
                  >
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.facebook}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.whatsapp}
                      </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110">
                      <Link className=" hover:scale-105" href="">
                        {listt.insta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MangagementPage;
