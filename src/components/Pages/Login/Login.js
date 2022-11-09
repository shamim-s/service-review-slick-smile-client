import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import { AuthContext } from "../../Context/Context";

const Login = () => {
  useTitle('Login');
  const {setUser, loginUser, loginWithGoogle} = useContext(AuthContext);

  const naviget = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);

      const crrUser = {
        email: user.email
      }

      // jwt
      fetch('https://slick-smile-server.vercel.app/jwt', {
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(crrUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        naviget(from, {replace:true})
      })
      
      toast.success('Login Success');
    })
    .catch(err => {
      console.log(err);
      toast.error(err.message);
    })
  }

  const loginWithPopup = () => {
    loginWithGoogle()
    .then(result => {
      const user = result.user;
      setUser(user);
      naviget(from, {replace: true});
      toast.success("Login Successfully");
    })
    .catch(err => {
      console.error(err);
      toast.error(err.message);
    })
  }
  
  return (
    <div className="bg-base-300 mx-auto mt-10 mb-10 w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <form
      onSubmit={handleLogin}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <Link rel="noopener noreferrer" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="btn block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-sky-400">
          Sign in
        </button>
      </form>
      <div className="divider">OR</div>
      <div className="flex justify-center space-x-4">
        <button 
          onClick={loginWithPopup} 
          className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          to={'/register'}
          rel="noopener noreferrer"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
