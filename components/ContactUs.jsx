import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      {/* contact info and get in touch */}
      <div className="bg-white px-3 py-[50px] font-poppins">
        <div className="max-w-[1052px] w-full mx-auto p-[20px] sm:p-[30px] flex flex-col lg:flex-row items-start justify-between gap-[50px] lg:gap-3 bg-[#80C4D3] rounded-lg">
          {/* contact info */}
          <div className="max-w-[414px] w-full flex flex-col items-start justify-center gap-[30px]">
            {/* heading */}
            <div className="flex items-center justify-center gap-[10px]">
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
              <span className="text-white text-lg min-[576px]:text-2xl sm:text-3xl font-medium uppercase text-center">
                Contact Info
              </span>
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
            </div>

            {/* call us */}
            <div className="bg-white w-full rounded-lg p-[30px] flex flex-col min-[500px]:flex-row items-center justify-between gap-2">
              <Image
                className="max-sm:w-[90px] max-sm:h-[90px]"
                src="/img/contact-us-phone-icon.png"
                width={120}
                height={120}
                alt="call icn"
              />
              <div className="flex flex-col items-start justify-center text-base sm:text-xl font-semibold text-black">
                <span>Call us directly on </span>
                <p className="mt-[9px]">+234 805 029 1265</p>
                <span>+234 907 228 0656</span>
              </div>
            </div>

            {/* mail us */}
            <div className="bg-white w-full rounded-lg p-[30px] flex flex-col min-[500px]:flex-row items-center justify-between gap-2">
              <Image
                className="max-sm:w-[90px] max-sm:h-[90px]"
                src="/img/contact-us-mail-icon.png"
                width={120}
                height={120}
                alt="call icn"
              />
              <div className="flex flex-col items-start justify-center text-base sm:text-xl font-semibold text-black">
                <span>Mail us directly on</span>
                <p className="mt-[9px]">Info20@gmail.com</p>
                <span>Info21@gmail.com</span>
              </div>
            </div>

            {/* find us */}
            <div className="bg-white w-full rounded-lg p-[30px] flex flex-col min-[500px]:flex-row items-center justify-between gap-2">
              <Image
                className="max-sm:w-[90px] max-sm:h-[90px]"
                src="/img/contact-us-location-icon.png"
                width={120}
                height={120}
                alt="call icn"
              />
              <div className="flex flex-col items-start justify-center text-base sm:text-xl font-semibold text-black">
                <span>Find us</span>
                <p className="mt-[9px] max-w-[216px] w-full">
                  4 law castle agbole aro opp. fidelity bank omida, abeokuta.
                </p>
              </div>
            </div>
          </div>

          {/* get in touch */}
          <div className="lg:max-w-[486px] w-full flex flex-col items-start justify-center">
            {/* heading */}
            <div className="flex items-center justify-center gap-[10px]">
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
              <span className="text-white text-lg min-[576px]:text-2xl sm:text-3xl font-medium uppercase text-center">
                Get in Touch
              </span>
              {/* small circle */}
              <div className="w-[9px] h-[9px] rounded-full bg-white flex-shrink-0"></div>
            </div>

            <input
              className="mt-[30px] w-full p-3 sm:p-5 outline-none text-xl rounded-[5px] font-normal leading-[40px] 
              text-[rgba(0,0,0,0.50)]"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="mt-[30px] w-full p-3 sm:p-5 outline-none text-xl rounded-[5px] font-normal leading-[40px] 
              text-[rgba(0,0,0,0.50)]"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="mt-[20px] w-full p-3 sm:p-5 outline-none text-xl rounded-[5px] font-normal leading-[40px] 
              text-[rgba(0,0,0,0.50)]"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              className="mt-[30px] w-full h-[200px] rounded-[5px] p-3 sm:p-5 outline-none text-xl font-normal leading-[40px] 
            text-[rgba(0,0,0,0.50)] resize-none"
              name="message"
              placeholder="Message"
            ></textarea>

            <div className="w-full flex items-center justify-end">
              <button className="mt-[30px] p-[10px_20px] sm:p-[20px_30px] rounded-[5px] border-2 border-white hover:bg-white text-white hover:text-[#80C4D3] text-xl font-medium leading-[21px] tracking-[-0.4px] transition-all duration-200 ease-linear">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* maps */}
      <div className="px-4 pb-[50px]">
        <iframe
          className="max-w-[1052px] w-full h-[339px] sm:h-[439px] md:h-[539px] mx-auto border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222993.98531638374!2d75.59072262317528!3d29.15639000253248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704635376103!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
