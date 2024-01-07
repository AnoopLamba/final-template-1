import Image from "next/image";
import React from "react";
import { Doteicon } from "./common/Icon";

function AboutUs() {
  return (
    <>
      <div className="bg-[#FFF]">
        <div className="max-w-[1052px] w-full mx-auto py-[40px] md:py-[52px] px-3">
          <div className="flex gap-[30px] md:gap-[50px] max-lg:flex-col">
            {/* girl-img */}
            <div className="max-w-[300px] md:max-w-[400px] lg:max-w-[501px] w-full mx-auto">
              <Image src="/img/girl.png" width={501} height={500} alt="girls" />
            </div>

            {/* content */}
            <div className="max-w-[501px] w-full mx-auto">
              <div>
                <div className="flex justify-center max-lg:mx-auto items-center max-w-[250px] w-full gap-[12px]">
                  <Doteicon />
                  <p className="text-[#80C4D3] text-center text-[30px] font-poppins not-italic font-[500] uppercase">
                    Who We Are
                  </p>
                  <Doteicon />
                </div>

                <div>
                  <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic pt-[25px] md:pt-[30px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                    eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad
                    minim veniam. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod temp incididunt ut labore
                    dol magna aliqua. Ut enim ad minim Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed eiusmod temp
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam Lorem ipsum dolor sit amet, consectetur adipng
                    elit, sed do eiusmod temp incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF]">
        <div className="max-w-[1052px] w-full mx-auto pb-[40px] md:py-[52px] px-3">
          <div className="flex gap-[30px] md:gap-[50px] max-lg:flex-col">
            <div className="max-w-[501px] w-full mx-auto">
              <div className="flex justify-center max-lg:mx-auto items-center max-w-[250px] w-full gap-[12px]">
                <Doteicon />
                <p className="text-[#80C4D3] text-center text-[30px] font-poppins not-italic font-[500] uppercase">
                  Our mission
                </p>
                <Doteicon />
              </div>

              <div>
                <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic pt-[25px] md:pt-[30px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                  eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad
                  minim veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod temp incididunt ut labore dol
                  magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed eiusmod temp incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam Lorem
                  ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod
                  temp incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="max-w-[501px] w-full mx-auto">
              <div className="flex justify-center max-lg:mx-auto items-center max-w-[250px] w-full gap-[12px]">
                <Doteicon />
                <p className="text-[#80C4D3] text-center text-[30px] font-poppins not-italic font-[500] uppercase">
                  Our Vision
                </p>
                <Doteicon />
              </div>

              <div>
                <p className="text-[#000] leading-[25px] sm:leading-[30px] md:leading-[35px] max-lg:text-center font-poppins text-[16px] sm:text-[18px] md:text-[20px] not-italic pt-[25px] md:pt-[30px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                  eiusmod temp incit ut labore dolore magna aliqua. Ut enim ad
                  minim veniam. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod temp incididunt ut labore dol
                  magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed eiusmod temp incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam Lorem
                  ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod
                  temp incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
