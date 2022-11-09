import React from "react";
import CustomerReview from "./CustomerReview/CustomerReview";
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
      <h1 className="font-bold text-3xl mb-4 mt-10">Customers Reviews</h1>
      <hr className="mb-6"/>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
