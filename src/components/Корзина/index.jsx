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
                <div className="container-box">
                    <div className="basket">
                        <p><NavLink to="/" className="basket_link text-decoration-none">Главная</NavLink> &lt; <span className="basket_link">Корзина</span> </p>
                        <h1 className="basket_nameTitle">Корзина <span className="basket_product_count">2 товаров</span></h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="basket-div d-flex">
                        <div className="basket-left">
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                            <Cards card={{"img":`${img}`,"title":"Ламинат Woodstock Premium 833 Дуб шервуд медовый","price":"73 990"}}/>
                        </div>
                        <div className="basket-right">
                            <div className="basket-right_box d-flex">
                                <img src={group} alt="" className="basket-right_img"/>
                                <p className="basket-right_title">Бесплатно доставим в течении 12 часов </p>
                            </div>
                            <div className="basket-right_box2">
                                <h5 className="basket-right_box2_common">Итого <span className="float-end">23 799 000 uzs</span></h5>
                                <p className="basket-right_box2_weight">Всего: 2 товара <span className="float-end">790кг</span></p>
                            </div>
                            <button className="basket-price__btn">Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;