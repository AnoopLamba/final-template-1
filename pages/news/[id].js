import HeaderBanner from "@/components/common/HeaderBanner";
import { reply } from "@/components/common/Helper";
import {
  AdminIcon,
  ClockIcon,
  CommentIcon,
  DotIcon,
  LeftArrowIcon,
} from "@/components/common/Icon";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowNews = () => {
  return (
    <Layout>
      <HeaderBanner heading="News & Event" />

      {/* main */}
      <div className="px-3 md:px-[50px] pb-[50px] max-w-[1152px] mx-auto">
        <Link
          href="/news"
          type="submit"
          className="bg-[#80C4D3] inline-flex items-center justify-center gap-3 sm:gap-5 p-[10px_20px] sm:p-[20px_30px] mt-[30px] font-poppins font-normal text-[20px] text-white leading-[21px] tracking-[-0.4px] rounded-[5px] hover:bg-white group hover:text-[#80c4D3] duration-300 border border-[#80c4D3]"
        >
          <LeftArrowIcon />
          Back
        </Link>
        <div className="mt-5 max-w-[1052px] w-full lg:h-[600px] relative flex items-end">
          <Image
            src="/img/news-center.png"
            alt="img"
            width={1052}
            height={600}
          />
          <div className="absolute bottom-0 left-0 bg-black opacity-50 w-full h-[50px] md:h-[75px] flex items-center px-[10px]">
            <p className="text-white font-poppins font-bold text-[16px] md:text-[30px] leading-6 md:leading-[38px] uppercase">
              The School end of The session party
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <div>
            <p className="text-[#22343D] font-poppins text-[16px] font-bold leading-6 uppercase">
              TOP EVENT
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-[50px] items-center text-black font-poppins text-[20px] font-semibold leading-8">
            <div className="flex items-center gap-[10px]">
              <AdminIcon />
              <p className="">Admin</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <ClockIcon />
              <p className="">September 10, 2021</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <CommentIcon />
              <p className="">No Comment</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-black font-poppins text-[20px] font-normal leading-10">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magnaaliqua. computer science
              students Arcu dapibus praesent est nunc bibendum ridiculus tellus.
              Aliquet rutrum mauris augue ac. Fringilla at suspendisse netus
              rhoncus nam curabitur.Iaculis laoreet penatibus aliquam penatibus
              ac id ut tortor massa. At vestibulum mattis velit placerat mattis
              blandit diam. Morbi lectus risus curabitur ante nam.Ultricies.
            </p>
            <p className="text-black font-poppins text-[20px] font-normal leading-10 indent-12">
              Ut enim ad minimveniam. Arcu dapibus praesent est nunc bibendum
              ridiculus tellus. Aliquet rutrum mauris augue ac. Fringilla at
              suspendisse netus rhoncus nam curabitur.Iaculis laoreet penatibus
              aliquam penatibus ac id ut tortor massa. At vestibulum mattis
              velit placerat mattis blandit diam. Morbi lectus risus curabitur
              ante nam.Ultricies.Arcu dapibus praesent est nunc bibendum
              ridiculus tellus. Aliquet rutrum mauris augue ac. Fringilla at
              suspendisse netus rhoncus nam curabitur.Iaculis laoreet penatibus
              aliquam penatibus ac id ut tortor massa. At vestibulum mattis
              velit placerat mattis blandit diam. Morbi lectus risus curabitur
              ante nam.Ultricies.
            </p>
          </div>
        </div>

        {/* leave a reply */}
        <div className="mt-[30px]">
          <div className="flex gap-3 items-center">
            <DotIcon />
            <p className="text-[#80C4D3] font-poppins text-[26px] font-medium leading-8 capitalize">
              Leave a reply
            </p>
            <DotIcon />
          </div>
          <div className="mt-[10px]">
            <p className="text-black font-poppins text-[20px] leading-7 font-normal">
              Your email address will not be published.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-[30px] w-full">
            {reply.map((item, index) => (
              <input
                key={index}
                type={item.type}
                className="bg-[#EDEDED] w-full rounded-[5px] p-3 sm:p-5 outline-none text-[rgba(0,0,0,0.50)] font-poppins text-[20px] font-normal leading-10 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px] placeholder:font-normal placeholder:leading-10"
                placeholder={item.placeholder}
              />
            ))}
            <textarea
              className="h-[300px] resize-none bg-[#EDEDED] w-full rounded-[5px] p-3 sm:p-5 outline-none text-[rgba(0,0,0,0.50)] font-poppins text-[20px] font-normal leading-10 placeholder:text-[rgba(0,0,0,0.50)] placeholder:font-poppins placeholder:text-[20px] placeholder:font-normal placeholder:leading-10"
              placeholder="Comments..."
            ></textarea>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="border border-[#80C4D3] bg-[#80C4D3] text-white rounded-[5px] inline-flex gap-5 items-center justify-center p-[10px_20px] sm:p-[20px_30px] font-poppins text-[20px] leading-[21px] tracking-[-0.4px] hover:bg-white hover:text-[#80C4D3] duration-300"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowNews;
