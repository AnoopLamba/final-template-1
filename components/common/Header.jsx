import Image from "next/image";
import { Darkbtnicon, Sidebaricon } from "./icon";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderBanner from "./HeaderBanner";

function Header() {
  const router = useRouter();

  return (
    <>
      <nav className="max-w-[1064px] w-full mx-auto px-3">
        <div className="flex justify-between items-center pt-6 pb-[10px]">
          {/* logo */}
          <div>
            <Image
              className="max-sm:w-[90px]"
              src="/img/Logo-img.png"
              width={130}
              height={65}
              alt="logo"
            />
          </div>

          {/* links */}
          <div className="flex gap-10 max-lg:hidden ">
            <Link
              href="/"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300
              ${router.pathname === "/" ? "text-[#80C4D3]" : "text-black"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300 ${
                router.pathname === "/about" ? "text-[#80C4D3]" : "text-black"
              } `}
            >
              About us
            </Link>
            <Link
              href="/management"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300 ${
                router.pathname === "/management"
                  ? "text-[#80C4D3]"
                  : "text-black"
              }`}
            >
              Management
            </Link>
            <Link
              href="/news"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300 
              ${router.pathname === "/news" ? "text-[#80C4D3]" : "text-black"}`}
            >
              News & Event
            </Link>
            <Link
              href="/gallery"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300 ${
                router.pathname === "/gallery" ? "text-[#80C4D3]" : "text-black"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`font-poppins text-[20px] font-normal hover:text-[#80C4D3] duration-300 ${
                router.pathname === "/contact" ? "text-[#80C4D3]" : "text-black"
              }`}
            >
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-5 sm:gap-10">
            <button>
              <Darkbtnicon />
            </button>

            <button className="lg:hidden">
              <Sidebaricon />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
