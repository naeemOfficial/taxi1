import React, { useState } from "react";
import Modal from "react-modal";

const Banner = ({ backgroundImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
            <h1 className="text-[#FFC327] text-4xl lg:text-[56px] font-bold mb-4">
              We will Take You
            </h1>
            <h2 className="text-white text-2xl lg:text-[38px] font-semibold mb-6">
              Where You Need To Go
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button
                className="bg-[#FFC327] text-black hover:bg-white hover:text-black font-bold text-base py-3 px-10 rounded-full"
                onClick={openModal}
              >
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
      <div className="py-10 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-[#125685]">
        <p className="mt-6 sm:mt-9 text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Order Taxi <span className="text-[#FFC327]">Online Now</span> or Call
          at
          <span className="text-[#FFC327]"> +440 123 456 789</span>
        </p>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Book a Taxi Modal"
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h2>Book a Taxi</h2>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button
                className={`tab-button ${
                  activeTab === "contact" ? "active" : ""
                }`}
                onClick={() => handleTabChange("contact")}
              >
                Contact Details
              </button>
              <button
                className={`tab-button ${activeTab === "trip" ? "active" : ""}`}
                onClick={() => handleTabChange("trip")}
              >
                Trip Details
              </button>
              <button
                className={`tab-button ${
                  activeTab === "passenger" ? "active" : ""
                }`}
                onClick={() => handleTabChange("passenger")}
              >
                Passenger Details
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "contact" && (
                <div>
                  <h3>Contact Details</h3>
                  {/* Add your contact form here */}
                </div>
              )}

              {activeTab === "trip" && (
                <div>
                  <h3>Trip Details</h3>
                  {/* Add your trip details form here */}
                </div>
              )}

              {activeTab === "passenger" && (
                <div>
                  <h3>Passenger Details</h3>
                  {/* Add your passenger details form here */}
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            {activeTab !== "contact" && (
              <button
                className="prev-button"
                onClick={() => handleTabChange("contact")}
              >
                Previous
              </button>
            )}
            {activeTab !== "passenger" && (
              <button
                className="next-button"
                onClick={() => handleTabChange("passenger")}
              >
                Next
              </button>
            )}
            {activeTab === "passenger" && (
              <button className="submit-button" onClick={submitForm}>
                Submit
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Banner;
