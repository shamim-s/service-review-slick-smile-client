import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user, logoutUser, setUser} = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
    .then(() => {
      toast.success("Logout successfully");
      setUser({});
    })
    .catch(err => {
      console.error(err);
      toast.error(err.message);
    })
  }
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/services'}>SERVICES</Link>
            </li>
            <li>
              <Link to={'/myreviews'}>MY REVIEWS</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">SLICK-SMILE</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
            <Link to={'/services'}>SERVICES</Link>
          </li>
          {
            user?.email && <li><Link to={'/myreviews'}>MY REVIEWS</Link></li>
          }
          {
            user?.email && <li><Link to={'/addservice'}>ADD SERVICE</Link></li>
          }
          <li>
            <Link to={'/blog'}>BLOG</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.email ?
          <>
          {
            user?.photoURL ? 
              <span className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img className="mask mask-circle w-12 " src={user.photoURL} alt=""/>
              </span> 
              :
              <span className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <HiOutlineUserCircle className="text-4xl hover:text-cyan-500 cursor-pointer"/>
              </span>
          }
          <HiArrowRightOnRectangle onClick={handleLogout} className="tooltip tooltip-bottom text-3xl ml-4 hover:text-red-600 cursor-pointer"/>
          </>
          :
          <Link to={'/login'} className="btn">LOGIN</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
