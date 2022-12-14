import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import { AuthContext } from "../../Context/Context";

const MyReviews = () => {
  useTitle('My Reviews');
  const { user, logoutUser } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`https://slick-smile-server.vercel.app/myreview?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if(res.status === 401 || res.status === 403){
         logoutUser();
      }
      return res.json();
      })
      .then(data => setMyReview(data));
  }, [user, logoutUser]);

  const handleDelete = (review) => {
    const confirm = window.confirm("Are you sure to delete this review?");
    console.log(confirm);
    if (confirm) {
      fetch(`https://slick-smile-server.vercel.app/myreview/${review._id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            toast.success("Review deleted successfully");
          }
          const reming = myReview.filter((r) => r._id !== review._id);
          setMyReview(reming);
        });
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-6">My Reviews</h1>
      <div className="overflow-x-auto mt-10 mb-16 bg-base-300">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>SERVICE NAME</th>
              <th>REVIEW</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((review) => (
              <tr key={review._id}>
                <th>{review.index}</th>
                <td>{review.name}</td>
                <td>{review.review.slice(0, 40) + "..."}</td>
                <td>
                  <Link to={`/reviews/${review._id}`}>UPDATE</Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(review)}
                    className="text-red-500"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {myReview.length === 0 && (
          <h1 className="text-center mt-5 mb-5 text-2xl">No review added</h1>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
