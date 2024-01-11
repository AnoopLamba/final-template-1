import { galleryData } from "./Helper";
import { GallerySearchIcon } from "./Icon";

const GalleryImages = () => {
  return (
    <div className="mt-[30px] sm:mt-[50px] max-w-[1052px] w-full mx-auto flex items-start justify-center flex-wrap">
      {galleryData.map((item) => (
        <div
          key={item.id}
          className="relative inline-block group mb-[15px] min-[576px]:mb-[30px] sm:mb-[50px] min-[576px]:mr-[10px] sm:mr-[20px] md:mr-[25px] rounded-lg overflow-hidden cursor-pointer"
        >
          {/* image */}
          <img
            className="object-cover w-full group-hover:scale-110 transition-all duration-200 ease-in-out"
            src={item.imgSrc}
            alt="school"
          />

          {/* black overlay with text */}
          <div className="absolute group-hover:inset-0 bg-black bg-opacity-40 group-hover:flex flex-col items-center justify-center gap-1 sm:gap-4 lg:gap-6 p-3 sm:p-4 transition-all duration-300 ease-in-out">
            <GallerySearchIcon />
            <span className="text-center text-xl font-normal text-white font-poppins">
              {item.imgText}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;
