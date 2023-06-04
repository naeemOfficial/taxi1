import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Reviews from "../Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  const backgroundImage = "/src/assets/images/banner.jpg";
  return (
    <div>
      <Banner backgroundImage={backgroundImage}></Banner>
      <Service></Service>
      <Reviews></Reviews>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
