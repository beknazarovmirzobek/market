import React ,{useContext,useState,useEffect} from 'react';
import "./style.css";
import logotip from "../../assets/img/Логотип-login.png";
import {  NavLink, useNavigate } from 'react-router-dom';
import context from "../../context";
import Auth from "../../API/auth/auth";
// import LogOut from "../../API/auth/LogOut";

function index(props) {
    const {logout,setLogout}=useContext(context);
    setLogout(false);

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const submitLogin=async(e)=>{
       
        e.preventDefault();
        const params={
            "username":`998${username}`,
            "password":password
        }

        try{
            const res=await Auth.setLogin(params);
            localStorage.setItem("token",res.data.access);
            window.location.replace("/");
        }
        catch(err){
            console.log(err);
            
        }  
    };

    
    return (
        <>
        <div className="boxs-login">
            <div className="login">
                <img src={logotip} alt="" className="text-light"/>
                <h1 className="">Войдите или зарегистрируйтесь</h1>
                <form onSubmit={submitLogin}>
                    <p className="tel_input">+998 <input type="tel" name="n" className="input_2 fw-bold" required="required" value={username} onChange={(e)=>setUsername(e.target.value)}/></p>
                    <input type="password" name="p" placeholder="Пароль" required="required" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" className="btn-white">Войти</button>
                </form>
                <NavLink to="/Регистрация" className="text-light text-center text-decoration-none login-link1 d-block mb-4">Регистрация</NavLink>
                <NavLink to="/КодИзСмс" className="text-light text-center text-decoration-none login-link2 d-block">Забыли пароль?</NavLink>
            </div>
        </div>
        </>
    );
}

export default index;