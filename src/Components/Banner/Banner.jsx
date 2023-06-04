import React from "react";

const Banner = ({ backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div>
      <div
        className="text-white py-4 px-6 flex items-center opacity-80 justify-between bg-cover bg-center md:h-[870px]"
        style={bannerStyle}
      >
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className=" text-[#FFC327] text-4xl lg:text-[56px] font-bold mb-4">
              We will Take You
            </h1>
            <h2 className="text-white text-2xl lg:text-[38px] font-semibold mb-6">
              Where You Need To Go
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#FFC327] text-black hover:bg-white hover:text-black font-bold text-base py-3 px-10 rounded-full">
                Book a Taxi Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full -mt-8 absolute"
        src="/src/assets/images/line.jpeg"
        alt=""
      />
      <div className="py-[50px] bg-[#125685]">
        <p className="mt-9 text-center text-white text-[38px] font-semibold">
          Order Taxi <span className="text-[#FFC327]">Online Now</span> or Call
          at <span className="text-[#FFC327]"> +440 123 456 789</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
