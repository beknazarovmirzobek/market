import React from 'react';
import {NavLink} from "react-router-dom";
import Cards from "./order_card.jsx";
import "./style.css";
import img from "../../assets/img/card-img-1.png";
import group from "../../assets/img/Group.png";

function index(props) {
    return (
        <>
            <section>
                <div className="container-box">
                    <div className="order">  
                        <p><NavLink to="/" className="order_link text-decoration-none">Главная</NavLink> &lt; <span to="/Заказы" className="order_link text-decoration-none">Заказы</span> </p>
                        <h1 className="order_nameTitle">Заказы</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="order-div d-flex">
                        <div className="order-left">
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                        </div>
                        <div className="order-right">
                            <h2 className="order-right_total">Итого <span>23 799 000 uzs</span></h2>
                            <p className="order-right_text">Всего: 2 товара <span>790кг</span></p>
                            <p className="order-right_text">Доставка: <span>0 uzs</span></p>
                            <p className="order-right_text">Адрес: г.Тшакент, Юнусабад, 10 дом, 2 квартира</p>
                            <p className="order-right_text">Оплата: Наличными при получении</p>
                            <h3 className="order-right_time">01.11.2022 11:00-14:00</h3>
                            <NavLink to="/адрес" className="order-price__btn text-decoration-none">В процессе</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;