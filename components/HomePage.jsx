import Image from "next/image";
import { BtnIcon, SportsIcon } from "./common/Icon";
import { blog, card } from "./common/Helper";
import GalleryImages from "./common/GalleryImages";
import Swiiper from "./common/Swiiper";

const HomePage = () => {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#EDEDED_0%,#FFF_100%)]">
        <div className="max-w-[1152px] w-full mx-auto px-[50px] max-lg:px-4">
          <div className="flex max-md:flex-col items-center xl:items-end justify-between">
            <div className="max-w-[424px] max-md:max-w-[800px] w-full pb-[83px]">
              <h1 className="font-poppins text-[30px] font-semibold max-w-[285px] w-full leading-normal pt-[81px]">
                Lorem Ipsum dolor{" "}
                <span className="font-medium text-[#80C4D3]">sit amet.</span>
              </h1>
              <p className="max-w-[424px] max-md:max-w-[800px] max-md:text-center w-full  font-poppins max-sm:text-[18px] text-[20px] font-normal leading-[32px] pt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <button
                type="submit"
                className="flex max-md:mx-auto hover:bg-white hover:text-black duration-300 group gap-5 max-w-[186px] w-full h-[61px] mt-[30px] bg-[#80C4D3] rounded-[5px] items-center justify-center border-[2px] border-[#80C4D3] text-[20px] text-white"
              >
                <span>More info</span>
                <BtnIcon />
              </button>
            </div>
            <div>
              <Image
                src="/img/socialmedia.png"
                width={513}
                height={357}
                alt="social media"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[rgba(34,52,61,0.80)] max-md:text-center pt-3 max-sm:text-[24px] text-[30px] font-medium uppercase">
              Some Of Our <span className="text-[#80C4D3]">Activies</span>
            </h1>
            <div className="flex max-lg:flex-wrap justify-center mb-[32px] gap-[75px] mt-[50px]">
              {card.map((item, index) => (
                <div key={index}>
                  <div className="w-[60px] h-[60px] rounded-[15px] flex justify-center items-center bg-[#80C4D3]">
                    <SportsIcon />
                  </div>
                  <h1 className="text-[#22343D] text-[22px]  font-poppins font-semibold pt-5 leading-normal">
                    {item.name}
                  </h1>
                  <p className="pt-[13px] max-w-[300px]  font-poppins font-normal w-full text-[#22343D]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1152px] w-full mx-auto px-[50px] max-lg:px-4">
          <h1 className="text-[rgba(34,52,61,0.80)]  font-poppins text-[30px] font-medium uppercase pt-[30px]">
            {" "}
            From OUR <span className="text-[#80C4D3]">Blog</span>
          </h1>
          <div className="flex max-md:flex-wrap justify-center mb-[32px] max-lg:gap-[30px] gap-[75px] mt-[50px]">
            {blog.map((item, index) => (
              <div key={index}>
                <Image src={item.img} width={300} height={237} alt="img" />
                <h1 className=" text-[20px] text-black max-w-[300px] w-full font-normal  font-poppins pt-5 leading-[32px]">
                  {item.text}
                </h1>
                <p className="pt-5 text-[20px] text-black  font-poppins font-medium">
                  {item.date}
                </p>
                <div className="flex gap-[10px] mt-5 items-center">
                  <div>{item.comenticon}</div>
                  <p className="text-black font-bold  font-poppins text-[30px] ">
                    {item.coment}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="flex max-md:mx-auto hover:bg-white hover:text-black duration-300 group gap-5 max-w-[227px] w-full h-[61px] mt-[50px] bg-[#80C4D3] rounded-[5px] items-center justify-center border-[2px] border-[#80C4D3] text-[20px] text-white"
          >
            <span>More Articles</span>
            <BtnIcon />
          </button>
        </div>
      </div>
      <div>
        <Swiiper />
      </div>

      {/* Gallery Images */}
      <div className="bg-white pt-[30px] pb-[50px] px-4">
        <div className="max-w-[1152px] w-full mx-auto">
          <span className="text-[rgba(34,52,61,0.70)] max-md:text-center max-w-[1050px] w-full mx-auto pt-3  font-poppins text-[30px] font-medium uppercase">
            From Our <span className="text-[#80C4D3]">Gallery</span>
          </span>
          <GalleryImages />
          <button
            type="submit"
            className="flex hover:bg-transparent hover:text-black duration-300 group gap-5 max-w-[186px] w-full h-[61px] mt-[30px] bg-[#80C4D3] rounded-[5px] items-center justify-center border-[2px] border-[#80C4D3] text-[20px] text-white"
          >
            <span>More Photos</span>
            <BtnIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
