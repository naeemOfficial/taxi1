import React, { useState } from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Reviews from "../Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import BookingModal from "../BookingModal/BookingModal";

const Home = () => {
  const backgroundImage = "/src/assets/images/banner.jpg";
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Banner backgroundImage={backgroundImage}></Banner>
      {modalOpen && (
        <div className="modal-overlay">
          <BookingModal closeModal={closeModal} />
        </div>
      )}
      <Service></Service>
      <Reviews></Reviews>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
