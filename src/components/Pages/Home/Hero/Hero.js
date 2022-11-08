import React from "react";
import dent from "../../../../images/dent.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 p-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={dent} className="lg:max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="">
          <h1 className="text-5xl font-bold">
            <span className="text-3xl">A better life starts</span> <br /> with a
            beautiful
            <br />
            <span className="text-lime-500">Smile.</span>{" "}
          </h1>
          <p className="py-6">
            Dentistry, also known as dental medicine and oral medicine, is the
            branch of medicine focused on the teeth, gums, and mouth.{" "}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
