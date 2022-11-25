import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";
import CategoryCard from "../../UI/category-box";
import CategoryBoxs from "../../UI/category-boxs";
import img from "../../assets/img/category-box-img.png";
import button from "../../assets/img/Кнопка следующий.png";
import wateringcan from "../../assets/img/watering can.png";
import ProductsCards from "../../UI/ProductsCards";

function index() {
    return (
        <>
            <section>    
                <div className="container pt-5">
                    <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <span to="/Сантехника" className="text-dark text-decoration-none">Сантехника</span> </p>
                    <h1 className="my-4">Сантехника</h1>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                                <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                        <div className="col-3 py-2 d-flex justify-content-center">
                            <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-decoration-none">
                            <CategoryCard obj={{"title":"Ванны","img":`${img}`}}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container position-relative">
                    <h3 className="mt-4">Особое предложение</h3><hr className="border border-1 border-dark"/>
                    <img src={button} alt="next-button" className="category_next-button"/>
                    <div className="d-inline-flex">
                        <CategoryBoxs/>
                        <CategoryBoxs/>
                        <CategoryBoxs/>
                    </div>
                    <div className="advertising"></div>
                </div>
            </section>
            <section>
                <div className="container">    
                    {/* <ProductsCards obj={{"title":"Лейки для душа","img":`${wateringcan}`,"cardtitle":"Лейка для душа Oras Apollo"}}/> */}
                </div>
            </section>
        </>
    );
}

export default index;