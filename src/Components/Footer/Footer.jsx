import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import img from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#125685] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={img} alt="Logo" className="w-16" />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <h6 className="font-bold text-xl">SOCIAL LINKS</h6>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className=" w-full h-[0.5px] border-gray-300" />

      {/* Copyright */}
      <p className="text-center font-bold text-base mt-2">
        ©2023 All rights Reserved to - UNIQUE TAXI Developed by BUYONIASOFT
      </p>
    </footer>
  );
};

export default Footer;
