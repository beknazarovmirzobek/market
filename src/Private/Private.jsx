import React from 'react';
import { Outlet ,Navigate } from 'react-router-dom';

function Private({}) {
    const token=localStorage.getItem('token');
    return (
        <>
        {
            token ? <Outlet/> : <Navigate to={"/Войти"}/>
        }
        </>
    );
}

export default Private;