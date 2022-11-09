import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user])

  return (
    <div className="overflow-x-auto mt-10 mb-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>SERVICE NAME</th>
            <th>REVIEW</th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tbody>
          {
            myReview.map(review => <tr key={review._id}>
                <th>{review.index}</th>
                <td>{review.name}</td>
                <td>{review.review.slice(0, 20) + '...'}</td>
                <td>Red</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
