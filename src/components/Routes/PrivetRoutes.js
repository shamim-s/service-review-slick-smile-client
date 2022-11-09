import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-sky-400 mx-auto mt-8 mb-8"></div>
    }

    if(user && user?.uid){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
};

export default PrivetRoutes;