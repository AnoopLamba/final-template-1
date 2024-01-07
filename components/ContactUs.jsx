import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="bg-white px-3 pt-[50px]">
        <div className="max-w-[1052px] w-full mx-auto p-[30px] flex items-center justify-between bg-[#80C4D3] rounded-lg">
          {/* contact info */}
          <div className="felx flex-col items-start justify-center gap-[30px]">
            {/* heading */}
            <div className="flex items-center justify-center gap-[10px]">
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
              <span className="text-white text-xl min-[576px]:text-2xl sm:text-3xl font-medium uppercase text-center">
                Contact Info
              </span>
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
            </div>

            {/* call us */}
            <div className="bg-white rounded-lg p-[30px] flex items-center justify-between gap-2">
              <Image
                src="/img/contact-us-phone-icon.png"
                width={120}
                height={120}
                alt="call icn"
              />
              <div className="flex flex-col items-start justify-center font-poppins text-xl font-semibold text-black">
                <span>Call us directly on </span>
                <p className="mt-[9px]">+234 805 029 1265</p>
                <span>+234 907 228 0656</span>
              </div>
            </div>
          </div>

          {/* get in touch */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
