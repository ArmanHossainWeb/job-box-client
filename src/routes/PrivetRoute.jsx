import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user} = UseAuth()

    if(!user){
        <Navigate to={"/login"}></Navigate>
    }
    return children;
};

export default PrivetRoute;