import React from 'react';
import {Navigate} from 'react-router-dom';



const logOut=()=>{
    const token=localStorage.getItem('token');
    console.log(token);
    return(token ? <Navigate to="/"/> : <Navigate to="/Войти"/> );
}
export default logOut;