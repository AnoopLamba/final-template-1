import GalleryImages from "./common/GalleryImages";
import {
  PaginationArrowDownIcon,
  PaginationArrowLeftIcon,
  PaginationArrowRightIcon,
} from "./common/Icon";

const GalleryPage = () => {
  return (
    <div className="bg-white px-3">
      {/* gallery heading */}
      <div className="pt-[30px] sm:pt-[52px] max-w-[1052px] w-full mx-auto flex items-center justify-center sm:justify-start">
        <div className="flex items-center justify-center gap-[10px]">
          {/* small circle */}
          <div className="w-[9px] h-[9px] rounded-full bg-[#80C4D3] flex-shrink-0"></div>
          <span className="text-[#80C4D3] text-xl min-[576px]:text-2xl sm:text-3xl font-medium uppercase text-center">
            The school gallery
          </span>
          {/* small circle */}
          <div className="w-[9px] h-[9px] rounded-full bg-[#80C4D3] flex-shrink-0"></div>
        </div>
      </div>

      {/* gallery body */}
      <GalleryImages />

      {/* gallery pagination */}
      <div className="max-w-[1052px] w-full pb-[50px] mx-auto flex items-center justify-between">
        {/* left */}
        <div className="flex items-center justify-center rounded-[5px] bg-[#80C4D3] font-poppins text-sm font-medium leading-[21px] text-white divide-x-2 divide-white">
          <button className="flex p-[8px_12px] sm:p-[15px_20px] items-center justify-center gap-2 sm:gap-[10px]">
            <PaginationArrowLeftIcon />
            <span>Prev</span>
          </button>
          <button className="flex p-[8px_12px] sm:p-[15px_20px] items-center justify-center gap-2 sm:gap-[10px]">
            <PaginationArrowRightIcon />
            <span>Next</span>
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center rounded-[5px] bg-[#80C4D3] font-poppins text-sm font-medium leading-[21px] text-white divide-x-2 divide-white">
          <button className="flex p-[8px_12px] sm:p-[15px_20px] items-center justify-center gap-2 sm:gap-[10px]">
            <span>Page</span>
          </button>
          <button className="flex p-[8px_12px] sm:p-[15px_20px] items-center justify-center gap-2 sm:gap-[10px]">
            <span>2</span>
            <PaginationArrowDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
