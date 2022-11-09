import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Status from "./Status/Status";

const Home = () => {
  return (
    <div className="mt-10 mb-10">
      <Hero></Hero>
      <Services></Services>
      <h1 className="text-3xl font-bold  mb-4 mt-6">Status</h1>
      <hr />
      <Status></Status>
    </div>
  );
};

export default Home;
