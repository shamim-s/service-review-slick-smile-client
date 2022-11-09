import React from "react";
import Photoview from "./Services/Photoview";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mt-10 mb-10">
      <Hero></Hero>
      <Services></Services>
      <Photoview></Photoview>
    </div>
  );
};

export default Home;
