import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext);
    console.log(loading)

    if (loading === true) {
        return <div>Loading...</div>
    }

    if (user?.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;


};

export default PrivateRoute;