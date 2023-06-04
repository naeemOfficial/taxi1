import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#125685]">
      <div className="max-w-7xl mx-auto py-5 px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-wrap items-center justify-between md:flex-nowrap">
          {/* Logo */}
          <img
            className="h-[82px] w-[82px] md:h-[64px] md:w-[64px] mr-4 md:mr-0 mb-4 md:mb-0"
            src="/src/assets/images/logo.png"
            alt="Logo"
          />

          {/* Menus */}
          <div className="flex-grow">
            <ul className="flex justify-center space-x-4">
              <li className="text-[#FFC327] hover:font-black px-3 py-2 rounded-md text-xl font-semibold">
                <a href="/">Home</a>
              </li>
              <li className="text-[#FFC327] hover:font-black px-3 py-2 rounded-md text-xl font-semibold">
                <a href="/services">Services</a>
              </li>
              <li className="text-[#FFC327] hover:font-black px-3 py-2 rounded-md text-xl font-semibold">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="text-[#FFC327] hover:font-black px-3 py-2 rounded-md text-xl font-semibold">
                <a href="/contractUs">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right Texts */}
          <div className="items-center text-center">
            <h6 className="text-xl font-semibold text-[#FFC327] hidden md:block">
              Call Us at:
            </h6>
            <h2 className="underline underline-offset-6 text-2xl font-semibold text-[#FFFFFF]">
              +440 123 456 789
            </h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
