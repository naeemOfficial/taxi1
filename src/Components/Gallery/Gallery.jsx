import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center py-9">
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-xl font-bold text-[#125685] mb-4">GALLERY</h2>

        <h2 className="text-3xl font-extrabold  text-[#1C1C1C] mb-4">
          Some of Our Memories
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <img src={img1} alt="Image 1" className="w-80 h-48 object-cover" />
        <img src={img2} alt="Image 2" className="w-80 h-48 object-cover" />
        <img src={img3} alt="Image 3" className="w-80 h-48 object-cover" />
        <img src={img4} alt="Image 4" className="w-80 h-48 object-cover" />
        <img src={img5} alt="Image 5" className="w-80 h-48 object-cover" />
        <img src={img6} alt="Image 6" className="w-80 h-48 object-cover" />
      </div>
      <a
        href="#"
        className="mt-8 text-[#125685] font-bold text-xl underline hover:text-blue-700"
      >
        Learn More
      </a>
    </div>
  );
};

export default Gallery;
