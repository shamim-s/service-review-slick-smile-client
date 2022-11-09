import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/myreviews',
                element: <PrivetRoutes><MyReviews></MyReviews></PrivetRoutes>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/services/all/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://slick-smile-server.vercel.app/services/all/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <UpdateReview/>,
                loader: ({params}) => fetch(`https://slick-smile-server.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])