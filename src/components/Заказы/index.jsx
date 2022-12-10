import React from 'react';
import { BrowserRouter, NavLink, Router, Routes } from 'react-router-dom';
import "./style.css";
import Card from "../../UI/Card";
import card1 from "../../assets/img/card-img-1.png"
import eye from "../../assets/img/eye.png"

function index(props) {
    return (
        <section>
            <div className="container-box">
                <div className="basket">  
                    <p><NavLink to="/" className="basket_link text-decoration-none">Главная</NavLink> &lt; <span to="/Заказы" className="basket_link text-decoration-none">Заказы</span> </p>
                    <h1 className="basket_nameTitle">Заказы</h1>
                </div>
                <div>
                    <div className="pt-5">
                        <div >
                            <p className="text-dark fw-bold fs-5">01.11.2022 11:00-14:00 <button className="btn btn-laugh fw-bold">В процессе</button> <span className="float-end">12 000 000 uzs</span></p>
                        </div>
                        <div className="cards_body d-inline-flex">
                            {/* <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} /> */}
                        </div>
                        <NavLink to="/Просмотр_заказа" className="w-100 justify-content-center d-flex text-decoration-none"><button className="btn btn-laugh-see"><img src={eye} alt="" className="me-4" />Просмотреть заказ</button></NavLink>
                    </div>
                    <div className="pt-5">
                        <div className="d-flex justify-content-between">
                            <p className="text-dark fw-bold fs-5">01.11.2022 11:00-14:00 <button className="btn-green_received fw-bold">Получен</button></p>
                            <p className="text-dark fw-bold fs-5"> <span className="">12 000 000 uzs</span> <button className="btn-green_order fw-bold">Заказать</button></p>
                        </div>
                        <div className="cards_body d-inline-flex">
                            {/* <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} /> */}
                        </div>
                        <NavLink to="/Просмотр_заказа" className="w-100 justify-content-center d-flex text-decoration-none"><button className="btn btn-laugh-see"><img src={eye} alt="" className="me-4" />Просмотреть заказ</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index;