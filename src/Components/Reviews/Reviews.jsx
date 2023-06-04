import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Cover from "../../assets/images/cover.jpeg";

const reviews = [
  {
    id: 1,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },

  {
    id: 2,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },

  {
    id: 3,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },

  {
    id: 4,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },

  {
    id: 5,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },

  {
    id: 6,
    review:
      "Lorem ipsum dolor sit As a technician, what I love about seasonate is that I finally trade stocks according to the one concept that I understand in terms of content. And that I trade stocks in a diversified way and outperform the market, consectetur adipiscing elit.",
    avatar: "/src/assets/images/user.png",
    name: "Andreas Kowatsch ",
    position: "Software Developer",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const prevReview = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleReviews = reviews.slice(activeIndex, activeIndex + 2);

  return (
    <div
      className="flex flex-col items-center p-8 md:p-24"
      style={{
        backgroundImage: `linear-gradient(rgba(174, 222, 255, 0.1), rgba(174, 222, 255, 0.1)), url(${Cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="pb-4 md:pb-6 text-[#125685] text-lg md:text-xl font-bold">
        GOOGLE REVIEWS
      </p>
      <h4 className="pb-10 md:pb-20 text-[#1C1C1C] text-2xl md:text-3xl font-bold text-center sm:text-left">
        What Our Clients Say In Google
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 max-w-7xl">
        {visibleReviews.map((review, index) => (
          <div
            key={review.id}
            className={`relative flex flex-col items-center p-4 ${
              index === 0 ? "md:col-span-1" : ""
            }`}
          >
            {index === 0 && (
              <button
                onClick={prevReview}
                className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 p-2 rounded-full focus:outline-none z-10"
              >
                <ChevronLeftIcon className="w-6 md:w-8 h-6 md:h-8 text-[#F89C13]" />
              </button>
            )}
            {index === 1 && (
              <button
                onClick={nextReview}
                className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 p-2 focus:outline-none z-10"
              >
                <ChevronRightIcon className="w-6 md:w-8 h-6 md:h-8 text-[#F89C13]" />
              </button>
            )}
            <img
              src={review.avatar}
              alt=""
              className="w-[96px] md:w-[132px] h-[96px] md:h-[132px] rounded-full border-2 p-2 md:p-3 border-[#FFC327] mb-6 md:mb-10"
            />
            <p className="text-center w-[300px] md:w-[400px] text-sm md:text-base font-semibold leading-6 md:leading-7 text-[#125685]">
              {review.review}
            </p>
            <h4 className="mt-6 md:mt-8 font-bold text-lg md:text-2xl text-[#332B50]">
              {review.name}
            </h4>
            <h4 className="mt-1 md:mt-2 font-bold text-sm md:text-base text-[#4B5563]">
              {review.position}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
