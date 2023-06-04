import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
      {/* Left Side */}
      <div className="md:w-1/2 py-24">
        <h2 className="text-[#125685] text-xl font-bold mb-4">
          SERVICES WE OFFER
        </h2>
        <h4 className="text-3xl w-[356px] font-bold">
          We are offering the best Services In Town
        </h4>
        <p className="text-[#125685] w-[470px] text-base leading-7 font-medium mt-5 mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="flex mt-9">
          <button className="bg-[#FFC327] text-black hover:bg-white hover:text-black font-bold text-base py-3 px-10 rounded-full mr-4">
            Airport Lists
          </button>
          <button className="bg-[#FFC327] text-black hover:bg-white hover:text-black font-bold text-base py-3 px-10 rounded-full">
            Area We Cover
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-wrap py-24">
        <div className="w-1/2 p-2 relative">
          <img
            src="/src/assets/images/1.jpeg"
            alt="Image 1"
            className="w-full"
          />
          <div className="absolute bottom-14 left-0 right-0 p-4 text-center text-white">
            <p className="text-2xl text-white font-semibold">
              Safe & Sound <br />
              <span className="text-[#FFC327]">24/7 Service</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-2 relative">
          <img
            src="/src/assets/images/2.jpeg"
            alt="Image 2"
            className="w-full"
          />
          <div className="absolute bottom-14 left-0 right-0 p-4 text-center text-white">
            <p className="text-2xl text-white font-semibold">
              Special <br />
              <span className="text-[#FFC327]">VIP Service</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-2 relative">
          <img
            src="/src/assets/images/3.jpeg"
            alt="Image 3"
            className="w-full"
          />
          <div className="absolute bottom-14 left-0 right-0 p-4 text-center text-white">
            <p className="text-2xl text-white font-semibold">
              <span className="text-[#FFC327]">Airport Transfer</span>
              <br /> Service
            </p>
          </div>
        </div>
        <div className="w-1/2 p-2 relative">
          <img
            src="/src/assets/images/4.jpeg"
            alt="Image 4"
            className="w-full"
          />
          <div className="absolute bottom-14 left-0 right-0 p-4 text-center text-white">
            <p className="text-2xl text-white font-semibold">
              <span className="text-[#FFC327]">Luxury Car</span>
              <br /> Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
