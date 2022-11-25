import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";
import rating from "../../assets/img/rating_green.png";
import like from "../../assets/img/discount 3.png";
import productImg from "../../assets/img/smesitel_remer_k11_dlya_umyvalnika_kiss 1.png";
import line from "../../assets/img/Vector 3.png";
import star from "../../assets/img/star.svg";
import ProductsCards from "../../UI/ProductsCards";
import wateringcan from "../../assets/img/9hq__17_-removebg-preview 1.png";
import accaunt from "../../assets/img/Аккаунт.png";

function index() {
    return (
        <>
            <section>
                <div className="container pt-5">
                    <p><NavLink to="/" className="text-dark text-decoration-none">Главная</NavLink> &lt; <NavLink to="/Подкатегория" className="text-dark text-decoration-none">Сантехника</NavLink> &lt; <NavLink to="/Подкатегория/Продукты-подкотегории" className="text-dark text-decoration-none">Ванны</NavLink> &lt; <span className="text-dark text-decoration-none">Смеситель REMER K11 для умывальника KISS</span></p>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <p className="position-relative me-2">
                                <img src={rating} alt="" className="pt-2" />
                                <span className="rating-product">4.7</span></p>
                            <h1 className="fs-1"> Смеситель для раковины (умывальника) KISS</h1>
                        </div>
                        <img src={like} alt="like" className="product-like" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="product d-flex jusify-content-between">
                        <div className="product-img">
                            <img src={productImg} alt="" className="w-75" />
                            <div className="text-center mt-4">
                                <button className="btn border rounded-4 rounded-end me-2"><img src={productImg} alt="" className="product-img__btn1" /></button>
                                <button className="btn border rounded"><img src={productImg} alt="" className="product-img__btn1" /></button>
                                <button className="btn border rounded-4 rounded-start ms-2"><img src={productImg} alt="" className="product-img__btn1" /></button>
                            </div>
                        </div>
                        <div className="product-characteristic">
                            <h5>Характеристика</h5>
                            <p>Тип <img src={line} alt="" /> <span className="text-dark">сместитель</span></p>
                            <p>Управление <img src={line} alt="" /> <span className="text-dark">рыжачное</span></p>
                            <p>Назначение <img src={line} alt="" /> <span className="text-dark">для раковины</span></p>
                            <p>Материал <img src={line} alt="" /> <span className="text-dark">латунь</span></p>
                            <p>Цвет <img src={line} alt="" /> <span className="text-dark">хром, черный</span></p>
                            <p>Особености <img src={line} alt="" /> <span className="text-dark">быстрая установка</span></p>
                            <p>Бренд <img src={line} alt="" /> <span className="text-dark">KISS</span></p>
                            <p>Продавец <img src={line} alt="" /> <span className="text-dark">Сантехника.uz</span></p>
                            <div className="mt-4">
                                <a href="#" className="d-block text-decoration-none">Задать вопрос о товаре</a>
                                <a href="#" className="d-block text-decoration-none">Предложение от других магазинов</a>
                            </div>
                        </div>
                        <div className="product-price">
                            <p><span className="text-dark fs-4 fw-bold">525 000 UZS</span> за 1 шт</p>
                            <div className="d-flex">
                                <img src={star} alt="" className="product-price_star" />
                                <img src={star} alt="" className="product-price_star" />
                                <img src={star} alt="" className="product-price_star" />
                                <img src={star} alt="" className="product-price_star" />
                                <img src={star} alt="" className="product-price_star" />
                                <p className=""> (<span>2</span>) отзыва</p>
                            </div>
                            <p className="text-dark">Наличия: <span>60</span> шт</p>
                            <p className="text-dark">Цвет товара: <span>Хром</span></p>
                            <div className="d-flex mt-3">
                                <div className="border border-success rounded me-2"><img src={productImg} alt="" className="product-price_img" /></div>
                                <div className="border border-success rounded"><img src={productImg} alt="" className="product-price_img" /></div>
                            </div>
                            <p className="text-primary"><span>Самовызов</span> с 9:00 - 22:00 - от 0 uzs</p>
                            <p className="text-primary">Доставка в течении 12 часов бесплатно</p>
                            <button className="btn product-price__btn">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    {/* <ProductsCards obj={{ "title": "Еще может подойти", "img": `${wateringcan}`, "cardtitle": "Смеситель для раковины (умывальника) Frap F10801 сатин" }} /> */}
                    {/* <ProductsCards obj={{ "title": "С этим товаром смотрят", "img": `${wateringcan}`, "cardtitle": "Смеситель для раковины (умывальника) Frap F10801 сатин" }} /> */}
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="reviews mt-5">
                        <h3 className="fw-bold">Отзывы 2</h3>
                        <div className=" d-flex border-top py-4">
                            <img src={accaunt} alt="" className="reviews-img" />
                            <div className="reviews-box pe-5">
                                <div className="reviews-box__user d-flex">
                                    <h4 className="m-0 fw-bold">Kamron Tursunboyev</h4>
                                    <p className="reviews-box__user_date ms-2"> 10 декабря 2022</p>
                                </div>
                                <div>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <div className="mt-4">
                                    <h5 className="m-0 fw-bold">Комментарий</h5>
                                    <p>Отличный кран, легко установился, крепкий, матовый металлик и очень удобный рычаг. В строительных магазинах ничего подобного не попадалось, обычно идут глянцы и цена-качество не соответствует, одно разочарование. Уже купили такой же на дачу.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" border-top d-flex py-4">
                            <img src={accaunt} alt="" className="reviews-img" />
                            <div className="reviews-box pe-5">
                                <div className="reviews-box__user d-flex">
                                    <h4 className="m-0 fw-bold">Kamron Tursunboyev</h4>
                                    <p className="reviews-box__user_date ms-2"> 10 декабря 2022</p>
                                </div>
                                <div>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <div className="mt-4">
                                    <h5 className="m-0 fw-bold">Комментарий</h5>
                                    <p>Отличный кран, легко установился, крепкий, матовый металлик и очень удобный рычаг. В строительных магазинах ничего подобного не попадалось, обычно идут глянцы и цена-качество не соответствует, одно разочарование. Уже купили такой же на дачу.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="yourMark">
                        <div className="d-flex my-3">
                            <h4 className="fw-bold">Ваша оценка</h4>
                            <div className="ms-5">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <textarea rows="4" cols="50" className="yourMark_input rounded-3 border">Отзыв</textarea>
                        <button className="btn product-price__btn">Отправить отзыв</button>
                    </div>
                </div>
            </section>

        </>
    );
}

export default index;