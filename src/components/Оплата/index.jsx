import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

function index(props) {
    return (
        <section>
            <div className="container-box">
                <div className="basket">
                    <p><NavLink to="/" className="basket_link text-decoration-none">Главная</NavLink> &lt; <span to="/Оплата" className="basket_link">Оплата</span> </p>
                    <h1 className="basket_nameTitle">Оплата</h1>
                </div>
                <div className="pt-5">
                    <div className="payment">
                        <p className="">Текст</p>
                    </div>
                    <div className="payment">
                        <p className="">Текст</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index;