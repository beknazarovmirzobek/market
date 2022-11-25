import React,{useContext} from 'react';
import { NavLink,Navigate } from 'react-router-dom';
import "./style.css";
import img from "../../assets/img/card-img-1.png";
import Cards from "./basket_card.jsx";
import group from "../../assets/img/Group.png";
import context from "../../context";

function index(props) {

    const {setLogout,logout}=useContext(context);
    setLogout(true);

    return (
        <>{(!localStorage.getItem('token'))?<Navigate to="/Войти"/>:""}
            <section>
                <div className="container">
                    <div className="basket pt-5">
                        <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span className="text-dark text-decoration-none">Корзина</span> </p>
                        <div className="d-flex my-4">
                            <h1 className="">Корзина</h1>
                            <p className="pt-2 ps-3">2 товаров</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="basket d-flex">
                        <div className="basket-left">
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                        </div>
                        <div className="basket-right">
                            <div className="border-bottom d-flex py-3">
                                <img src={group} alt="" className="h-50 me-3"/>
                                <p>Бесплатно доставим в течении 12 часов </p>
                            </div>
                            <div className="pt-4">
                                <h5 className="fw-bold">Итого <span className="float-end">23 799 000 uzs</span></h5>
                                <p>Всего: 2 товара <span className="float-end">790кг</span></p>
                            </div>
                            <button className="btn product-price__btn">Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;