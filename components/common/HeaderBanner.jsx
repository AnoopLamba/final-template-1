import { Arrowicon } from "./Icon";

const HeaderBanner = ({ heading }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-[url('/img/Hero-bg.png')] bg-no-repeat bg-center bg-cover pb-5 sm:pb-[38px] md:pb-[48px] pt-5 sm:pt-10 md:pt-[50px] px-5 sm:px-10 md:px-[50px]">
      <div className="max-w-[1052px] w-full mx-auto flex flex-col items-start justify-center">
        <p className="text-white font-Roboto text-2xl sm:text-[33px] font-medium ">
          {heading}
        </p>

        <div className="h-full pt-3 sm:pt-[22px] flex items-center justify-start gap-[10px]">
          <p className="text-[hsla(0,0%,100%,1)] font-Roboto text-[16px] font-normal">
            Home
          </p>
          <div className="pt-[5px]">
            <Arrowicon />
          </div>
          <p className="text-white font-Roboto text-[16px] font-medium">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
