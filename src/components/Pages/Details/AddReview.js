import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import moment from 'moment';
import toast from "react-hot-toast";

const AddReview = ({service}) => {
    const {user} = useContext(AuthContext);

    const handlereviewSubmit = event => {
        event.preventDefault();
        const message = event.target.message.value;

        const review = {
            name: service.name,
            img: user.photoURL,
            email: user.email,
            review: message,
            time: moment().format("h:mm:ss")
            }
            fetch(`https://slick-smile-server.vercel.app/reviews/add`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
              if(data.acknowledged){
                toast.success("Review Submited");
                console.log(data);
              }
            })
    }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <form onSubmit={handlereviewSubmit} className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Add a review!</h3>
        <div className="flex flex-col w-full">
			    <textarea rows="3" name="message" placeholder="Message..." className="p-4   rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
		    </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
                    Close
                </label>
                <button type="submit">
                <label type="submit" htmlFor="my-modal" className="btn transition">
                      SUBMIT
                </label>
                </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
