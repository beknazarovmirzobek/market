import React, { useContext, useRef } from 'react';
import "./style.css";
import Линия_между_иконками from "/src/assets/img/Линия между иконками.png"
import Иконка_удалить from "/src/assets/img/Иконка удалить.png"
import Vector from "/src/assets/img/Vector (1).png"
import discount from "/src/assets/img/discount 3.png"
import Корзина from "/src/assets/img/Корзина.png"
import Логотип from "/src/assets/img/Логотип.png";
import Location from "/src/assets/img/location.png";
import { NavLink } from 'react-router-dom';
import context from "../../context";
import logOut from "../../API/auth/LogOut";

function index({ data, lang, setLang }) {
    const t = data[lang];

    const { setLogout, logout } = useContext(context);
    const logOutSubmit = (type) => {
        setAuth(false);
        localStorage.setItem("auth", false);
    }
    const token = localStorage.getItem('token');

    const ref = useRef();
    const btnref = useRef();

    const deleteSearch = (e) => {
        e.preventDefault();
        ref.current.value = "";
        btnref.current.classList.add("d-none");
    }

    const abdateLang=(e)=>{
        setLang(e.target.value.toLowerCase());
    }

    return (
        <header>
            <div className="header-ul">
                <div className="navbar navbar-expand-lg m-0">
                    <div className="container-box">
                        <div className="collapse navbar-collapse m-0" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto m-0">
                                <li className="nav-item">
                                    <NavLink to="/Доставка" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        {t.delivery}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Оплата" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        {t.payment}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Контакты" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        {t.contacts}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Заказы" className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        {t.orders}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Войти" onClick={() => { setLogout(false); localStorage.removeItem('token') }} className={({ isActive }) => isActive ? "nav-link text-dark" : "nav-link"}>
                                        {t.signIn}
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                    <p className="nav-link"><img src={Location} alt="" /> Tashkent</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">{t.language}:</p>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle my-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">RU</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={()=>setLang("uz")}>UZ</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <select className="nav_lang" aria-label="Default select example" onClick={abdateLang}>
                                    <option>RU</option>
                                    <option>UZ</option>
                                </select></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar2">
                <div className="container-box d-flex">
                    <NavLink to="/" className="navbar-brand"><img src={Логотип} alt="" /></NavLink>
                    <form className="d-flex justify-content-between search" role="search">
                        <input className="w-75 border-0" type="search" id="search" placeholder={t.search_product} onChange={(e)=>{(e.target.value.length!=0)? btnref.current.classList.remove("d-none"):btnref.current.classList.add("d-none")}} aria-label="Search" ref={ref} />
                        <div>
                            <button className="btn d-none" ref={btnref}><img src={Иконка_удалить} alt="" onClick={(e) => { deleteSearch(e) }} /></button>
                            <img src={Линия_между_иконками} alt="Линия" className="pt-1" />
                            <button className="btn"><img src={Vector} alt="" /></button>
                        </div>
                    </form>
                    <div className="">
                        <p className="sales-department">{t.sales_department} <span className="sales-department__tel">+998(99)777-77-77</span></p>
                    </div>
                    <NavLink to="/Избранное" className="text-decoration-none d-flex m-0 p-0">
                        <button className="btn-liked"><img src={discount} alt="" /></button>
                    </NavLink>
                    <NavLink to="/Корзина" className="text-decoration-none d-flex mt-0 pt-0">
                        <button className="btn-liked"><img src={Корзина} alt="" /></button>
                        <p className="fw-bold saved_product">{t.shopping_cart}<br /><span className="saved_product-price">125.000 UZS</span></p>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default index;
