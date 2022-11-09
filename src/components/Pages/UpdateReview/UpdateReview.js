import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";

const UpdateReview = () => {
  useTitle('Update Review');
  const myReview = useLoaderData();

  const updateReview = event => {
    event.preventDefault();
    const message = event.target.message.value;

    const review = {
        name: myReview.name,
        img: myReview.img,
        email: myReview.email,
        review: message
    }
    console.log(review);

    fetch(`http://localhost:5000/reviews/${myReview._id}`, {
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success("Review updated successfully");
        }
        console.log(data);
        event.target.reset();
    })
  }
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center text-2xl uppercase font-bold">
        Update Review
      </h1>
      <div className="mx-auto">
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 mx-auto mt-8">
          <div className="flex flex-col items-center w-full">
            <form 
                onSubmit={updateReview}
                className="flex flex-col w-full">
              <textarea
                rows="3"
                placeholder="Message..."
                name="message"
                className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
              ></textarea>
              <button
                type="submit"
                className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-sky-400 btn"
              >
                Submit feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
