import React, { useContext } from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import "./style.css";
import context from "../../../context";
import logo from "../../../assets/img/Логотип.png";
import clock from "../../../assets/img/ant-design_field-time-outlined.png";
import shippingFast from "../../../assets/img/fa-solid_shipping-fast.png";
function index(props) {
    const { logout, setLogout } = useContext(context);
    setLogout(false);
    const navigate=useNavigate();
    return (
        <>
            <section>
                <div className="address_header">
                    <div className="container-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="address_body d-flex">
                        <div className="address_body-left">
                            <h1 className="address_body-left__title">Как доставить заказ?</h1>
                            <div className="address_body-left__delivery d-flex justify-content-between">
                                <div className="address_body-left__delivery-box d-flex">
                                    <div className="d-flex justify-content-center align-items-center address_body-left__delivery-box__img">
                                        <img src={clock} alt="" className="h-100"/>
                                    </div>
                                    <div className="ms-2">
                                        <h4 className="address_body-left__delivery-box__title1 m-0">Бесплатно</h4>
                                        <p className="address_body-left__delivery-box__text m-0">в течении 12 часов</p>
                                    </div>
                                </div>
                                <div className="address_body-left__delivery-box d-flex">
                                    <div className="d-flex justify-content-center align-items-center address_body-left__delivery-box__img">
                                        <img src={shippingFast} alt="" className="w-100"/>
                                    </div>
                                    <div className="ms-2">
                                        <h4 className="address_body-left__delivery-box__title1 m-0">Бесплатно</h4>
                                        <p className="address_body-left__delivery-box__text m-0">в течении 12 часов</p>
                                    </div>
                                </div>
                            </div>
                            <p className="address_body-left_p">Выберите точку на карте или напишите адрес</p>
                            <input type="text" name=""  placeholder="Адрес" className="address_body-left__adres"/>
                            <textarea className="address_body-left__comments" name="" id="" cols="30" rows="10" placeholder="Комментарии для курьера"></textarea>
                            <div className="address_body-left_footer d-flex justify-content-between align-items-center">
                                <NavLink to="/Просмотр_заказа" href="#" className="address_body-left_footer_back text-decoration-none">Назад</NavLink>
                                <button className="btn-address" onClick={()=>{navigate("/получатель")}}>Дальше</button>
                            </div>
                        </div>
                        <div className="address_body-right">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;