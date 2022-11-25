import React ,{ useRef ,useState,useEffect,useContext}from 'react';
import "./style.css";
import logotip from "../../assets/img/Логотип-login.png";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Auth from "../../API/auth/auth";
import context from "../../context";
import KodIzSms from '../Код из смс/index';



function index() {
    const navigate = useNavigate();
    const [username,setUsername]=useState('');
    const [number,setNumber]=useState('');
    const [password,setPassword]=useState('');
    
    const {logout,setLogout}=useContext(context);
    setLogout(false);

       
    async function getLogins(e){
        e.preventDefault();
        const params={
            "name":username,
            "phone":`998${number}`,
            "password":password,
        }

        try{
            const res=await Auth.setRegister(params);
            console.log(res);
            navigate('/КодИзСмс');
        }
        catch(err){
            console.log(err);
        }
        const newPhone = params.phone;
        <KodIzSms phone={newPhone} />
    }
    
    
    return (
        <>
            <div className="boxs-login">
                <div className="login">
                    <img src={logotip} alt="" className="text-light" />
                    <h1 className="">Регистрация</h1>
                    <form className="form" onSubmit={getLogins}>
                        <input type="text" name="u" placeholder="Имя" required="required" onChange={(e)=>setUsername(e.target.value)}/>
                        <p className="tel_input">+998  <input type="tel" name="n" className="input_2 fw-bold" required="required" onChange={(e)=>setNumber(e.target.value)}/></p>
                        <input type="password" name="p" placeholder="Пароль" required="required" onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" className="btn-white">Далее</button>
                    </form>
                    <NavLink to="/Войти" className="text-light text-center text-decoration-none login-link1 d-block mb-4">Войти</NavLink>
                </div>
            </div>
        </>
    );
}

export default index;