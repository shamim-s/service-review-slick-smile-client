import React from "react";
import image from '../../../images/Machine.jpg';

const Hero = () => {
  return (
    <section>
      <div className="dark:bg-sky-400 bg-base-300">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            BEST VALUED SERVICES FOR YOU
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900 uppercase">
            The Slick Smile provides you all times best valued service for your next bright today.
          </p>
          <div className="flex flex-wrap justify-center">
          </div>
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-xl lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Hero;
