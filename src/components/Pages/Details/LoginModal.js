import React from "react";
import { Link } from "react-router-dom";

const LoginModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Oops!
          </h3>
          <p className="py-4">
            Please login or register to add a review!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
                    Close
                </label>
                <label htmlFor="my-modal" className="btn">
                     <Link to={'/login'}>Login?</Link>
                </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
