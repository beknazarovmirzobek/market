import React from 'react';
import { BrowserRouter, NavLink, Router, Routes } from 'react-router-dom';
import "./style.css";
import Card from "../../UI/Card";
import card1 from "../../assets/img/card-img-1.png"
import eye from "../../assets/img/eye.png"

function index(props) {
    return (
        <section>
            <div className="container py-5">
                <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span to="/Заказы" className="text-dark text-decoration-none">Заказы</span> </p>
                <h1 className="my-4">Заказы</h1>
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
                        <div className="w-100 justify-content-center d-flex"><button className="btn btn-laugh-see"><img src={eye} alt="" className="me-4" />Просмотреть заказ</button></div>
                    </div>
                    <div className="pt-5">
                        <div className="d-flex justify-content-between">
                            <p className="text-dark fw-bold fs-5">01.11.2022 11:00-14:00 <button className="btn-green fw-bold">Получен</button></p>
                            <p className="text-dark fw-bold fs-5"> <span className="">12 000 000 uzs</span> <button className="btn-green fw-bold">Заказать</button></p>
                        </div>
                        <div className="cards_body d-inline-flex">
                            {/* <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                            <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} /> */}
                        </div>
                        <div className="w-100 justify-content-center d-flex"><button className="btn btn-laugh-see"><img src={eye} alt="" className="me-4" />Просмотреть заказ</button></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index;