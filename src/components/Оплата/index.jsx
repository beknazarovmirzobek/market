import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

function index(props) {
    return (
        <section>
            <div className="container py-5">
                <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span to="/Оплата" className="text-dark text-decoration-none">Оплата</span> </p>
                <h1 className="my-4">Оплата</h1>
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