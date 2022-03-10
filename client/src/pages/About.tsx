import React from "react";
import HomeNavbar from "../components/layouts/Navbar";
import TeamSection from "../components/content/TeamSection";
import Footer from "../components/layouts/Footer";
import NavbarData from "../data/NavbarData";

const About = () => {
  return (
    <div className="">
      <div className="relative bg-gray-800 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <HomeNavbar links={NavbarData.links} logo={NavbarData.logo} />
          </div>
        </div>
      </div>
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">
                About ChesSBS
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344_wide-cfdc4528733d810b7feb5e2a884f987a981920ff.jpg?s=1400"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Meet the Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
