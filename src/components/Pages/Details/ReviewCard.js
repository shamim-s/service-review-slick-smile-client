import React from "react";
import image from '../../../images/avatar-svgrepo-com (1).svg';

const ReviewCard = ({review}) => {
  return (
    <div className="container flex flex-col w-80 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 bg-base-300 mt-4 mb-4">
      <div className="flex justify-between p-4">
        <div className="">
          <div>
            {
              review?.img ? <img
              src={review.img}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
            :
            <img src={image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"/>
            }
          </div>
          <div>
            <p className="font-bold mt-4">{review.email}</p>
          </div>
        </div>
        
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>
          {review.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
