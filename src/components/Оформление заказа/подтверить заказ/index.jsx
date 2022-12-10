import React ,{useContext,} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import "./style.css";
import context from "../../../context";
import logo from "../../../assets/img/Логотип.png";
import home from "../../../assets/img/fa6-solid_house-chimney-user.svg";
import card from "../../../assets/img/fluent_payment-48-filled.svg";
import user from "../../../assets/img/ic_round-account-circle.svg";
import car from "../../../assets/img/carbon_delivery-truck.svg";

function index(props) {
    const navigate=useNavigate();
    const { logout, setLogout } = useContext(context);
    setLogout(false);
    return (
        <>
            <section>
                <div className="decor_header">
                    <div className="container-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="decor_body d-flex">
                        <div className="decor_body-left">
                            <h1 className="decor_body-left__title">Оформление</h1>
                            <div className="decor_body-left__common">
                                <div className="decor_body-left__common__box d-flex">
                                    <div className="decor_body-left__common__img-box">
                                        <img src={home} alt=""/>
                                    </div>
                                    <div className="decor_body-left__common__info">
                                        <h3 className="decor_body-left__common__info__title">Адрес</h3>
                                        <p className="decor_body-left__common__info__text">г.Ташкент, Юнусобод район, бадамзар метро, улица Ойбек</p>
                                    </div>
                                </div>
                                <div className="decor_body-left__common__box d-flex">
                                    <div className="decor_body-left__common__img-box">
                                        <img src={car} alt=""/>
                                    </div>
                                    <div className="decor_body-left__common__info">
                                        <h3 className="decor_body-left__common__info__title">Доставка</h3>
                                        <p className="decor_body-left__common__info__text">Бесплатная, доставим в течений 12 часов</p>
                                    </div>
                                </div>
                                <div className="decor_body-left__common__box d-flex">
                                    <div className="decor_body-left__common__img-box">
                                        <img src={user} alt=""/>
                                    </div>
                                    <div className="decor_body-left__common__info">
                                        <h3 className="decor_body-left__common__info__title">Получатель</h3>
                                        <p className="decor_body-left__common__info__text">Махмудов Камрон, +998997770707</p>
                                    </div>
                                </div>
                                <div className="decor_body-left__common__box d-flex">
                                    <div className="decor_body-left__common__img-box">
                                        <img src={card} alt=""/>
                                    </div>
                                    <div className="decor_body-left__common__info">
                                        <h3 className="decor_body-left__common__info__title">Способ оплаты</h3>
                                        <p className="decor_body-left__common__info__text">Наличными при получение</p>
                                    </div>
                                </div>
                                <a href="#" className="decor_body-left__common__change">Изменить</a>
                            </div>
                            <div className="decor_body-left_footer">
                                <NavLink to="/оплаты" href="#" className="decor_body-left_footer_back text-decoration-none">Назад</NavLink>
                            </div>
                        </div>
                        <div className="decor_body-right">
                            <div className="decor_body-right-order">
                                <h2 className="decor_body-right_total">Итого <span>23 799 000 uzs</span></h2>
                                <p className="decor_body-right_text">Всего: 2 товара <span>790кг</span></p>
                                <p className="decor_body-right_text">Доставка: <span>0 uzs</span></p>
                                <NavLink to="/адрес" className="decor_body-right__btn text-decoration-none">Перейти к оплате</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;