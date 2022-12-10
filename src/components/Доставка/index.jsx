import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

function index(props) {
    return (
        <>
        <section>
            <div className="container-box">
                <div className="basket">
                    <p><NavLink to="/" className="basket_link text-decoration-none">Главная</NavLink> &lt; <span className="basket_link">Доставка</span> </p>
                    <h1 className="basket_nameTitle">Доставка</h1>
                </div>
                <div className="d-flex justify-content-between pt-5">
                    <div className="text">
                        <p className="text-dark my-auto">Текст</p>
                    </div>
                    <div className="text">
                        <p className="text-dark my-auto">Текст</p>
                    </div>
                    <div className="text">
                        <p className="text-dark my-auto">Текст</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default index;