import React from "react"

const DashboardComponent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-10 rounded shadow-xl sm:p-16 bg-gray-800">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2
              className="font-sans text-3xl font-bold tracking-tight text-indigo-600
             sm:text-4xl sm:leading-none"
            >
              Welcome to your dashboard
              <br className="hidden md:block inline-block" />
              <span className="inline-block text-deep-purple-accent-400">
                NeilChessGeek!
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
              error sit voluptatem accusantium doloremque rem aperiam.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-600 hover:text-indigo-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;