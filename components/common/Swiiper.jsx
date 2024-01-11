import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { staff } from "./Helper";

export default function Swiiper() {
  return (
    <div className="bg-[#EDEDED] mt-[50px] pb-[40px]">
      <h1 className="text-[rgba(34,52,61,0.70)] px-4 max-sm:text-center max-w-[1050px] w-full mx-auto pt-3 font-poppins text-[30px] font-medium uppercase">
        Meet Our <span className="text-[#80C4D3]">Staff</span>
      </h1>

      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 42,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 52,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 52,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-[50px] pb-[110px] max-w-[410px] sm:max-w-[490px] md:max-w-[776px] lg:max-w-[1050px] w-full mx-auto"
      >
        {staff.map((item, index) => (
          <SwiperSlide key={index} className="max-w-[224px] pb-[70px] w-full">
            <Image
              src={item.img}
              width={120}
              height={120}
              className="mx-auto"
              alt="slide img"
            />
            <p className="text-[#22343D] text-center font-poppins text-[22px] max-md:text-[18px] max-sm:text-[16px] font-semibold pt-[10px]">
              {item.name}
            </p>
            <p className="text-[#80C4D3] text-center text-[16px] font-normal">
              {item.quality}
            </p>
            {item.logos.map((listt, listindex) => (
              <div
                key={listindex}
                className="flex justify-center gap-[20px] mt-[10px] max-lg:mx-auto"
              >
                <div>{listt.facebook}</div>
                <div>{listt.whatsap}</div>
                <div>{listt.insta}</div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
