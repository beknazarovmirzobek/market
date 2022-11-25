import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

function index(props) {
    return (
        <>
        <section>
            <div className="container py-5">
                <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span className="text-dark text-decoration-none">Доставка</span> </p>
                <h1 className="my-4">Доставка</h1>
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