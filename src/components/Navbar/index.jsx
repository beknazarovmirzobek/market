import React ,{useContext} from 'react';
import "./style.css";
import Линия_между_иконками from "/src/assets/img/Линия между иконками.png"
import Иконка_удалить from "/src/assets/img/Иконка удалить.png"
import Vector from "/src/assets/img/Vector (1).png"
import discount from "/src/assets/img/discount 3.png"
import Корзина from "/src/assets/img/Корзина.png"
import Логотип from "/src/assets/img/Логотип.png"
import { NavLink } from 'react-router-dom';
import context from "../../context";
import logOut from "../../API/auth/LogOut";

function index() {
    const {setLogout,logout}=useContext(context);
    // const t=language[lang];
    const logOutSubmit=(type)=>{
        setAuth(false);
            localStorage.setItem("auth",false);
    }
    function getToken(){
const token=localStorage.getItem('token');
if(token){
    <NavLink to=""></NavLink>
}
    }
    return (
        <header>
            <div className="header-ul">
                <div className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink to="/Доставка" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        Доставка
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Оплата" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        Оплата
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Контакты" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        Контакты
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Заказы" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        Заказы
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Войти" onClick={()=>{setLogout(false);localStorage.removeItem('token')}} className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        Войти
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                    <p className="nav-link"><span></span> Tashkent</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Язык:</p>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle my-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">RU</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">ENG</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">UZ</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="container">
                    <a className="navbar-brand"><img src={Логотип} alt="" /></a>
                    <form className="d-flex justify-content-between search" role="search">
                        <input className=" border-0" type="search" placeholder="Search" aria-label="Search" />
                        <div>
                            <button className="btn" type="submit"><img src={Иконка_удалить} alt="" /></button>

                            <img src={Линия_между_иконками} alt="Линия" className="pt-1" />
                            <button className="btn" type="submit"><img src={Vector} alt="" /></button>
                        </div>
                    </form>
                    <div className="sales-department">
                        <p className="color m-0 fw-bolder fs-6">Отдел продаж <span className="text-dark">+998(99)777-77-77</span></p>
                    </div>
                    <NavLink to="/Избранное" className="text-decoration-none d-flex m-0 p-0">
                        <button className="btn m-0"><img src={discount} alt="" /></button>
                    </NavLink>
                    <NavLink to="/Корзина" className="text-decoration-none d-flex m-0 p-0">
                        <button className="btn"><img src={Корзина} alt="" /></button>
                        <p className="fw-bold">Ваша корзина<br /><span className="text-success">125.000 UZS</span></p>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default index;
