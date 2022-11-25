import React from 'react';
import "./style.css";
import clearButton from "../../assets/img/clear.png";
import { NavLink } from 'react-router-dom';
import cubes from "../../assets/img/Cubes.png";
import line from "../../assets/img/Line.png";
import PaginateCard from "../../UI/paginate_card";
import paginateCardImg from "../../assets/img/removebg-preview 1.png"

function index() {
    return (
        <>
            <section>
                <div className="container pt-5">
                    <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <NavLink to="/Подкатегория" className="text-dark text-decoration-none">Сантехника</NavLink> &lt; <span to="/Подкатегория/Продукты-подкотегории" className="text-dark text-decoration-none">Ванны</span></p>
                    <h1 className="my-4">Ванны</h1>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="advertising"></div>
                </div>
            </section>
            <section>
                <div className="container d-flex">
                    <div className="price">
                        <p className="text-dark fw-bold fs-5">Цена, сум</p>
                        <div className="d-inline-flex mt-3">
                            <div className="price_sum">
                                <p className="d-inline text-dark fw-semibold">500 000</p>
                                <button className="float-end btn p-0"><img src={clearButton} alt="" /></button>
                            </div>
                            <div className="price_sum border-secondary ms-3">
                                <p className="d-inline fw-semibold ps-1">до 1 500 000</p>
                            </div>
                        </div>
                    </div>
                    <div className="price-right">
                        <div className="price-right__department d-flex justify-content-between">
                            <select className="form-select" aria-label="Default select example">
                                <option >Популярное</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div>
                                <button className="btn"><img src={cubes} alt="cubes"/></button>
                                <button className="btn"><img src={line} alt="line"/></button>
                            </div>
                        </div>
                        <div className="price-right__paginate">
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                            
                            <NavLink to="/Подкатегория/Продукты-подкотегории/Товар" className="text-decoration-none text-dark">
                                <PaginateCard obj={{"img":`${paginateCardImg}`,"title":"Ванна Универсал Оптима 170x70 30451, чугун","info":"прямоугольная форма 170х70х39.20 см, объем 160 л подробная комплектация: Все комплектующие приобретаются отдельно съемная фронтальная панель","rating":"4.7","reviews":"18","price":"420 000"}}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;