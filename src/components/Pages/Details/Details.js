import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import { AuthContext } from "../../Context/Context";
import AddReview from "./AddReview";
import LoginModal from "./LoginModal";
import ReviewCard from "./ReviewCard";

const Details = () => {
  useTitle('Details');
  const {user} = useContext(AuthContext);

  const service = useLoaderData();
  const {name, img, price, details, rating} = service;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?name=${name}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  },[reviews, name])
  return (
    <div className="relative">
      <section className="lg:flex mt-10 mb-10">
        <img src={img} className="lg:w-1/2 lg:mr-8" alt=""/>
        <div className="lg:mt-0 mt-6">
          <h1 className="text-4xl uppercase font-semibold mb-2">{name}</h1>
          <hr />
          <p className="mb-8">{details}</p>
          <p className="font-semibold mt-2">Rating: {rating}</p>
          <p className="font-semibold mt-2">Price: ${price}</p>
        </div>
      </section>
      <hr />

      <section className="mt-4">
        <h1 className="text-2xl font-semibold">Reviews</h1>
          <div className="grid lg:grid-cols-3">
            {
              reviews.map(review => <ReviewCard 
                key={review._id}
                review={review}
                ></ReviewCard>)
            }
          </div>
          {
            user?.uid ? 
            <>
            <AddReview service={service}></AddReview>
            </>
            :
            <LoginModal></LoginModal>
          }
          
          <p className="text-center mb-6">
            {
              user?.uid ?
              <label htmlFor="my-modal" className="btn">ADD A REVIEW</label>
              :
              <label htmlFor="my-modal" className="btn">ADD A REVIEW</label>
            }
          </p>
      </section>
    </div>
  );
};

export default Details;
