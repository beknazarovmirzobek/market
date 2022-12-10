import React ,{useContext,} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import "./style.css";
import context from "../../../context";
import logo from "../../../assets/img/Логотип.png";

function index(props) {
    const navigate=useNavigate();
    const { logout, setLogout } = useContext(context);
    setLogout(false);
    return (
        <>
            <section>
                <div className="payment_header">
                    <div className="container-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="payment_body d-flex">
                        <div className="payment_body-left">
                            <h1 className="payment_body-left__title">Способ оплаты</h1>
                            <div className="payment_body-left__money d-flex justify-content-between">
                                <div className="payment_body-left__money-box d-flex">
                                    <input type="radio" name="payment" id="cash" className="payment_body-left__money-box_cash" checked/>
                                    <label id="cash" className="payment_body-left__money-box_cash-text">Наличными при получение </label>
                                </div>
                                <div className="payment_body-left__money-box d-flex">
                                    <input type="radio" name="payment" id="card" className="payment_body-left__money-box_cash"/>
                                    <label id="card" className="payment_body-left__money-box_cash-text">Картой онлайн</label>
                                </div>
                            </div>
                            <input type="text" name=""  placeholder="Промокод" className="payment_body-left__code"/>
                            <div className="payment_body-left_footer d-flex justify-content-between align-items-center">
                                <NavLink to="/адрес" href="#" className="payment_body-left_footer_back text-decoration-none">Назад</NavLink>
                                <button className="btn-payment" onClick={()=>{navigate("/подтверить")}}>Дальше</button>
                            </div>
                        </div>
                        <div className="payment_body-right">
                            <div className="payment_body-right-order">
                                <h2 className="payment_body-right_total">Итого <span>23 799 000 uzs</span></h2>
                                <p className="payment_body-right_text">Всего: 2 товара <span>790кг</span></p>
                                <p className="payment_body-right_text">Доставка: <span>0 uzs</span></p>
                                <NavLink to="/адрес" className="payment_body-right__btn text-decoration-none">Перейти к оплате</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;