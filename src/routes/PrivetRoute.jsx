import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/loader/Loader';

const PrivetRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const location = useLocation()
   
    if(loading){
        return Loader;
    }

    if(!user){
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoute;