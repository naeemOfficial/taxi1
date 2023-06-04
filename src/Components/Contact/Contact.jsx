import React from "react";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-[#AEDEFF] bg-opacity-10">
      <div className="flex flex-col md:flex-row items-center py-10 max-w-7xl mx-auto">
        {/* Left side */}
        <div className="md:w-1/2 py-8">
          <h2 className="text-xl font-bold text-[#125685] mb-4">CONTACT US</h2>
          <h4 className="text-3xl text-[#1C1C1C] font-bold w-[355px] mb-11">
            Message Us Directly For Any Query
          </h4>
          <div className="flex items-center mb-11 gap-4">
            <PhoneIcon className="w-8 h-8 text-[#004E7F] ml-2" />
            <span className="text-base font-bold">+880 181 123 4567</span>
          </div>
          <div className="flex items-center gap-4">
            <LocationMarkerIcon className="w-8 h-8 text-[#004E7F] ml-2" />
            <span className="text-base w-[233px] font-bold">
              Address line 1, House number Dhaka, Bangladesh
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 py-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="text"
                id="fullName"
                className="w-[540px] h-14 p-2 border-2 border-[#125685] bg-transparent rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                id="phoneNumber"
                className="w-[540px] h-14  p-2 border-2 border-[#125685] bg-transparent rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="email"
                id="email"
                className="w-[540px] h-14 p-2 border-2 border-[#125685] bg-transparent rounded-md"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-8">
              <textarea
                id="message"
                className="w-[540px] h-48 p-2 border-2 border-[#125685] bg-transparent rounded-md"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button className="bg-[#FFC327] text-black hover:bg-white hover:text-black font-bold text-base py-3 px-20 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
