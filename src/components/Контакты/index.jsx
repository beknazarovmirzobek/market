import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";
import адрес from "/src/assets/img/адрес.svg"
import email from "/src/assets/img/email.svg"
import номер from "/src/assets/img/номер.svg"
import время from "/src/assets/img/время.svg"

function index(props) {
    return (
        <section>
            <div className="container py-5">
                <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span to="/Контакты" className="text-dark text-decoration-none">Контакты</span> </p>
                <h1 className="my-4">Контакты</h1>
                <div className=" d-flex justify-content-between pt-5">
                    <div className="contact-img">
                        <p className="">Фото офиса</p>
                    </div>
                    <div className="contact">
                        <div className="contact-box d-flex pb-4">
                            <img src={адрес} alt="" className="contact-icon"/>
                            <div className="ps-4">
                                <h5 className="m-0">Aдрес</h5>
                                <p>г. Ташкент, ул Юнусобод</p>
                            </div>
                        </div>
                        <div className="contact-box d-flex pb-4">
                            <img src={email} alt="" className="contact-icon text-dark"/>
                            <div className="ps-4">
                                <h5 className="m-0">E-mail</h5>
                                <p>StroyMarket@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-box d-flex pb-4">
                            <img src={номер} alt="" className="contact-icon text-dark"/>
                            <div className="ps-4">
                                <h5 className="m-0">Телефон</h5>
                                <p>+998 (99) 777-77-07, +998 (99) 777-77-77</p>
                            </div>
                        </div>
                        <div className="contact-box d-flex pb-4">
                            <img src={время} alt="" className="contact-icon text-dark"/>
                            <div className="ps-4">
                                <h5 className="m-0">График работы</h5>
                                <p>Пн-Вс. 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index;