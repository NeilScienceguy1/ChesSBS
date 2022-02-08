import React from "react";
import HomeNavbar from "../components/Navbar";
import HeroesSection from "../components/HeroesSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HomeComponentSection from "../components/HomeComponentSection";

const Home = () => {
  return (
    <div className="">
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <HomeNavbar/>
            <HeroesSection />
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RichardDai/phpSWK2Un.jpeg"
            alt=""
          />
        </div>
      </div>
      <FeaturesSection />
      <HomeComponentSection/>
      <Footer/>
    </div>
  );
}

export default Home;
